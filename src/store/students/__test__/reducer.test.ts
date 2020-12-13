import reducer from "../reducer";

describe("Redux: 'students' reducer", () => {

    it("should return initial state", () => {
        const initState = {
            fetchedStudent: {
                _id: '',
                name: '',
                yearOfBatch: 0,
                skills: [],
                college: []
            }
        };
        expect(reducer(undefined, {})).toEqual(initState);
    });

    it("should handle 'FETCH_STUDENT_DETAILS_SUCCESS'", () => {
        const initState = {
            fetchedStudent: {
                _id: '',
                name: '',
                yearOfBatch: 0,
                skills: [],
                college: []
            }
        };
        const testPayload = {
            _id: 'test-id',
            name: 'test-name',
            yearOfBatch: 10,
            skills: ["s1", "s2"],
            college: ["c1", "c2"]
        }
        const action = {
            type: "FETCH_STUDENT_DETAILS_SUCCESS",
            payload: testPayload,
        };
        const expectedState = {
            fetchedStudent: testPayload
        };
        expect(reducer(initState, action)).toEqual(expectedState);
    });
});
