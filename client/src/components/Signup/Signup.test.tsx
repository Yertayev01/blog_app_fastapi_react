import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Signup from "./Signup";
import { BrowserRouter as Router } from "react-router-dom";

beforeEach(() => {
  render(
    <Router>
      <Signup />
    </Router>
  );
});

test("renders Inputs", () => {
  const username = screen.getByText("username");
  const password = screen.getByText("password");

  expect(username).toBeInTheDocument();
  expect(password).toBeInTheDocument();
});

test("errors show up correctly", () => {
  const submitButton = screen.getByText("enter");
  fireEvent.click(submitButton);
});
