import React, { useState } from "react";
import { POSTING_SMURF, FETCHING_SMURF_SUCCESS } from "../types";

const SmurfForm = ({ dispatch, api }) => {
  const [formValues, setFormValues] = useState({
    name: "",
    age: 1,
    height: "",
  });

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: POSTING_SMURF });
    api
      .post("/smurfs", formValues)
      .then((res) => {
        dispatch({ type: FETCHING_SMURF_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1> Smurf Onboarding</h1>
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
