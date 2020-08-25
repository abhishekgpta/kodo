import React from "react";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";
import App from "./App";

it("Should render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
});
it('renders KODO text', () => {
    const { getByText } = render(<App />);
    expect(getByText('KODO')).toBeInTheDocument();
});
test("test snapshot Main page", () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});