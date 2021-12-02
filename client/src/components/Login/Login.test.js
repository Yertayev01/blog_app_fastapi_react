import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./Login";
import { BrowserRouter as Router } from "react-router-dom";

beforeEach(() => {
  render(
    <Router>
      <Login />
    </Router>
  );
});

test("should show login form", () => {
  const username = screen.getByLabelText("username");

  expect(username).toBeInTheDocument();
  expect(username).toBeVisible();
});

test("should show inputs", () => {
  const username = screen.getByLabelText("username");
  const password = screen.getByLabelText("password");

  expect(username).toBeInTheDocument();
  expect(username).toBeVisible();
  expect(password).toBeInTheDocument();
  expect(password).toBeVisible();
});

test("should show enter button and modal toggle", () => {
  const submitButton = screen.getByRole("button");
  const modalButton = screen.getByText(/need help/i);

  expect(submitButton).toBeInTheDocument();
  expect(submitButton).toBeVisible();

  expect(modalButton).toBeInTheDocument();
  expect(modalButton).toBeVisible();
});

test("errors show up correctly", async () => {
  const submitButton = screen.getByRole("button");
  fireEvent.click(submitButton);

  expect(
    await screen.findByText("Please provide username and password")
  ).toBeInTheDocument();
});
