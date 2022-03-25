import React from "react";
import Login from ".";
import { render, RenderResult } from "@testing-library/react";

type SutTypes = {
  sut: RenderResult;
};

const makeSut = (): SutTypes => {
  const sut = render(<Login />);
  return {
    sut,
  };
};

describe("Login Component", () => {
  test("if isLoading is initially equal to false", () => {
    const { sut } = makeSut();
    const isLoading = sut.getByTestId("submit");
    expect(isLoading.childElementCount).toBe(0);
  });
  test("if errorMessage is initially equal to empty in LoginPage", () => {
    const { sut } = makeSut();
    const errorMessage = sut.getByRole("alertdialog");
    expect(errorMessage.innerHTML).toBe("");
  });
  test("if Button is initially disabled", () => {
    const { sut } = makeSut();
    const submitButton = sut.getByTestId("submit") as HTMLButtonElement;
    expect(submitButton.disabled).toBe(true);
  });
  test("if initially errors in input of type email don't exist", () => {
    const { sut } = makeSut();
    const emailInput = sut.getByTestId("emailInput") as HTMLInputElement;
    expect(emailInput.title).toBe("preencha o campo");
  });
  test("if initially errors in input of type password don't exist", () => {
    const { sut } = makeSut();
    const passwordInput = sut.getByTestId("passwordInput") as HTMLInputElement;
    expect(passwordInput.title).toBe("preencha o campo");
  });
});
