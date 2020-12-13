import React from "react";
import { App } from "./App";
import { MemoryRouter, BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";

//Since we are unit testing, just mock child components
jest.mock('./pages/Page404/Page404');
jest.mock('./pages/Dashboard/Dashboard');
jest.mock('./pages/CollegeDetails/CollegeDetails');
jest.mock('./pages/StudentDetails/StudentDetails');

describe("<App />", () => {

  it("should render the component", () => {
    const { container } = render(<BrowserRouter><App /></BrowserRouter>);
    expect(container).toBeInTheDocument();
  })

  it("should render <Dashboard /> if route is current path is '/'", () => {
    const { queryByText } = render(<MemoryRouter initialEntries={["/"]}><App /></MemoryRouter>);
    expect(queryByText("DASHBOARD COMPONENT")).toBeInTheDocument();
  })

  it("should render <CollegeDetails /> if route is current path is '/college/some-id'", () => {
    const { queryByText } = render(<MemoryRouter initialEntries={["/college/some-id"]}><App /></MemoryRouter>);
    expect(queryByText("COLLEGEDETAILS COMPONENT")).toBeInTheDocument();
  })

  it("should render <StudentDetails /> if route is current path is '/student/some-id'", () => {
    const { queryByText } = render(<MemoryRouter initialEntries={["/student/some-id"]}><App /></MemoryRouter>);
    expect(queryByText("STUDENTDETAILS COMPONENT")).toBeInTheDocument();
  })

  it("should render <Page404 /> if no route matches", () => {
    const { queryByText } = render(<MemoryRouter initialEntries={["/some-random-test-route"]}><App /></MemoryRouter>);
    expect(queryByText("PAGE404 COMPONENT")).toBeInTheDocument();
  })

})
