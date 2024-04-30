import { cardList, statusList } from "./data";
import { useEffect, useState } from "react";
import "./App.css";
/* import Column from "./components/Column/Column"; */
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PopBrowse from "./components/Popups/PopBrowse";
import PopExit from "./components/Popups/PopExit";
import PopNewCard from "./components/Popups/PopNewCard";
import { GlobalStyle } from "./components/Global/Global.styled";


function App() {
  const [cards, setCards] = useState(cardList);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  function onCardAdd() {
    const newCard = {
      id: cards.length + 1,
      topic: "Web Design",
      title: "Название задачи",
      date: new Date().toLocaleDateString(),
      status: statusList[0],
    };
    setCards([...cards, newCard]);
  }
  return (
    <>
    <GlobalStyle />
      <div className="wrapper">
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        <Header onCardAdd={onCardAdd} />
        {isLoading ? <p>Данные загружаются...</p> : <Main cards={cards} />}
      </div>
      <script src="js/script.js"></script>
    </>
  );
}

export default App;
