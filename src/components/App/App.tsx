import { Route, Routes } from "react-router-dom";
import LoginPage from "../../pages/LoginPage/LoginPage";
import paths from "../../paths/paths";

const App = (): React.ReactElement => {
  return (
    <main className="main-container">
      <Routes>
        <Route path={paths.login} element={<LoginPage />} />
      </Routes>
    </main>
  );
};

export default App;
