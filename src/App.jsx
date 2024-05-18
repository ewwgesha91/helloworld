import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { paths } from "./lib/paths";
import MainPage from "./pages/MainPage/MainPage";
import CardPage from "./pages/CardPage/CardPage";
import ExitPage from "./pages/ExitPage/ExitPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegPage from "./pages/RegistrationPage/RegistrationPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { cardList } from "./data";

export default function App() {
  const [isAuth, setIsAuth] = useState(true);
  const [cards, setCards] = useState(cardList);

  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route
          path={paths.MAIN}
          element={<MainPage cards={cards} setCards={setCards} />}
        >
          <Route path={paths.CARD} element={<CardPage />} />
          <Route
            path={paths.USER_EXIT}
            element={<ExitPage setIsAuth={setIsAuth} />}
          />
        </Route>
      </Route>

      <Route path={paths.LOGIN} element={<LoginPage login={setIsAuth} />} />
      <Route path={paths.REGISTER} element={<RegPage />} />
      <Route path={paths.NOTFOUND} element={<NotFoundPage />} />
    </Routes>
  );
}
