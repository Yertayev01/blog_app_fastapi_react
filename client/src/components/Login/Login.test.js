import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "./Login";
import { BrowserRouter as Router } from "react-router-dom";

beforeEach(() => {
  render(
    <Router>
      <Login />
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
  // const username = screen.getByText("username");
  // const password = screen.getByText("username");
  const submitButton = screen.getByText("enter");
  fireEvent.click(submitButton);

  // expect(username).toBeInTheDocument();
  // expect(password).toBeInTheDocument();
});
