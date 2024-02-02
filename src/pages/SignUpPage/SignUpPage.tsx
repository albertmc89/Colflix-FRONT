/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import "./SignUpPage.css";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import paths from "../../paths/paths";
import { Navigate, NavLink } from "react-router-dom";
import promotv from "/img/promotv.webp";
import kids from "/img/kids.webp";
import photodownload from "/img/photo-download.webp";
import boxphoto from "/img/box-photo.webp";
import download from "/img/download.png";
import plus from "/img/plus.png";
import cross from "/img/cross.png";

const SignUpPage = (): React.ReactElement => {
  const [user] = useAuthState(auth);
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);

  if (user) {
    return <Navigate to={paths.home} />;
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
      <article className="signup-container">
        <Header />
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
              onChange={(event) => {
                setRegisterPassword(event.target.value);
              }}
              required
            />
          )}
          {!showPassword && (
            <Button
              className="button--big"
              actionOnClick={() => setShowPassword(true)}
            >
              Get Started
              <img
                src="img/next.png"
                alt="white next arrow"
                width="24"
                height="24"
              />
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
      <article className="promo-container">
        <img
          className="popcorn"
          src="img/popcorn.png"
          alt="popcorn icon"
          width="64"
          height="64"
        />
        <div className="promo">
          <div className="promo-square">
            <p>The Netflix you love for just EUR 5.49.</p>
            <p className="promo__subtitle">Get the Standard with ads plan.</p>
            <div className="promo__more">
              <NavLink to={paths.home} className="promo__more">
                Learn More
                <img src="img/next.png" alt="next icon" />
              </NavLink>
            </div>
          </div>
        </div>
        <div className="promo__text">
          <div className="promo-subtext">
            <p className="promo-text__title">Enjoy on your TV</p>
            <p>
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </p>
          </div>
          <img src={promotv} alt="tv display" />
        </div>

        <div className="promo__text">
          <div className="promo-subtext">
            <p className="promo-text__title">Watch everywhere</p>
            <p>
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
          </div>
          <img src={promotv} alt="displays in phones" />
        </div>
        <div className="promo__text">
          <div className="promo-subtext">
            <p className="promo-text__title">Create profiles for kids</p>
            <p>
              Send kids on adventures with their favorite characters in a space
              made just for them—free with your membership.
            </p>
          </div>
          <img src={kids} alt="" />
        </div>
        <div className="promo__text">
          <div className="promo-subtext">
            <p className="promo-text__title">
              Download your shows to watch offline
            </p>
            <p>Watch on a plane, train, or submarine...</p>
          </div>
          <div className="download-container">
            <img src={photodownload} alt="tv show inside a phone" />
            <div className="promo__download">
              <div className="download-flexbox">
                <img src={boxphoto} alt="" width="50" height="70" />
                <div className="download-flex">
                  <span className="download-flex__name"> Stranger Things</span>
                  <span className="download-flex__state">Downloading...</span>
                </div>
              </div>
              <img src={download} alt="download icon" />
            </div>
          </div>
        </div>
        <section className="faqs">
          <div className="question">
            <p className="question-text"> What is Netflix?</p>
            {open && (
              <>
                <button
                  className="question-action"
                  onClick={() => setOpen(false)}
                >
                  <img src={plus} alt="" width="26" height="26" />
                </button>
              </>
            )}
            {!open && (
              <>
                <p className="answer">
                  Netflix is a streaming service that offers a wide variety of
                  award-winning TV shows, movies, anime, documentaries, and more
                  on thousands of internet-connected devices. You can watch as
                  much as you want, whenever you want all for one low monthly
                  price. There's always something new to discover and new TV
                  shows and movies are added every week!
                </p>
                <button className="question-open" onClick={() => setOpen(true)}>
                  <img src={cross} alt="" width="26" height="26" />
                </button>
              </>
            )}
          </div>
        </section>
      </article>
    </div>
  );
};

export default SignUpPage;
