/** @jest-environment jsdom */
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App, { Title } from "./App";


describe("App component", () => {
 it("renders Logged out", () => {

  render(<App />);

  expect(screen.getByRole("heading").textContent).toMatch("Logged Out")
 });

 it("renders logged in after button click", async () => {
  const user = userEvent;

  render(<App />);
  const button = screen.getByRole("button", { name: "Log In" });

  await user.click(button);

  expect(screen.getByRole("heading").textContent).toMatch("Logged In");
 });
});

describe("Title Component", () => {
 it("renders Hello", () => {
  render(<Title />);
  expect(screen.getByRole("heading").textContent).toMatch("Hello")
 })
})