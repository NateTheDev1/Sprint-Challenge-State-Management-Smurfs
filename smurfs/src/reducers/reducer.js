import { FETCHING_SMURF, FETCHING_SMURF_SUCCESS, EDITING } from "../types";

const initialState = {
  smurfs: [],
  loading: false,
  editing: false,
  currentEdit: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURF:
      return { ...state, loading: true };
    case FETCHING_SMURF_SUCCESS:
      return { smurfs: action.payload, loading: false };
    case EDITING:
      return { ...state, editing: true, currentEdit: action.payload };
    default:
      return state;
  }
};

export default reducer;
