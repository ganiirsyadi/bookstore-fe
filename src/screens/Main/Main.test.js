import React from "react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { render, fireEvent, screen } from "../../lib/testUtils";
import Main from "./index";
import { act } from "react-dom/test-utils";

const UNIQUE_NUMBER = new Date().getTime();

beforeEach(() => {
  jest.resetModules(); // Most important - it clears the cache
  process.env = { DEBUG_PRINT_LIMIT: 0 }; // Make a copy
});

test("It should be able to show main page", async () => {
  render(<Main />);

  // Header and add button are visible
  expect(screen.getByTestId("header")).toHaveTextContent("BOOK STORE");
  expect(screen.getByTestId("button_add_+")).toHaveTextContent("Add +");
});

test("It should be able to render the modal form", async () => {
  render(<Main />);

  const addButton = screen.getByTestId("button_add_+");

  act(() => fireEvent.click(addButton));

  expect(await screen.findByText(`Add Book`)).toBeInTheDocument();

  fireEvent.input(screen.getByTestId("name_field"), {
    target: { value: `A Book ${UNIQUE_NUMBER}` },
  });
  fireEvent.input(screen.getByTestId("author_field"), {
    target: { value: "Gani" },
  });
  fireEvent.input(screen.getByTestId("isbn_field"), {
    target: { value: `${UNIQUE_NUMBER}` },
  });
  fireEvent.input(screen.getByTestId("published_on_field"), {
    target: { value: "2021-10-11T01:56" },
  });
  fireEvent.input(screen.getByTestId("number_of_pages_field"), {
    target: { value: "2" },
  });

  expect(
    (await screen.findAllByRole("option", {}, { timeout: 5000 })).length
  ).toBeGreaterThan(2);

  expect(screen.getByTestId("submit_button")).toBeVisible()
});

test("It should be able to show list of books", async () => {
  render(<Main />);

  expect(
    (await screen.findAllByText(/Book by/i, {}, { timeout: 5000 })).length
  ).toBeGreaterThan(0);
});
