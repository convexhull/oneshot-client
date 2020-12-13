import reducer from "../reducer";

describe("Redux: 'colleges' reducer", () => {

    it("should return initial state", () => {
        const initState = {
            fetchedColleges: [],
            statewiseStats: [],
            fetchedCollegeDetails: {
                _id: "",
                name: "",
                yearFounded: 0,
                city: "",
                state: "",
                country: "",
                students: [],
                courses: [],
            },
            coursewiseStats: [],
        };
        expect(reducer(undefined, {})).toEqual(initState);
    });

    it("should handle 'FETCH_ALL_COLLEGES_SUCCESS'", () => {
        const initState = {
            fetchedColleges: [],
            statewiseStats: [],
            fetchedCollegeDetails: {
                _id: "",
                name: "",
                yearFounded: 0,
                city: "",
                state: "",
                country: "",
                students: [],
                courses: [],
            },
            coursewiseStats: [],
        };
        const testPayload = [
            {
                _id: 'test-id',
                name: 'test-name',
                yearFounded: 123,
                city: 'test-city',
                state: 'test-state',
                country: 'test-country',
                courses: ['c1', 'c2'],
                student_ids: ['id1', 'id2']
            }
        ];
        const action = {
            type: "FETCH_ALL_COLLEGES_SUCCESS",
            payload: testPayload,
        };
        const expectedState = {
            fetchedColleges: [{
                _id: 'test-id',
                name: 'test-name',
                yearFounded: 123,
                city: 'test-city',
                state: 'test-state',
                country: 'test-country',
                courses: ['c1', 'c2'],
                student_ids: ['id1', 'id2']
            }],
            statewiseStats: [],
            fetchedCollegeDetails: {
                _id: "",
                name: "",
                yearFounded: 0,
                city: "",
                state: "",
                country: "",
                students: [],
                courses: [],
            },
            coursewiseStats: [],
        };
        expect(reducer(initState, action)).toEqual(expectedState);
    });


    it("should handle 'FETCH_STATEWISE_STATS_SUCCESS'", () => {
        const initState = {
            fetchedColleges: [],
            statewiseStats: [],
            fetchedCollegeDetails: {
                _id: "",
                name: "",
                yearFounded: 0,
                city: "",
                state: "",
                country: "",
                students: [],
                courses: [],
            },
            coursewiseStats: [],
        };
        const testPayload = [
            {
                name: "test-name",
                value: 123
            }
        ];
        const action = {
            type: "FETCH_STATEWISE_STATS_SUCCESS",
            payload: testPayload,
        };
        const expectedState = {
            fetchedColleges: [],
            statewiseStats: [{
                name: "test-name",
                value: 123
            }],
            fetchedCollegeDetails: {
                _id: "",
                name: "",
                yearFounded: 0,
                city: "",
                state: "",
                country: "",
                students: [],
                courses: [],
            },
            coursewiseStats: [],
        };
        expect(reducer(initState, action)).toEqual(expectedState);
    });


    it("should handle 'FETCH_COURSEWISE_STATS_SUCCESS'", () => {
        const initState = {
            fetchedColleges: [],
            statewiseStats: [],
            fetchedCollegeDetails: {
                _id: "",
                name: "",
                yearFounded: 0,
                city: "",
                state: "",
                country: "",
                students: [],
                courses: [],
            },
            coursewiseStats: [],
        };
        const testPayload = [
            {
                name: "test-name",
                value: 123
            }
        ];
        const action = {
            type: "FETCH_COURSEWISE_STATS_SUCCESS",
            payload: testPayload,
        };
        const expectedState = {
            fetchedColleges: [],
            statewiseStats: [],
            fetchedCollegeDetails: {
                _id: "",
                name: "",
                yearFounded: 0,
                city: "",
                state: "",
                country: "",
                students: [],
                courses: [],
            },
            coursewiseStats: [
                {
                    name: "test-name",
                    value: 123
                }
            ],
        };
        expect(reducer(initState, action)).toEqual(expectedState);
    });


    it("should handle 'FILTER_COLLEGES_SUCCESS'", () => {
        const initState = {
            fetchedColleges: [],
            statewiseStats: [],
            fetchedCollegeDetails: {
                _id: "",
                name: "",
                yearFounded: 0,
                city: "",
                state: "",
                country: "",
                students: [],
                courses: [],
            },
            coursewiseStats: [],
        };
        const testPayload = [
            {
                _id: 'test-id',
                name: 'test-name',
                yearFounded: 123,
                city: 'test-city',
                state: 'test-state',
                country: 'test-country',
                courses: ['c1', 'c2'],
                student_ids: ['id1', 'id2']
            }
        ];
        const action = {
            type: "FILTER_COLLEGES_SUCCESS",
            payload: testPayload,
        };
        const expectedState = {
            fetchedColleges: [{
                _id: 'test-id',
                name: 'test-name',
                yearFounded: 123,
                city: 'test-city',
                state: 'test-state',
                country: 'test-country',
                courses: ['c1', 'c2'],
                student_ids: ['id1', 'id2']
            }],
            statewiseStats: [],
            fetchedCollegeDetails: {
                _id: "",
                name: "",
                yearFounded: 0,
                city: "",
                state: "",
                country: "",
                students: [],
                courses: [],
            },
            coursewiseStats: [],
        };
        expect(reducer(initState, action)).toEqual(expectedState);
    });



    it("should handle 'FETCH_COLLEGE_DETAILS_SUCCESS'", () => {
        const initState = {
            fetchedColleges: [],
            statewiseStats: [],
            fetchedCollegeDetails: {
                _id: "",
                name: "",
                yearFounded: 0,
                city: "",
                state: "",
                country: "",
                students: [],
                courses: [],
            },
            coursewiseStats: [],
        };
        const testPayload = {
            _id: 'test-id',
            name: 'test-name',
            yearFounded: 123,
            city: 'test-city',
            state: 'test-state',
            country: 'test-country',
            courses: ['c1', 'c2'],
            students: ['st1', 'st2']
        }
        const action = {
            type: "FETCH_COLLEGE_DETAILS_SUCCESS",
            payload: testPayload,
        };
        const expectedState = {
            fetchedColleges: [],
            statewiseStats: [],
            fetchedCollegeDetails: {
                _id: 'test-id',
                name: 'test-name',
                yearFounded: 123,
                city: 'test-city',
                state: 'test-state',
                country: 'test-country',
                courses: ['c1', 'c2'],
                students: ['st1', 'st2']
            },
            coursewiseStats: [],
        };
        expect(reducer(initState, action)).toEqual(expectedState);
    });


    it("should handle 'FETCH_SIMILAR_COLLEGES_SUCCESS'", () => {
        const initState = {
            fetchedColleges: [],
            statewiseStats: [],
            fetchedCollegeDetails: {
                _id: "",
                name: "",
                yearFounded: 0,
                city: "",
                state: "",
                country: "",
                students: [],
                courses: [],
            },
            coursewiseStats: [],
        };
        const testPayload = [
            {
                _id: 'test-id',
                name: 'test-name',
                yearFounded: 123,
                city: 'test-city',
                state: 'test-state',
                country: 'test-country',
                courses: ['c1', 'c2'],
                student_ids: ['id1', 'id2']
            }
        ];
        const action = {
            type: "FETCH_SIMILAR_COLLEGES_SUCCESS",
            payload: testPayload,
        };
        const expectedState = {
            fetchedColleges: [{
                _id: 'test-id',
                name: 'test-name',
                yearFounded: 123,
                city: 'test-city',
                state: 'test-state',
                country: 'test-country',
                courses: ['c1', 'c2'],
                student_ids: ['id1', 'id2']
            }],
            statewiseStats: [],
            fetchedCollegeDetails: {
                _id: "",
                name: "",
                yearFounded: 0,
                city: "",
                state: "",
                country: "",
                students: [],
                courses: [],
            },
            coursewiseStats: [],
        };
        expect(reducer(initState, action)).toEqual(expectedState);
    });
    
});
