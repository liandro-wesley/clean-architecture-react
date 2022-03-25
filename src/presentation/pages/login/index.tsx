import React from "react";
import Alert from "@presentation/components/Alert";
import Input from "@presentation/components/Input";
import styles from "./styles.scss";
import Button from "@presentation/components/Button";

const Login: React.FC = () => {
  return (
    <div className={styles.login}>
      <form
        className={styles.form}
        autoComplete="new-password"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        {/* <div className={styles.errorWrapper}>
          <Alert type="error" description="erro" />
        </div> */}
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
          loading={false}
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
