import React, { useEffect, useState } from "react";
import Alert from "@presentation/components/Alert";
import Input from "@presentation/components/Input";
import styles from "./styles.scss";
import Button from "@presentation/components/Button";
import { Validation } from "@presentation/protocols/validation";

type StateProps = {
  isLoading: boolean;
  errorMessage: string;
  email: string;
  password: string;
};

type LoginProps = {
  validation?: Validation;
};

const Login: React.FC<LoginProps> = ({ validation }: LoginProps) => {
  const [state, setState] = useState<StateProps>({
    isLoading: false,
    errorMessage: "",
    email: "",
    password: "",
  });
  useEffect(() => {
    validation.validate({
      email: state.email,
    });
  }, [state.email]);
  useEffect(() => {
    validation.validate({
      password: state.password,
    });
  }, [state.password]);

  return (
    <div className={styles.login} data-testid="LoginPage">
      <form
        className={styles.form}
        autoComplete="new-password"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className={styles.errorWrapper} role="alertdialog">
          {state.errorMessage && (
            <Alert type="error" description={state.errorMessage} />
          )}
        </div>
        <h2>Acesse o sistema</h2>
        <Input
          placeholder="Digite seu e-mail"
          data-testid="emailInput"
          value={state.email}
          onChange={(e) =>
            setState({
              ...state,
              email: e.target.value,
            })
          }
          disabled={false}
          type="email"
          name="email"
          id="email"
          valid={true}
          autoFocus
          required
        />
        <Input
          placeholder="Digite sua senha"
          data-testid="passwordInput"
          value={state.password}
          onChange={(e) =>
            setState({
              ...state,
              password: e.target.value,
            })
          }
          disabled={false}
          type="password"
          name="password"
          id="password"
          valid={true}
          required
        />
        <Button
          data-testid="submit"
          type="submit"
          disabled={true}
          loading={state.isLoading}
          buttontype="primary"
          loadingcolor="#4816B5"
          body="Entrar"
        />
        <a href="#">Criar conta</a>
      </form>
    </div>
  );
};

export default Login;
