import { Reducer } from "redux";

import { CollegeState, AllActions } from "./types";

const initState: CollegeState = {
    fetchedColleges: [],
    statewiseStats: [],
    fetchedCollegeDetails: {
        _id: '',
        name: '',
        yearFounded: 0,
        city: '',
        state: '',
        country: '',
        students: [],
        courses: []
    },
    coursewiseStats: []
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
        case "FETCH_COURSEWISE_STATS_SUCCESS":
            return {
                ...state,
                coursewiseStats: action.payload
            }
        case "FILTER_COLLEGES_SUCCESS":
            return {
                ...state,
                fetchedColleges: action.payload
            }
        case "FETCH_COLLEGE_DETAILS_SUCCESS":
            return {
                ...state,
                fetchedCollegeDetails: action.payload
            }
        default:
            return state;
    }
};  

export default reducer;
