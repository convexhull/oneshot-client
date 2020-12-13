//import other types
import { Student } from "../students/types";




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
    name: string;
    value: number;
}


export type CoursewiseStat = {
    name: string;
    value: number
}

export type CollegeDetails = {
    _id: string;
    name: string;
    yearFounded: number;
    city: string;
    state: string;
    country: string;
    courses: string[];
    students: Student[]
}


export type CollegeState = {
    fetchedColleges: College[];
    statewiseStats: StatewiseStat[];
    fetchedCollegeDetails: CollegeDetails;
    coursewiseStats: CoursewiseStat[]
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
 * TYPES FOR FETCHING COURSEWISE STATS
 */


export type FetchCoursewiseStatsStartAction = {
    type: "FETCH_COURSEWISE_STATS_START";
};

export type FetchCoursewiseStatsSuccessAction = {
    type: "FETCH_COURSEWISE_STATS_SUCCESS";
    payload: CoursewiseStat[]
};

export type FetchCoursewiseStatsFailureAction = {
    type: "FETCH_COURSEWISE_STATS_FAILURE";
    payload: {
        message: string;
    };
};

export type FetchCoursewiseStatsActions =
    | FetchCoursewiseStatsStartAction
    | FetchCoursewiseStatsSuccessAction
    | FetchCoursewiseStatsFailureAction;

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



/**
 * TYPES FOR FETCHING COLLEGE DETAILS
 */





export type FetchCollegeDetailsStartAction = {
    type: "FETCH_COLLEGE_DETAILS_START";
};

export type FetchCollegeDetailsSuccessAction = {
    type: "FETCH_COLLEGE_DETAILS_SUCCESS";
    payload: CollegeDetails
};

export type FetchCollegeDetailsFailureAction = {
    type: "FETCH_COLLEGE_DETAILS_FAILURE";
    payload: {
        message: string;
    };
};


export type FetchCollegeDetailsActions =
    | FetchCollegeDetailsStartAction
    | FetchCollegeDetailsSuccessAction
    | FetchCollegeDetailsFailureAction;





/**
 * TYPES FOR FETCHING SIMILAR COLLEGES
 */


export type FetchSimilarCollegesStartAction = {
    type: "FETCH_SIMILAR_COLLEGES_START";
};

export type FetchSimilarCollegesSuccessAction = {
    type: "FETCH_SIMILAR_COLLEGES_SUCCESS";
    payload: College[]
};

export type FetchSimilarCollegesFailureAction = {
    type: "FETCH_SIMILAR_COLLEGES_FAILURE";
    payload: {
        message: string;
    };
};


export type FetchSimilarCollegesActions =
    | FetchSimilarCollegesStartAction
    | FetchSimilarCollegesSuccessAction
    | FetchSimilarCollegesFailureAction;

export type AllActions =
    | FetchAllCollegesActions
    | FetchStatewiseStatsActions
    | FetchCoursewiseStatsActions
    | FilterCollegesActions
    | FetchCollegeDetailsActions
    | FetchSimilarCollegesActions
