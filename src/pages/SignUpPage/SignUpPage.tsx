import { useState } from "react";
import "./SignUpPage.css";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const SignUpPage = (): React.ReactElement => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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
      <article className="signup-container">
        <h1 className="signup-container__subtitle">
          Unlimited movies, TV shows, and more
        </h1>
        <h4 className="signup-container__subtext">
          Watch anywhere. Cancel anytime.
        </h4>
        <h5 className="signup-container__subtext">
          Ready to watch? Enter your email to create or restart your membership.
        </h5>
        <form className="form-container" onSubmit={submitRegister}>
          <input
            className="form-input"
            type="email"
            placeholder="Email"
            id="email"
            value={registerEmail}
            required
            onChange={(event) => {
              setRegisterEmail(event.target.value);
            }}
          />
          {showPassword && (
            <input
              className="form-input"
              type="password"
              placeholder="Password"
              id="password"
              min="7"
              value={registerPassword}
              required
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
        {showPassword && (
          <Button
            className="button--solid"
            actionOnClick={registerEmailPassword}
          >
            Sign up
          </Button>
        )}
      </article>
    </div>
  );
};

export default SignUpPage;
