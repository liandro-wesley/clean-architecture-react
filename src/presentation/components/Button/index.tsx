import React, { ButtonHTMLAttributes } from "react";
import styles from "./styles.scss";
import { SpinnerRoundFilled } from "spinners-react";

type ButtonProps = {
  loading?: boolean;
  body: React.ReactNode;
  loadingcolor?: string;
  buttontype?: "primary";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <button
      data-testid="ButtonComponent"
      {...props}
      className={`${styles.button}`}
    >
      {!props.loading && props.body}
      {props.loading && (
        <SpinnerRoundFilled enabled={true} color={props.loadingcolor} />
      )}
    </button>
  );
};

export default Button;
