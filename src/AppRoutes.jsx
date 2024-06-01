import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { paths } from "./lib/paths";
import MainPage from "./pages/MainPage/MainPage";
import CardPage from "./pages/CardPage/CardPage";
import ExitPage from "./pages/ExitPage/ExitPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegPage from "./pages/RegistrationPage/RegistrationPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
/* import { useState } from "react"; */
import { UserProvider } from "./contexts/user";
import PopNewCard from "./components/Popups/PopNewCard";
import { TasksProvider } from "./contexts/tasks";

 const AppRoutes = () => {
  /* const [user, setUser] = useState(null); */

  return (
    <UserProvider>
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route element={<TasksProvider />}>
        <Route path={paths.MAIN} element={<MainPage /* user={user} */ />}>
          <Route path={paths.CARD} element={<CardPage />} />
          <Route path={paths.NEWCARD} element={<PopNewCard />} />
          <Route path={paths.USER_EXIT} element={<ExitPage /* setUser={setUser} */ />} />
        </Route>
        </Route>
      </Route>

      <Route path={paths.LOGIN} element={<LoginPage /* setUser={setUser} */ />} />
      <Route path={paths.REGISTER} element={<RegPage /* setUser={setUser} *//>} />
      <Route path={paths.NOTFOUND} element={<NotFoundPage />} />
    </Routes>
    </UserProvider>
  );
}
export default AppRoutes;