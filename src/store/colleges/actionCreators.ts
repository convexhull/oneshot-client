//import types
import { College, StatewiseStat } from "./types";

import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { RootState } from "../store";

//import the axios instance with baseURL set to backend
import Axios from "../../axios/axios";

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
    console.log(payload);
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
 * Actions creators for game score
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
            console.log(apiResponseData,"xxxx");
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
