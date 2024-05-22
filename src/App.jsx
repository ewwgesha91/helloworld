import "./App.css";
import AppRoutes from "./AppRoutes";
import { GlobalStyle } from "./components/Global/Global.styled";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <AppRoutes />
    </>
  );
}
