import { useState } from "react";
import "./SignUpPage.css";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import { useAuthState } from "react-firebase-hooks/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { Navigate } from "react-router-dom";

const SignUpPage = (): React.ReactElement => {
  const [user] = useAuthState(auth);
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  if (user) {
    return <Navigate to="/login" />;
  }

  const registerEmailPassword = async () => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword,
      );
    } catch (error) {
      throw new Error("Can't create the user");
    }
  };

  const submitRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="container">
      <Header />
      <article className="login-container">
        <h1 className="login-container__subtitle">
          Unlimited movies, TV shows and more
        </h1>
        <h4 className="login-container__subtext">
          Watch anywhere. Cancel anytime.
        </h4>
        <h5 className="login-container__subtext">
          Ready to watch? Enter your email to create or restart membership
        </h5>
        <form className="form-container" onSubmit={submitRegister}>
          <input
            className="form-input"
            type="email"
            placeholder="Email"
            id="email"
            value={registerEmail}
            onChange={(event) => {
              setRegisterEmail(event.target.value);
            }}
          />
          {showPassword && (
            <input
              className="form-input"
              name="password"
              type="password"
              placeholder="Password"
              id="password"
              value={registerPassword}
              onChange={(event) => {
                setRegisterPassword(event.target.value);
              }}
            />
          )}
          {!showPassword && (
            <Button
              className="button--big"
              actionOnClick={() => setShowPassword(true)}
            >
              Get Started
              <img src="img/next.png" alt="white next arrow" />
            </Button>
          )}
        </form>
        <Button className="button--solid" actionOnClick={registerEmailPassword}>
          Sign up
        </Button>
      </article>
    </div>
  );
};

export default SignUpPage;
