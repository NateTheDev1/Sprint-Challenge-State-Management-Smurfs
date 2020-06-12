import React, { Component } from "react";
import "./App.css";
import DataCard from "./DataCard";
import { connect } from "react-redux";

import api from "../api";
import { FETCHING_SMURF_SUCCESS, FETCHING_SMURF } from "../types";
import SmurfForm from "./SmurfForm";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.smurfs.length <= 0) {
      this.props.dispatch({ type: FETCHING_SMURF });
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
          <DataCard
            smurf={smurf}
            key={smurf.id}
            dispatch={this.props.dispatch}
            api={api}
          />
        ))}
        <SmurfForm dispatch={this.props.dispatch} api={api} />
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
  dispatch,
}))(App);
