import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

beforeEach(() => {
  render(
    <div id="root">
      <Router>
        <App />
      </Router>
    </div>
  );
});

test("renders Nav", () => {
  const logoElement = screen.getByText(/BLOG/i);
  const feedNavLink = screen.getByText(/feed/i);

  expect(logoElement).toBeInTheDocument();
  expect(feedNavLink).toBeInTheDocument();
});

test("renders Login", () => {
  const usernameInput = screen.getByText(/username/i);
  const passwordInput = screen.getByText(/password/i);

  expect(usernameInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
});

test("renders and closes Modal", () => {
  const modalButton = screen.getByText(/need help/i);

  fireEvent.click(modalButton);

  const modal = screen.getByText(/Uhh/i);
  const closeModalButton = screen.getByText("X");

  expect(modalButton).toBeInTheDocument();
  expect(modal).toBeInTheDocument();
  expect(modal).toHaveTextContent(
    " I didn't actaully think anybody would click this"
  );
  expect(closeModalButton).toBeInTheDocument();

  fireEvent.click(closeModalButton);

  expect(closeModalButton).not.toBeInTheDocument();
});
