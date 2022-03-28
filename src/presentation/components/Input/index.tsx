import React, { InputHTMLAttributes, ReactNode } from "react";
import styles from "./styles.scss";

type InputProps = {
  valid: boolean;
  ref?: any;
  errorText?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = (props: InputProps) => {
  const handleEnableInput = (e: React.FocusEvent<HTMLInputElement>): void => {
    e.target.readOnly = false;
  };
  return (
    <div className={styles.inputWrapper}>
      <input
        {...props}
        onChange={props.onChange}
        value={props.value}
        data-valid={props.valid}
        className={!props.valid && "error"}
        title={!props.valid ? "campo inválido" : "preencha o campo"}
        ref={props.ref}
        readOnly
        onFocus={handleEnableInput}
      />
      {!props.valid && <span title={props.errorText}>🔴</span>}
    </div>
  );
};

export default Input;
