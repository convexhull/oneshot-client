import axiosInstance from "../../../axios/axios";
import * as actions from "../actionCreators";
import configureMockStore from "redux-mock-store";
import Thunk from "redux-thunk";

//Mock our axios instance for mocking api calls
jest.mock("../../../axios/axios");

describe("Redux: 'colleges' action creators", () => {
    describe("FETCH_ALL_COLLEGES actions", () => {
        it("should create FETCH_ALL_COLLEGES_START action", () => {
            const expectedAction = {
                type: "FETCH_ALL_COLLEGES_START",
            };
            expect(actions.fetchAllCollegesStart()).toEqual(expectedAction);
        });

        it("should create FETCH_ALL_COLLEGES_SUCCESS action", () => {
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
            const expectedAction = {
                type: "FETCH_ALL_COLLEGES_SUCCESS",
                payload: testPayload,
            };

            expect(actions.fetchAllCollegesSuccess(testPayload)).toEqual(
                expectedAction
            );
        });

        it("should create FETCH_ALL_COLLEGES_FAILURE action", () => {
            const testPayload = {
                message: "Some error occurred",
            };
            const expectedAction = {
                type: "FETCH_ALL_COLLEGES_FAILURE",
                payload: testPayload,
            };

            expect(actions.fetchAllCollegesFailure(testPayload)).toEqual(
                expectedAction
            );
        });

        it("should start fetching colleges and create FETCH_ALL_COLLEGES_SUCCESS action when all colleges are fetched successfully", async () => {
            const mockResponse = [
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
            const expectedActions = [
                {
                    type: "FETCH_ALL_COLLEGES_START",
                },
                {
                    type: "FETCH_ALL_COLLEGES_SUCCESS",
                    payload: mockResponse,
                },
            ];
            axiosInstance.get.mockResolvedValue({ data: mockResponse });
            const middlewares = [Thunk];
            const mockStore = configureMockStore(middlewares);
            const store = mockStore({});
            await store.dispatch(actions.asyncFetchAllCollegesStart());
            expect(store.getActions()).toEqual(expectedActions);
        });
    });


    describe("FETCH_STATEWISE_STATS actions", () => {
        it("should create FETCH_STATEWISE_STATS_START action", () => {
            const expectedAction = {
                type: "FETCH_STATEWISE_STATS_START",
            };
            expect(actions.fetchStatewiseStatsStart()).toEqual(expectedAction);
        });

        it("should create FETCH_STATEWISE_STATS_SUCCESS action", () => {
            const testPayload = [
                {
                    name: "test-name",
                    value: 123
                }
            ];
            const expectedAction = {
                type: "FETCH_STATEWISE_STATS_SUCCESS",
                payload: testPayload,
            };

            expect(actions.fetchStatewiseStatsSuccess(testPayload)).toEqual(
                expectedAction
            );
        });


        it("should create FETCH_STATEWISE_STATS_FAILURE action", () => {
            const testPayload = {
                message: "Some error occurred",
            };
            const expectedAction = {
                type: "FETCH_STATEWISE_STATS_FAILURE",
                payload: testPayload,
            };

            expect(actions.fetchStatewiseStatsFailure(testPayload)).toEqual(
                expectedAction
            );
        });

        it("should start fetching statewise stats and create FETCH_STATEWISE_STATS_SUCCESS action when all colleges are fetched successfully", async () => {
            const mockResponse = [
                {
                    name: "test-name-1",
                    value: 123
                },
                {
                    name: "test-name-2",
                    value: 321
                }
            ]
            const expectedActions = [
                {
                    type: "FETCH_STATEWISE_STATS_START",
                },
                {
                    type: "FETCH_STATEWISE_STATS_SUCCESS",
                    payload: mockResponse
                },
            ];
            axiosInstance.get.mockResolvedValue({ data: {data: mockResponse }});
            const middlewares = [Thunk];
            const mockStore = configureMockStore(middlewares);
            const store = mockStore({});
            await store.dispatch(actions.asyncFetchStatewiseStatsStart());
            expect(store.getActions()).toEqual(expectedActions);
        });
    });



    describe("FETCH_COURSEWISE_STATS actions", () => {
        it("should create FETCH_COURSEWISE_STATS_START action", () => {
            const expectedAction = {
                type: "FETCH_COURSEWISE_STATS_START",
            };
            expect(actions.fetchCoursewiseStatsStart()).toEqual(expectedAction);
        });

        it("should create FETCH_COURSEWISE_STATS_SUCCESS action", () => {
            const testPayload = [
                {
                    name: "test-name",
                    value: 123
                }
            ];
            const expectedAction = {
                type: "FETCH_COURSEWISE_STATS_SUCCESS",
                payload: testPayload,
            };

            expect(actions.fetchCoursewiseStatsSuccess(testPayload)).toEqual(
                expectedAction
            );
        });


        it("should create FETCH_COURSEWISE_STATS_FAILURE action", () => {
            const testPayload = {
                message: "Some error occurred",
            };
            const expectedAction = {
                type: "FETCH_COURSEWISE_STATS_FAILURE",
                payload: testPayload,
            };

            expect(actions.fetchCoursewiseStatsFailure(testPayload)).toEqual(
                expectedAction
            );
        });

        it("should start fetching coursewise stats and create FETCH_COURSEWISE_STATS_SUCCESS action when all colleges are fetched successfully", async () => {
            const mockResponse = [
                {
                    name: "test-name-1",
                    value: 123
                },
                {
                    name: "test-name-2",
                    value: 321
                }
            ]
            const expectedActions = [
                {
                    type: "FETCH_COURSEWISE_STATS_START",
                },
                {
                    type: "FETCH_COURSEWISE_STATS_SUCCESS",
                    payload: mockResponse
                },
            ];
            axiosInstance.get.mockResolvedValue({ data: {data: mockResponse }});
            const middlewares = [Thunk];
            const mockStore = configureMockStore(middlewares);
            const store = mockStore({});
            await store.dispatch(actions.asyncfetchCoursewiseStatsStart());
            expect(store.getActions()).toEqual(expectedActions);
        });
    });


    describe("FILTER_COLLEGES actions", () => {
        it("should create FILTER_COLLEGES_START action", () => {
            const expectedAction = {
                type: "FILTER_COLLEGES_START",
            };
            expect(actions.filterCollegesStart()).toEqual(expectedAction);
        });

        it("should create FILTER_COLLEGES_SUCCESS action", () => {
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
            const expectedAction = {
                type: "FILTER_COLLEGES_SUCCESS",
                payload: testPayload,
            };

            expect(actions.filterCollegesSuccess(testPayload)).toEqual(
                expectedAction
            );
        });


        it("should create FILTER_COLLEGES_FAILURE action", () => {
            const testPayload = {
                message: "Some error occurred",
            };
            const expectedAction = {
                type: "FILTER_COLLEGES_FAILURE",
                payload: testPayload,
            };

            expect(actions.filterCollegesFailure(testPayload)).toEqual(
                expectedAction
            );
        });

        it("should start filtering request and create FILTER_COLLEGES_SUCCESS action when filtered colleges fetched successfully", async () => {
            const mockResponse = [
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
            const expectedActions = [
                {
                    type: "FILTER_COLLEGES_START",
                },
                {
                    type: "FILTER_COLLEGES_SUCCESS",
                    payload: mockResponse
                },
            ];
            axiosInstance.get.mockResolvedValue({ data: {data: mockResponse }});
            const middlewares = [Thunk];
            const mockStore = configureMockStore(middlewares);
            const store = mockStore({});
            await store.dispatch(actions.asyncFilterCollegesStart());
            expect(store.getActions()).toEqual(expectedActions);
        });
    });



    describe("FETCH_COLLEGE_DETAILS actions", () => {
        it("should create FETCH_COLLEGE_DETAILS_START action", () => {
            const expectedAction = {
                type: "FETCH_COLLEGE_DETAILS_START",
            };
            expect(actions.fetchCollegeDetailsStart()).toEqual(expectedAction);
        });

        it("should create FETCH_COLLEGE_DETAILS_SUCCESS action", () => {
            const testPayload = {
                _id: "test-id",
                name: "test-name",
                yearFounded: 123,
                city: "test-city",
                state: "test-state",
                country: "test-country",
                courses: ["c1", "c2"],
                students: [],
            };
            const expectedAction = {
                type: "FETCH_COLLEGE_DETAILS_SUCCESS",
                payload: testPayload,
            };

            expect(actions.fetchCollegeDetailsSuccess(testPayload)).toEqual(
                expectedAction
            );
        });


        it("should create FETCH_COLLEGE_DETAILS_FAILURE action", () => {
            const testPayload = {
                message: "Some error occurred",
            };
            const expectedAction = {
                type: "FETCH_COLLEGE_DETAILS_FAILURE",
                payload: testPayload,
            };

            expect(actions.fetchCollegeDetailsFailure(testPayload)).toEqual(
                expectedAction
            );
        });

        it("should start fetching college details and create FETCH_COLLEGE_DETAILS_SUCCESS action when college details fetched successfully", async () => {
            const mockResponse = {
                _id: "test-id",
                name: "test-name",
                yearFounded: 123,
                city: "test-city",
                state: "test-state",
                country: "test-country",
                courses: ["c1", "c2"],
                students: [],
            };
            const expectedActions = [
                {
                    type: "FETCH_COLLEGE_DETAILS_START",
                },
                {
                    type: "FETCH_COLLEGE_DETAILS_SUCCESS",
                    payload: mockResponse
                },
            ];
            axiosInstance.get.mockResolvedValue({ data: {data: mockResponse }});
            const middlewares = [Thunk];
            const mockStore = configureMockStore(middlewares);
            const store = mockStore({});
            await store.dispatch(actions.asyncFetchCollegeDetailsStart());
            expect(store.getActions()).toEqual(expectedActions);
        });
    });


    describe("FETCH_SIMILAR_COLLEGES actions", () => {
        it("should create FETCH_SIMILAR_COLLEGES_START action", () => {
            const expectedAction = {
                type: "FETCH_SIMILAR_COLLEGES_START",
            };
            expect(actions.fetchSimilarCollegesStart()).toEqual(expectedAction);
        });

        it("should create FETCH_SIMILAR_COLLEGES_SUCCESS action", () => {
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
            const expectedAction = {
                type: "FETCH_SIMILAR_COLLEGES_SUCCESS",
                payload: testPayload,
            };

            expect(actions.fetchSimilarCollegesSuccess(testPayload)).toEqual(
                expectedAction
            );
        });

        it("should create FETCH_SIMILAR_COLLEGES_FAILURE action", () => {
            const testPayload = {
                message: "Some error occurred",
            };
            const expectedAction = {
                type: "FETCH_SIMILAR_COLLEGES_FAILURE",
                payload: testPayload,
            };

            expect(actions.fetchSimilarCollegesFailure(testPayload)).toEqual(
                expectedAction
            );
        });

        it("should start fetching colleges and create FETCH_SIMILAR_COLLEGES_SUCCESS action when all colleges are fetched successfully", async () => {
            const mockResponse = [
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
            const expectedActions = [
                {
                    type: "FETCH_SIMILAR_COLLEGES_START",
                },
                {
                    type: "FETCH_SIMILAR_COLLEGES_SUCCESS",
                    payload: mockResponse,
                },
            ];
            axiosInstance.get.mockResolvedValue({ data: { data: mockResponse }});
            const middlewares = [Thunk];
            const mockStore = configureMockStore(middlewares);
            const store = mockStore({});
            let city = "test-city";
            let courses = ["testcourse1", "testcourse2"];
            await store.dispatch(actions.asyncFetchSimilarCollegesStart(city, courses));
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
