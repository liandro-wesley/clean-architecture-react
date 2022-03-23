import React, { useState } from "react";
import Alert from "@presentation/components/Alert";
import Input from "@presentation/components/Input";
import { SpinnerRoundFilled } from "spinners-react";
import styles from "./styles.scss";
import Button from "@presentation/components/Button";

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div className={styles.login}>
      <form className={styles.form} autoComplete="new-password">
        <div className={styles.errorWrapper}>
          <Alert type="error" description="erro" />
        </div>
        <h2>Login</h2>
        <Input
          disabled={loading}
          id="email"
          name="email"
          type="email"
          valid={true}
          placeholder="Digite seu e-mail"
        />
        <Input
          disabled={loading}
          id="password"
          name="password"
          type="password"
          valid={true}
          placeholder="Digite sua senha"
        />
        <Button
          type="submit"
          disabled={loading}
          loading={loading}
          loadingColor="#4816B5"
          body="Entrar"
        />
        {!loading && <a href="javascript:void()">Criar conta</a>}
      </form>
    </div>
  );
};

export default Login;
