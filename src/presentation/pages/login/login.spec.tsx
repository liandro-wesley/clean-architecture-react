import React from "react";
import Login from ".";
import {
  render,
  RenderResult,
  fireEvent,
  cleanup,
} from "@testing-library/react";
import { ValidationSpy } from "@presentation/test/mock-validation";

type SutTypes = {
  sut: RenderResult;
  validationSpy: ValidationSpy;
};

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy();
  const sut = render(<Login validation={validationSpy} />);
  return {
    sut,
    validationSpy,
  };
};

describe("Login Component", () => {
  afterEach(cleanup);
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
  test("if call Validation with correct email", () => {
    const { sut, validationSpy } = makeSut();
    const emailInput = sut.getByTestId("emailInput");
    fireEvent.input(emailInput, { target: { value: "any_email" } });
    expect(validationSpy.fieldName).toBe("email");
    expect(validationSpy.fieldValue).toBe("any_email");
  });
  test("if call Validation with correct password", () => {
    const { sut, validationSpy } = makeSut();
    const passwordInput = sut.getByTestId("passwordInput");
    fireEvent.input(passwordInput, { target: { value: "any_password" } });
    expect(validationSpy.fieldName).toBe("password");
    expect(validationSpy.fieldValue).toBe("any_password");
  });
});
