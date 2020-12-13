import { Reducer } from "redux";

//import types
import { StudentState, AllActions } from "./types";

const initState: StudentState = {
    fetchedStudent: {
        _id: '',
        name: '',
        yearOfBatch: 0,
        skills: [],
        college: null
    }
};

const reducer: Reducer<StudentState, AllActions> = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_STUDENT_DETAILS_SUCCESS":
            return {
                ...state,   
                fetchedStudent: action.payload
            };
        default:
            return state;
    }
};  

export default reducer;
