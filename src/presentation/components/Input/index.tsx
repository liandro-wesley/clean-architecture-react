import React, { InputHTMLAttributes, ReactNode } from "react";
import styles from "./styles.scss";

type InputProps = {
  valid: boolean;
  ref?: any;
} & InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = (props: InputProps) => {
  const handleEnableInput = (e: React.FocusEvent<HTMLInputElement>): void => {
    e.target.readOnly = false;
  };
  return (
    <div className={styles.inputWrapper}>
      <input ref={props.ref} readOnly onFocus={handleEnableInput} {...props} />
      {!props.valid && <span>🔴</span>}
    </div>
  );
};

export default Input;
