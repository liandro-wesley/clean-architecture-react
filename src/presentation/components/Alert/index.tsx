import React from "react";
import styles from "./styles.scss";

type AlertProps = {
  type: "success" | "error" | "warning";
  description: string;
};

const Alert: React.FC<AlertProps> = (props: AlertProps) => {
  return (
    <>
      {props.type === "error" && (
        <div className={`${styles.alert} ${styles.error}`}>
          <p>{props.description}</p>
        </div>
      )}
      {props.type === "success" && (
        <div className={`${styles.alert} ${styles.success}`}>
          <p>{props.description}</p>
        </div>
      )}
      {props.type === "warning" && (
        <div className={`${styles.alert} ${styles.warning}`}>
          <p>{props.description}</p>
        </div>
      )}
    </>
  );
};

export default Alert;
