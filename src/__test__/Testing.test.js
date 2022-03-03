import React from "react";
import ReactDOM from "react-dom";
import {
  render,
  cleanup,
  screen,
  waitForElementToBeRemoved
} from "@testing-library/react";
import "@testing-library/jest-dom";

import { worker } from "../mocks/browser";
import Test from "../Components/Testing";
import User from "../Components/User";

//afterEach(cleanup);

// establish API mocking before all tests
beforeAll(() => worker.start());
// reset any request handlers that are declared as a part of our tests
// (i.e. for testing one-time error scenarios)
//afterEach(() => worker.resetHandlers());
// clean up once the tests are done
//afterAll(() => worker.stop());

test("render Test Component", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Test />, div);
});

test("renders Hello world", () => {
  const { getByText } = render(<Test />);
  expect(getByText("Hello world")).toBeInTheDocument();
});

test("renders title", () => {
  const { getByTestId } = render(<Test />);
  expect(getByTestId("title")).toHaveTextContent("Reactjs Testing");
});

test("list contains 5 elements", () => {
  render(<Test />);
  const listElement = screen.getByRole("list");
  const listItems = screen.getAllByRole("listitem");

  expect(listElement).toBeInTheDocument();
  expect(listElement).toHaveClass("animals");
  expect(listItems.length).toBe(5);
});

// test("loading text is shown while the API is loading", async () => {
//   render(<User />);
//   const loading = screen.getByText("Loading");
//   expect(loading).toBeInTheDocument();
//   await waitForElementToBeRemoved(() => screen.getByText("Loading"));
// });

test("user's name is rendered", async () => {
  render(<User />);
  await waitForElementToBeRemoved(() => screen.getByText("Loading"));
  const username = await screen.getByText("Jack");
  screen.debug();
  expect(username).toBeInTheDocument();
});
