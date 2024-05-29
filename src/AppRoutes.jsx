import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { paths } from "./lib/paths";
import MainPage from "./pages/MainPage/MainPage";
import CardPage from "./pages/CardPage/CardPage";
import ExitPage from "./pages/ExitPage/ExitPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegPage from "./pages/RegistrationPage/RegistrationPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { useState } from "react";
import { TasksContext } from "./contexts/tasks";

 const AppRoutes = () => {
  const [user, setUser] = useState(null);

  return (
    <Routes>
      <Route element={<TasksContext> <PrivateRoute user={user} /> </TasksContext>}>
        <Route path={paths.MAIN} element={<MainPage user={user} />}>
          <Route path={paths.CARD} element={<CardPage />} />
          <Route path={paths.USER_EXIT} element={<ExitPage setUser={setUser} />} />
        </Route>
      </Route>

      <Route path={paths.LOGIN} element={<LoginPage setUser={setUser} />} />
      <Route path={paths.REGISTER} element={<RegPage setUser={setUser}/>} />
      <Route path={paths.NOTFOUND} element={<NotFoundPage />} />
    </Routes>
  );
}
export default AppRoutes;