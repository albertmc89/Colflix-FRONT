import { Navigate, Route, Routes } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import paths from "../../paths/paths";
import SignUpPage from "../../pages/SignUpPage/SignUpPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import Header from "../Header/Header";
import { auth } from "../../firebase";
import Homepage from "../../pages/Homepage/Homepage";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

const App = (): React.ReactElement => {
  const [user] = useAuthState(auth);

  return (
    <>
      {!user ?? <Header />}
      <main className="main-container">
        <Routes>
          <Route path={paths.signup} element={<SignUpPage />} />
          <Route path={paths.login} element={<LoginPage />} />
          <Route path={paths.root} element={<Navigate to={paths.signup} />} />
          <Route
            path={paths.home}
            element={
              <ProtectedRoute>
                <Homepage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
    </>
  );
};

export default App;
