import React from "react";
import Login from ".";
import { render } from "@testing-library/react";

describe("Login Component", () => {
  test("if isLoading is initially equal to false", () => {
    const { getByTestId } = render(<Login />);
    const isLoading = getByTestId("ButtonComponent");
    expect(isLoading.childElementCount).toBe(0);
  });
  test("if errorMessage is initially equal to empty in LoginPage", () => {
    const { getByRole, getByTestId } = render(<Login />);
    const errorMessage = getByRole("alertdialog");
    expect(errorMessage.innerHTML).toBe("");
  });
});
