import React, { useState, useEffect } from "react";
import {
  POSTING_SMURF,
  FETCHING_SMURF_SUCCESS,
  EDITING_SUCCESS,
} from "../types";

const SmurfForm = ({ dispatch, api, title, currentEdit, view }) => {
  const [formValues, setFormValues] = useState({
    name: "",
    age: 1,
    height: "",
  });

  const [id, setId] = useState(null);

  useEffect(() => {
    if (view === "editing") {
      setFormValues({
        name: currentEdit.name,
        age: currentEdit.age,
        height: currentEdit.height,
      });
      setId(currentEdit.id);
    }
  }, [view]);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (view === "new") {
      dispatch({ type: POSTING_SMURF });
      api
        .post("/smurfs", formValues)
        .then((res) => {
          dispatch({ type: FETCHING_SMURF_SUCCESS, payload: res.data });
        })
        .catch((err) => {
          console.error(err);
        });
    } else if (view === "editing") {
      api
        .put(`/smurfs/${id}`, formValues)
        .then((res) => {
          dispatch({ type: EDITING_SUCCESS });
          dispatch({ type: FETCHING_SMURF_SUCCESS, payload: res.data });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{title}</h1>
      <input
        type="text"
        placeholder="Name"
        value={formValues.name}
        name="name"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Age"
        value={formValues.age}
        name="age"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Example: 5cm"
        value={formValues.height}
        name="height"
        onChange={handleChange}
      />
      <button type="submit">Enroll Smurf</button>
    </form>
  );
};

export default SmurfForm;
