import React from "react";

const DataCard = ({ smurf }) => {
  if (!smurf) {
    return <h1>Loading...</h1>;
  }

  return (
    <div style={{ width: "25%" }}>
      <h1>Name: {smurf.name}</h1>
      <h2>Age: {smurf.age}</h2>
      <p>Height: {smurf.height}</p>
      <p>Smurf ID: {smurf.id}</p>
    </div>
  );
};

export default DataCard;
