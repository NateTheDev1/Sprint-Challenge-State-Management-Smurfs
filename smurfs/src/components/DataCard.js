import React from "react";
import { FETCHING_SMURF_SUCCESS, DELETING_SMURF, EDITING } from "../types";

const DataCard = ({ smurf, dispatch, api }) => {
  if (!smurf) {
    return <h1>Loading...</h1>;
  }

  const handleDelete = () => {
    dispatch({ type: DELETING_SMURF });
    api
      .delete(`/smurfs/${smurf.id}`)
      .then((res) => {
        dispatch({ type: FETCHING_SMURF_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEdit = () => {
    dispatch({ type: EDITING, payload: smurf });
  };

  return (
    <div style={{ width: "25%" }}>
      <h1>Name: {smurf.name}</h1>
      <h2>Age: {smurf.age}</h2>
      <p>Height: {smurf.height}</p>
      <p>Smurf ID: {smurf.id}</p>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DataCard;
