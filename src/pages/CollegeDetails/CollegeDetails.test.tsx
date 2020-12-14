import React from 'react';
import { render } from "@testing-library/react";
import { CollegeDetails } from "./CollegeDetails";
import userEvent from '@testing-library/user-event';


//mock child components
jest.mock("../../components/UI/ListView/Students/ListView");
jest.mock("../../components/UI/ListView/College/ListView");
jest.mock("../../components/UI/Button/Button");




describe("Pages/ <CollegeDetails />", () => {

    it("should render a component", () => {
        const mockFunc = jest.fn();
        const testProps = {
            match: {
                params: {}
            },
            onFetchCollegeDetails: mockFunc,
            collegeDetails: {
                _id: 'test-id',
                name: 'test-name',
                yearFounded: 123,
                city: 'test-city',
                state: 'test-state',
                country: 'test-country',
                courses: ['c1', 'c2'],
                students: ['st1', 'st2']
            },
            collegeDetailsLoading: false
        }
        const { container } = render(<CollegeDetails {...testProps} />);
        expect(container).toBeInTheDocument();
    })


    it("should show spinner when college details are loading", () => {
        const mockFunc1 = jest.fn();
        const mockFunc2 = jest.fn();
        const testProps = {
            match: {
                params: {}
            },
            onFetchCollegeDetails: mockFunc1,
            onFetchSimilarColleges: mockFunc2,
            collegeDetails: {
                _id: 'test-id',
                name: 'test-name',
                yearFounded: 123,
                city: 'test-city',
                state: 'test-state',
                country: 'test-country',
                courses: ['c1', 'c2'],
                students: ['st1', 'st2']
            },
            collegeDetailsLoading: true
        }
        const { container } = render(<CollegeDetails {...testProps} />);

        expect(container.getElementsByClassName("main-spinner")).toHaveLength(1);
    })

    it("should load college details on mounting", () => {
        const mockFunc1 = jest.fn();
        const mockFunc2 = jest.fn();
        const testProps = {
            match: {
                params: {}
            },
            onFetchCollegeDetails: mockFunc1,
            onFetchSimilarColleges: mockFunc2,
            collegeDetails: {
                _id: 'test-id',
                name: 'test-name',
                yearFounded: 123,
                city: 'test-city',
                state: 'test-state',
                country: 'test-country',
                courses: ['c1', 'c2'],
                students: ['st1', 'st2']
            },
            collegeDetailsLoading: false
        }
        const { container } = render(<CollegeDetails {...testProps} />);
        expect(mockFunc1).toHaveBeenCalledTimes(1);
    })









})