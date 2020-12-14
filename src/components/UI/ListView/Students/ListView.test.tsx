import React from 'react';
import { render } from "@testing-library/react";
import { ListView } from "./ListView";
import { BrowserRouter } from "react-router-dom";


describe("<ListView />", () => {

    it("should render the component", () => {
        const testProps = {
            students: []
        }
        const { container } = render(<ListView {...testProps} />);
        expect(container).toBeInTheDocument();
    })

    it("should render the students table", () => {
        const testProps = {
            students: []
        }
        const { container, queryByText } = render(<ListView {...testProps} />);
        expect(queryByText("Students")).toBeInTheDocument();
        expect(queryByText("Detailed list of students")).toBeInTheDocument();
    })

    it("should render a table row for every student", () => {
        const testProps = {
            students: []
        }
        const { container, queryByText } = render(<ListView {...testProps} />);
        expect(queryByText("Students")).toBeInTheDocument();
        expect(queryByText("Detailed list of students")).toBeInTheDocument();
    })

})