import { Route, Routes } from "react-router-dom";
import paths from "../../paths/paths";
import SignUpPage from "../../pages/SignUpPage/SignUpPage";
import LoginPage from "../../pages/LoginPage/LoginPage";

const App = (): React.ReactElement => {
  return (
    <main className="main-container">
      <Routes>
        <Route path={paths.root} element={<SignUpPage />} />
        <Route path={paths.login} element={<LoginPage />} />
      </Routes>
    </main>
  );
};

export default App;
