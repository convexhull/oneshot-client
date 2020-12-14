import axiosInstance from "../../../axios/axios";
import * as actions from "../actionCreators";
import configureMockStore from "redux-mock-store";
import Thunk from "redux-thunk";

//Mock our axios instance for mocking api calls
jest.mock("../../../axios/axios");

describe("Redux: 'students' action creators", () => {
    describe("FETCH_STUDENT_DETAILS actions", () => {
        it("should create FETCH_STUDENT_DETAILS_START action", () => {
            const expectedAction = {
                type: "FETCH_STUDENT_DETAILS_START",
            };
            expect(actions.fetchStudentDetailsStart()).toEqual(expectedAction);
        });

        it("should create FETCH_STUDENT_DETAILS_SUCCESS action", () => {
            const testPayload = {
                _id: "test-id",
                name: "test-name",
                yearOfBatch: 10,
                skills: ["s1", "s2"],
                college: ["c1", "c2"],
            };
            const expectedAction = {
                type: "FETCH_STUDENT_DETAILS_SUCCESS",
                payload: testPayload,
            };

            expect(actions.fetchStudentDetailsSuccess(testPayload)).toEqual(
                expectedAction
            );
        });

        it("should create FETCH_STUDENT_DETAILS_FAILURE action", () => {
            const testPayload = {
                message: "Some error occurred",
            };
            const expectedAction = {
                type: "FETCH_STUDENT_DETAILS_FAILURE",
                payload: testPayload,
            };

            expect(actions.fetchStudentDetailsFailure(testPayload)).toEqual(
                expectedAction
            );
        });

        it("should start fetching student details and create FETCH_STUDENT_DETAILS_SUCCESS action when fetched successfully", async () => {
            const mockResponse = {
                _id: "test-id",
                name: "test-name",
                yearOfBatch: 10,
                skills: ["s1", "s2"],
                college: ["c1", "c2"],
            };
            const expectedActions = [
                {
                    type: "FETCH_STUDENT_DETAILS_START",
                },
                {
                    type: "FETCH_STUDENT_DETAILS_SUCCESS",
                    payload: mockResponse,
                },
            ];
            axiosInstance.get.mockResolvedValue({
                data: { data: mockResponse },
            });
            const middlewares = [Thunk];
            const mockStore = configureMockStore(middlewares);
            const store = mockStore({});
            await store.dispatch(actions.asyncFetchStudentDetailsStart());
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
