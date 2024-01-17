import { Route, Routes } from "react-router-dom";
import paths from "../../paths/paths";
import SignUpPage from "../../pages/LoginPage/SignUpPage";

const App = (): React.ReactElement => {
  return (
    <main className="main-container">
      <Routes>
        <Route path={paths.login} element={<SignUpPage />} />
      </Routes>
    </main>
  );
};

export default App;
