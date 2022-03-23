import React, { ButtonHTMLAttributes } from "react";
import { SpinnerRoundFilled } from "spinners-react";

type ButtonProps = {
  loading?: boolean;
  body: React.ReactNode;
  loadingColor?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <button {...props}>
      {!props.loading && props.body}
      {props.loading && (
        <SpinnerRoundFilled enabled={true} color={props.loadingColor} />
      )}
    </button>
  );
};

export default Button;
