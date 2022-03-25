import React, { useState } from "react";
import Alert from "@presentation/components/Alert";
import Input from "@presentation/components/Input";
import styles from "./styles.scss";
import Button from "@presentation/components/Button";

type StateProps = {
  isLoading: boolean;
  errorMessage: string;
};

const Login: React.FC = () => {
  const [state] = useState<StateProps>({
    isLoading: false,
    errorMessage: "",
  });
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
          autoFocus
          required
          disabled={false}
          id="email"
          name="email"
          type="email"
          valid={true}
          placeholder="Digite seu e-mail"
        />
        <Input
          required
          disabled={false}
          id="password"
          name="password"
          type="password"
          valid={true}
          placeholder="Digite sua senha"
        />
        <Button
          type="submit"
          disabled={false}
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
