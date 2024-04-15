
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PopBrowse from "./components/Popups/PopBrowse";
import PopExit from "./components/Popups/PopExit";
import PopNewCard from "./components/Popups/PopNewCard";

function App() {

  return (
    <>
      <div className="wrapper">
      <PopExit />
      <PopNewCard />
      <PopBrowse />
      <Header />
      <Main />  
      </div>
      <script src="js/script.js"></script>
    </>
  );
}

export default App;
