import reducer from "../reducer";

describe("Redux: loadingState reducer", () => {
    it("should return initial state", () => {
        const initState = {
            FETCH_STATEWISE_STATS: false,
            FETCH_ALL_COLLEGES: false,
            FETCH_COURSEWISE_STATS: false,
            FILTER_COLLEGES: false,
            FETCH_COLLEGE_DETAILS: false,
            FETCH_STUDENT_DETAILS: false,
            FETCH_SIMILAR_COLLEGES: false,
        };
        expect(reducer(undefined, {})).toEqual(initState);
    });

    it("should set respective request value to true for *_START type actions", () => {
        const initState = {
            FETCH_STATEWISE_STATS: false,
            FETCH_ALL_COLLEGES: false,
            FETCH_COURSEWISE_STATS: false,
            FILTER_COLLEGES: false,
            FETCH_COLLEGE_DETAILS: false,
            FETCH_STUDENT_DETAILS: false,
            FETCH_SIMILAR_COLLEGES: false,
        };
        const action = {
            type: "FETCH_COLLEGE_DETAILS_START",
        };
        const expectedState = {
            FETCH_STATEWISE_STATS: false,
            FETCH_ALL_COLLEGES: false,
            FETCH_COURSEWISE_STATS: false,
            FILTER_COLLEGES: false,
            FETCH_COLLEGE_DETAILS: true,
            FETCH_STUDENT_DETAILS: false,
            FETCH_SIMILAR_COLLEGES: false,
        };

        expect(reducer(initState, action)).toEqual(expectedState);
    });

    it("should set respective request value to false for *_SUCCESS type actions", () => {
        const initState = {
            FETCH_STATEWISE_STATS: true,
            FETCH_ALL_COLLEGES: false,
            FETCH_COURSEWISE_STATS: false,
            FILTER_COLLEGES: false,
            FETCH_COLLEGE_DETAILS: false,
            FETCH_STUDENT_DETAILS: false,
            FETCH_SIMILAR_COLLEGES: false,
        };
        const action = {
            type: "FETCH_STATEWISE_STATS_SUCCESS",
        };
        const expectedState = {
            FETCH_STATEWISE_STATS: false,
            FETCH_ALL_COLLEGES: false,
            FETCH_COURSEWISE_STATS: false,
            FILTER_COLLEGES: false,
            FETCH_COLLEGE_DETAILS: false,
            FETCH_STUDENT_DETAILS: false,
            FETCH_SIMILAR_COLLEGES: false,
        };

        expect(reducer(initState, action)).toEqual(expectedState);
    });

    it("should set respective request value to false for *_FAILURE type actions", () => {
        const initState = {
            FETCH_STATEWISE_STATS: true,
            FETCH_ALL_COLLEGES: false,
            FETCH_COURSEWISE_STATS: false,
            FILTER_COLLEGES: false,
            FETCH_COLLEGE_DETAILS: false,
            FETCH_STUDENT_DETAILS: true,
            FETCH_SIMILAR_COLLEGES: true,
        };
        const action = {
            type: "FETCH_STUDENT_DETAILS_FAILURE",
        };
        const expectedState = {
            FETCH_STATEWISE_STATS: true,
            FETCH_ALL_COLLEGES: false,
            FETCH_COURSEWISE_STATS: false,
            FILTER_COLLEGES: false,
            FETCH_COLLEGE_DETAILS: false,
            FETCH_STUDENT_DETAILS: false,
            FETCH_SIMILAR_COLLEGES: true,
        };

        expect(reducer(initState, action)).toEqual(expectedState);
    });

    it("should not change respective request value if action not of type *_START|FAILURE|SUCCESS", () => {
        const initState = {
            FETCH_STATEWISE_STATS: false,
            FETCH_ALL_COLLEGES: false,
            FETCH_COURSEWISE_STATS: false,
            FILTER_COLLEGES: false,
            FETCH_COLLEGE_DETAILS: false,
            FETCH_STUDENT_DETAILS: false,
            FETCH_SIMILAR_COLLEGES: false,
        };
        const action = {
            type: "SOME_RANDOM_ACTION",
        };
        const expectedState = {
            FETCH_STATEWISE_STATS: false,
            FETCH_ALL_COLLEGES: false,
            FETCH_COURSEWISE_STATS: false,
            FILTER_COLLEGES: false,
            FETCH_COLLEGE_DETAILS: false,
            FETCH_STUDENT_DETAILS: false,
            FETCH_SIMILAR_COLLEGES: false,
        };

        expect(reducer(initState, action)).toEqual(expectedState);
    });
});
