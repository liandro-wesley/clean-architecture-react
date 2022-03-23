import React, { InputHTMLAttributes, ReactNode } from "react";
import styles from "./styles.scss";

type InputProps = {
  valid: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = (props: InputProps) => {
  return (
    <div className={styles.inputWrapper}>
      <input autoComplete="new-password" {...props} />
      {!props.valid && <span>🔴</span>}
    </div>
  );
};

export default Input;
