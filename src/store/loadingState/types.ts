/**
 * Import all actions
 */
import { AllActions as CollegeActions } from "../colleges/types";
import { AllActions as StudentActions } from "../students/types";

export type AllActions = CollegeActions | StudentActions;

/**
 * type of 'loadingState' slice of the app state
 */

export type LoadingState = {
    //The keys here should be prefix of the respective action that it corresponds to.
    //For example, if the actions to be covered are FETCH_GAME_INFO_START, FETCH_GAME_INFO_SUCCESS and FETCH_GAME_INFO_FAILURE
    //then our loadingState slice will contain FETCH_GAME_INFO field. This pattern is important and is used for regex based
    //matching in the reducer.

    FETCH_STATEWISE_STATS: boolean;
    FETCH_ALL_COLLEGES: boolean;
    FETCH_COURSEWISE_STATS: boolean;
    FILTER_COLLEGES: boolean;
    FETCH_COLLEGE_DETAILS: boolean;
    FETCH_STUDENT_DETAILS: boolean;
    FETCH_SIMILAR_COLLEGES: boolean;
};
