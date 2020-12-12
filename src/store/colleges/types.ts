/**
 * Type for colleges slice of the app state
 */

export type College = {
    _id: string;
    name: string;
    yearFounded: number;
    city: string;
    state: string;
    country: string;
    courses: string[];
    student_ids: string[];
}

export type StatewiseStat = {
    name: string,
    value: number
}




export type CollegeState = {
    fetchedColleges: College[];
    statewiseStats: StatewiseStat[]
};


/**
 * TYPES FOR FETCHING ALL COLLEGES
 */

export type FetchAllCollegesStartAction = {
    type: "FETCH_ALL_COLLEGES_START";
};

export type FetchAllCollegesSuccessAction = {
    type: "FETCH_ALL_COLLEGES_SUCCESS";
    payload: College[];
};

export type FetchAllCollegesFailureAction = {
    type: "FETCH_ALL_COLLEGES_FAILURE";
    payload: {
        message: string;
    };
};

export type FetchAllCollegesActions =
    | FetchAllCollegesStartAction
    | FetchAllCollegesSuccessAction
    | FetchAllCollegesFailureAction;



/**
 * TYPES FOR FETCHING STATEWISE STATS
 */


export type FetchStatewiseStatsStartAction = {
    type: "FETCH_STATEWISE_STATS_START";
};

export type FetchStatewiseStatsSuccessAction = {
    type: "FETCH_STATEWISE_STATS_SUCCESS";
    payload: StatewiseStat[]
};

export type FetchStatewiseStatsFailureAction = {
    type: "FETCH_STATEWISE_STATS_FAILURE";
    payload: {
        message: string;
    };
};

export type FetchStatewiseStatsActions =
    | FetchStatewiseStatsStartAction
    | FetchStatewiseStatsSuccessAction
    | FetchStatewiseStatsFailureAction;


/**
 * TYPES FOR FILTERING COLLEGES 
 */


export type filterCollegesStartAction = {
    type: "FILTER_COLLEGES_START";
};

export type filterCollegesSuccessAction = {
    type: "FILTER_COLLEGES_SUCCESS";
    payload: College[]
};

export type filterCollegesFailureAction = {
    type: "FILTER_COLLEGES_FAILURE";
    payload: {
        message: string;
    };
};


export type FilterCollegesActions =
    | filterCollegesStartAction
    | filterCollegesSuccessAction
    | filterCollegesFailureAction;


export type AllActions =
    | FetchAllCollegesActions
    | FetchStatewiseStatsActions
    | FilterCollegesActions
