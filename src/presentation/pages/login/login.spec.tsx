import React from "react";
import Login from ".";
import { render } from "@testing-library/react";

describe("Login Component", () => {
  test("if isLoading is initially equal to false", () => {
    const { getByTestId } = render(<Login />);
    const isLoading = getByTestId("submit");
    expect(isLoading.childElementCount).toBe(0);
  });
  test("if errorMessage is initially equal to empty in LoginPage", () => {
    const { getByRole } = render(<Login />);
    const errorMessage = getByRole("alertdialog");
    expect(errorMessage.innerHTML).toBe("");
  });
  test("if Button is initially disabled", () => {
    const { getByTestId } = render(<Login />);
    const submitButton = getByTestId("submit") as HTMLButtonElement;
    expect(submitButton.disabled).toBe(true);
  });
  test("if initially errors in input of type email don't exist", () => {
    const { getByTestId } = render(<Login />);
    const emailInput = getByTestId("emailInput") as HTMLInputElement;
    expect(emailInput.title).toBe("preencha o campo");
  });
  test("if initially errors in input of type password don't exist", () => {
    const { getByTestId } = render(<Login />);
    const passwordInput = getByTestId("passwordInput") as HTMLInputElement;
    expect(passwordInput.title).toBe("preencha o campo");
  });
});
