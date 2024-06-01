import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { paths } from "./lib/paths";
import MainPage from "./pages/MainPage/MainPage";
import CardPage from "./pages/CardPage/CardPage";
import ExitPage from "./pages/ExitPage/ExitPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegPage from "./pages/RegistrationPage/RegistrationPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { UserProvider } from "./contexts/user";
import PopNewCard from "./components/Popups/PopNewCard";
import { TasksProvider } from "./contexts/tasks";

 const AppRoutes = () => {

  return (
    <UserProvider>
      <TasksProvider>
      <Routes>
      <Route element={<PrivateRoute />}>
        <Route path={paths.MAIN} element={<MainPage />}>
          <Route path={paths.CARD} element={<CardPage />} />
          <Route path={paths.NEWCARD} element={<PopNewCard />} />
          <Route path={paths.USER_EXIT} element={<ExitPage />} />
        </Route>
      </Route>
      <Route path={paths.LOGIN} element={<LoginPage />} />
      <Route path={paths.REGISTER} element={<RegPage />} />
      <Route path={paths.NOTFOUND} element={<NotFoundPage />} />
    </Routes>
      </TasksProvider>
    </UserProvider>
  );
}
export default AppRoutes;