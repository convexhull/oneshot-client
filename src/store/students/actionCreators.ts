import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { RootState } from "../store";

//import types
import { Student } from "./types";

//import the axios instance with baseURL set to backend
import Axios from "../../axios/axios";

/**
 * Action creators for fetching student details
 */

export const fetchStudentDetailsStart = () => {
    return {
        type: "FETCH_STUDENT_DETAILS_START",
    };
};

export const fetchStudentDetailsSuccess = (payload: Student) => {
    return {
        type: "FETCH_STUDENT_DETAILS_SUCCESS",
        payload: payload,
    };
};

export const fetchStudentDetailsFailure = (payload: { message: string }) => {
    return {
        type: "FETCH_STUDENT_DETAILS_FAILURE",
        payload: payload,
    };
};

export const asyncFetchStudentDetailsStart = (
    studentId: string
): ThunkAction<void, RootState, unknown, Action<string>> => {
    return async (dispatch) => {
        dispatch(fetchStudentDetailsStart());
        try {
            let apiResponse = await Axios.get(
                `/students/details?id=${studentId}`
            );
            let apiResponseData: Student = apiResponse.data.data;
            dispatch(fetchStudentDetailsSuccess(apiResponseData));
        } catch (e) {
            dispatch(fetchStudentDetailsFailure({ message: e.message }));
        }
    };
};
