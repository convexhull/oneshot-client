//import types
import { College, CoursewiseStat, StatewiseStat } from "./types";

import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { RootState } from "../store";

//import the axios instance with baseURL set to backend
import Axios from "../../axios/axios";
import { CollegeDetails } from "./types";

/**
 * Action creators for fetching all colleges
 */

export const fetchAllCollegesStart = () => {
    return {
        type: "FETCH_ALL_COLLEGES_START",
    };
};

export const fetchAllCollegesSuccess = (payload: College[]) => {
    return {
        type: "FETCH_ALL_COLLEGES_SUCCESS",
        payload: payload,
    };
};

export const fetchAllCollegesFailure = (payload: { message: string }) => {
    return {
        type: "FETCH_ALL_COLLEGES_FAILURE",
        payload: payload,
    };
};

export const asyncFetchAllCollegesStart = (): ThunkAction<
    void,
    RootState,
    unknown,
    Action<string>
> => {
    return async (dispatch) => {
        dispatch(fetchAllCollegesStart());
        try {
            let apiResponse = await Axios.get(`/colleges`);
            let apiResponseData: College[] = apiResponse.data;
            dispatch(fetchAllCollegesSuccess(apiResponseData));
        } catch (e) {
            dispatch(fetchAllCollegesFailure({ message: e.message }));
        }
    };
};

/**
 * Action creators for statewise-stats
 */

export const fetchStatewiseStatsStart = () => {
    return {
        type: "FETCH_STATEWISE_STATS_START",
    };
};

export const fetchStatewiseStatsSuccess = (payload: StatewiseStat[]) => {
    return {
        type: "FETCH_STATEWISE_STATS_SUCCESS",
        payload: payload
    };
};

export const fetchStatewiseStatsFailure= (payload: { message : string}) => {
    return {
        type: "FETCH_STATEWISE_STATS_FAILURE",
        payload: payload
    };
};

export const asyncFetchStatewiseStatsStart = (): ThunkAction<
    void,
    RootState,
    unknown,
    Action<string>
> => {
    return async (dispatch) => {
        dispatch(fetchStatewiseStatsStart());
        try {
            let apiResponse = await Axios.get(`/colleges/statewise-stats`);
            let apiResponseData: StatewiseStat[] = apiResponse.data.data;
            dispatch(fetchStatewiseStatsSuccess(apiResponseData));
        } catch (e) {
            dispatch(fetchStatewiseStatsFailure({ message: e.message }));
        }
    };
};


/**
 * Action creators for coursewise-stats
 */

export const fetchCoursewiseStatsStart = () => {
    return {
        type: "FETCH_COURSEWISE_STATS_START",
    };
};

export const fetchCoursewiseStatsSuccess = (payload: CoursewiseStat[]) => {
    return {
        type: "FETCH_COURSEWISE_STATS_SUCCESS",
        payload: payload
    };
};

export const fetchCoursewiseStatsFailure= (payload: { message : string}) => {
    return {
        type: "FETCH_COURSEWISE_STATS_FAILURE",
        payload: payload
    };
};

export const asyncfetchCoursewiseStatsStart = (): ThunkAction<
    void,
    RootState,
    unknown,
    Action<string>
> => {
    return async (dispatch) => {
        dispatch(fetchCoursewiseStatsStart());
        try {
            let apiResponse = await Axios.get(`/colleges/coursewise-stats`);
            let apiResponseData: CoursewiseStat[] = apiResponse.data.data;
            dispatch(fetchCoursewiseStatsSuccess(apiResponseData));
        } catch (e) {
            dispatch(fetchCoursewiseStatsFailure({ message: e.message }));
        }
    };
};


/**
 * Actions creators for filtering colleges
 */


export const filterCollegesStart = () => {
    return {
        type: "FILTER_COLLEGES_START",
    };
};

export const filterCollegesSuccess = (
    payload: College[]
) => {
    return {
        type: "FILTER_COLLEGES_SUCCESS",
        payload: payload,
    };
};

export const filterCollegesFailure = (payload: {
    message: string;
}) => {
    return {
        type: "FILTER_COLLEGES_FAILURE",
        payload: payload,
    };
};

export const asyncFilterCollegesStart = (criteria: string, value : string): ThunkAction<
    void,
    RootState,
    unknown,
    Action<string>
> => {
    return async (dispatch) => {
        dispatch(filterCollegesStart());
        let queryString = `/colleges/filter?${criteria}=${value}`;
        try {
            let apiResponse = await Axios.get(queryString);
            let apiResponseData: College[] = apiResponse.data.data;
            dispatch(filterCollegesSuccess(apiResponseData));
        } catch (e) {
            dispatch(
                filterCollegesFailure({
                    message: e.message || "Some error occurred",
                })
            );
        }
    };
};




/**
 * Actions creators for fetching college details
 */


export const fetchCollegeDetailsStart = () => {
    return {
        type: "FETCH_COLLEGE_DETAILS_START",
    };
};

export const fetchCollegeDetailsSuccess = (
    payload: CollegeDetails
) => {
    return {
        type: "FETCH_COLLEGE_DETAILS_SUCCESS",
        payload: payload,
    };
};

export const fetchCollegeDetailsFailure = (payload: {
    message: string;
}) => {
    return {
        type: "FETCH_COLLEGE_DETAILS_FAILURE",
        payload: payload,
    };
};

export const asyncFetchCollegeDetailsStart = (collegeId: string): ThunkAction<
    void,
    RootState,
    unknown,
    Action<string>
> => {
    return async (dispatch) => {
        dispatch(fetchCollegeDetailsStart());
        let queryString = `/colleges/details?id=${collegeId}`;
        try {
            let apiResponse = await Axios.get(queryString);
            let apiResponseData: CollegeDetails = apiResponse.data.data;
            dispatch(fetchCollegeDetailsSuccess(apiResponseData));
        } catch (e) {
            dispatch(
                fetchCollegeDetailsFailure({
                    message: e.message || "Some error occurred",
                })
            );
        }
    };
};


/**
 * Actions creators for fetching similar colleges
 */


export const fetchSimilarCollegesStart = () => {
    return {
        type: "FETCH_SIMILAR_COLLEGES_START",
    };
};

export const fetchSimilarCollegesSuccess = (
    payload: College[]
) => {
    return {
        type: "FETCH_SIMILAR_COLLEGES_SUCCESS",
        payload: payload,
    };
};


export const fetchSimilarCollegesFailure = (payload: {
    message: string;
}) => {
    return {
        type: "FETCH_SIMILAR_COLLEGES_FAILURE",
        payload: payload,
    };
};


export const asyncFetchSimilarCollegesStart = (city: string, courses: string[]): ThunkAction<
    void,
    RootState,
    unknown,
    Action<string>
> => {
    return async (dispatch) => {
        dispatch(fetchSimilarCollegesStart());
        let queryString = `/colleges/similar-colleges?city=${city}&courses=${courses.join(',')}`;
        try {
            let apiResponse = await Axios.get(queryString);
            let apiResponseData: College[] = apiResponse.data.data;
            dispatch(fetchSimilarCollegesSuccess(apiResponseData));
        } catch (e) {
            dispatch(
                fetchSimilarCollegesFailure({
                    message: e.message || "Some error occurred",
                })
            );
        }
    };
};
