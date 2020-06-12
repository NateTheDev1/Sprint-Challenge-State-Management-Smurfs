import React, { Component } from "react";
import "./App.css";
import DataCard from "./DataCard";
import { connect } from "react-redux";
import { fetchSmurfs } from "../actions/actions";
import api from "../api";
import { FETCHING_SMURF_SUCCESS } from "../types";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    api
      .get("/smurfs")
      .then((res) => {
        this.props.dispatch({
          type: FETCHING_SMURF_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    if (this.props.loading) {
      return <h1 style={{ textAlign: "center" }}>Fetching Smurfs</h1>;
    }
    return (
      <div className="App">
        <h1>Smurfs Here!</h1>
        <hr />
        {this.props.smurfs.map((smurf) => (
          <DataCard smurf={smurf} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    smurfs: state.smurfs,
  };
};

export default connect(mapStateToProps, (dispatch) => ({
  fetchSmurfs,
  dispatch,
}))(App);
