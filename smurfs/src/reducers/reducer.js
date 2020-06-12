import { FETCHING_SMURF, FETCHING_SMURF_SUCCESS } from "../types";

const initialState = {
  smurfs: [],
  loading: false,
};
const reducer = (state = initialState, action) => {
  console.log("here");
  switch (action.type) {
    case FETCHING_SMURF:
      return { ...state, loading: true };
    case FETCHING_SMURF_SUCCESS:
      return { smurfs: action.payload, loading: false };
    default:
      return state;
  }
};

export default reducer;
