/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import "./LoginPage.css";
import { NavLink, Navigate } from "react-router-dom";
import paths from "../../paths/paths";

const LoginPage = (): React.ReactElement => {
  const [user] = useAuthState(auth);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  if (user) {
    return <Navigate to={paths.home} />;
  }

  const loginEmailPassword = async () => {
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    } catch (error) {
      throw new Error("Can't create the user");
    }
  };

  const submitRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="login-wrapper">
      <Header />
      <article className="login-container">
        <h1 className="login-container__title">Log in</h1>
        <form className="login-form-container" onSubmit={submitRegister}>
          <input
            className="login-form-input"
            type="email"
            placeholder="Email"
            required
            id="email"
            value={loginEmail}
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
          />
          <input
            className="login-form-input"
            name="password"
            type="password"
            placeholder="Password"
            required
            id="password"
            value={loginPassword}
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
          />
        </form>
        <Button
          className="button-signin--solid"
          actionOnClick={loginEmailPassword}
        >
          Log in
        </Button>
        <div className="new-signup-container">
          <span className="new-signup">New to Netflix?</span>
          <NavLink className="signup" title="signup" to={paths.root}>
            Sign up now.
          </NavLink>
        </div>
        <span className="recaptcha-terms-of-use">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </span>
      </article>
    </div>
  );
};

export default LoginPage;
