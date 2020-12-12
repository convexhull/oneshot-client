import { Reducer } from "redux";

import { CollegeState, AllActions } from "./types";

const initState: CollegeState = {
    fetchedColleges: [],
    statewiseStats: []
};

const reducer: Reducer<CollegeState, AllActions> = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_ALL_COLLEGES_SUCCESS":
            return {
                ...state,
                fetchedColleges: action.payload
            };
        case "FETCH_STATEWISE_STATS_SUCCESS":
            return {
                ...state,
                statewiseStats: action.payload
            }
        case "FILTER_COLLEGES_SUCCESS":
            return {
                ...state,
                fetchedColleges: action.payload
            }
        default:
            return state;
    }
};  

export default reducer;
