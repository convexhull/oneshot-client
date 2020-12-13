import { College } from "../colleges/types"

//type for student state slice of store
export type StudentState = {
    fetchedStudent: Student
}

export type Student = {
    _id: string;
    name: string;
    yearOfBatch: number;
    college_id?: string;
    skills: string[];
    college: College[]
}

/**
 * TYPES FOR FETCHING STUDENT DETAILS
 */

export type FetchStudentDetailsStartAction = {
    type: "FETCH_STUDENT_DETAILS_START";
};

export type FetchStudentDetailsSuccessAction = {
    type: "FETCH_STUDENT_DETAILS_SUCCESS";
    payload: Student
};

export type FetchStudentDetailsFailureAction = {
    type: "FETCH_STUDENT_DETAILS_FAILURE";
    payload: {
        message: string;
    };
};

export type FetchStudentDetailsActions =
    | FetchStudentDetailsStartAction
    | FetchStudentDetailsSuccessAction
    | FetchStudentDetailsFailureAction;



export type AllActions = 
    | FetchStudentDetailsActions;