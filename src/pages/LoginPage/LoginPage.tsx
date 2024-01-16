import { useState } from "react";
import "./LoginPage.css";

const LoginPage = (): React.ReactElement => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // if (user) {
  //   return <Navigate to={paths.players} />;
  // }

  // const loginEmailPassword = async () => {
  //   try {
  //     await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
  //   } catch (error) {
  //     throw new Error("Can't create the user");
  //   }
  // };

  return (
    <div className="container">
      <article className="login-container">
        <h1 className="login-container__subtitle">
          Unlimited movies, TV shows and more
        </h1>
        <h4>Watch anywhere. Cancel anytime.</h4>
        <h6>
          Ready to watch? Enter your email to create or restart membership
        </h6>
        <form className="form-container">
          <input
            className="form-input"
            type="email"
            placeholder="Email"
            value={loginEmail}
            id="email"
            required
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
          />
          <input
            className="form-input"
            type="password"
            placeholder="Password"
            id="password"
            value={loginPassword}
            required
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
          />
          <button>Get Started</button>
        </form>
        <button>Log In</button>
      </article>
    </div>
  );
};

export default LoginPage;
