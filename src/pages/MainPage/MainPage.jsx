import { cardList, statusList } from "../../data";
import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
/* import PopNewCard from "../../components/Popups/PopNewCard"; */
import { Loader, Wrapper } from "../../styled/Common.styled";
import { Outlet } from "react-router-dom";
import { getCadrs } from "../../api";
import { useTasks } from "../../hooks/useTasks";
import { useUser } from "../../hooks/useUser";

export default function MainPage() {
  const {user} = useUser();
  const {setTasks} = useTasks();
    const [cards, setCards] = useState(cardList);
    const [isLoading, setIsLoading] = useState(true);
/* const [error, setError] = useState(null);
 */
    useEffect(() => {
      try {
        setIsLoading(true);
        getCadrs({token: user.token})
        .then((data) => {
          console.log(data);
          setTasks(data.tasks);
        })
      } catch (error) {
          console.error(error);
          /* setError("Не удалось загрузить данные, попробуйте позже."); */
        } finally {
          setIsLoading(false);
        }
      }, [setTasks, user ]);
    
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
          <Wrapper>
{/*             <PopNewCard /> */}
            <Header onCardAdd={onCardAdd} />
            {isLoading ? <Loader>Данные загружаются...</Loader> : <Main cards={cards}  />}
            <Outlet />
          </Wrapper>
          <script src="js/script.js"></script>
        </>
      );
    }
