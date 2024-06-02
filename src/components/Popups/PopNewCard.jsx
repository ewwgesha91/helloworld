import { useState } from "react";
import { addNewCard } from "../../api";
import { useTasks } from "../../hooks/useTasks";
import Calendar from "../Calendar/Calendar";
import { Link, useNavigate } from "react-router-dom";
import { paths } from "../../lib/paths";
import { useUser } from "../../hooks/useUser";
import * as S from "./PopUp.styled";
import { getTopicColor } from "../../lib/topic";

export default function PopNewCard() {
  const { getTasks } = useTasks();
  const { user } = useUser();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const newTaskForm = {
    title: "",
    topic: "",
    description: "",
    date: null,
  };

  const [newTask, setNewTask] = useState(newTaskForm);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleTopicChange = (topic) => {
    setNewTask({ ...newTask, topic });
  }

  const handleNewCardAdd = async (e) => {
    try {
      e.preventDefault();

      if (!newTask.title || newTask.title.trim().length === 0) {
        setError("Не введено название.");
        return;
      }

      if (!newTask.description || newTask.description.trim().length === 0) {
        setError("Не введено описание.");
        return;
      }

      if (!newTask.topic) {
        setError("Не выбрана категория.");
        return;
      }

      if (!newTask.date) {
        setError("Не выбран срок исполнения.");
        return;
      }

      await addNewCard({
        token: user.token,
        title: newTask.title,
        topic: newTask.topic,
        description: newTask.description,
        date: newTask.date,
      }).then((data) => {
        getTasks(data.tasks);
        navigate(paths.MAIN);
      });
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <S.PopNewCard id="popNewCard">
      <S.Container>
        <S.Block>
          <S.Content>
            <S.PopNewCardTitle>Создание задачи</S.PopNewCardTitle>
            <Link to={paths.MAIN}>
            <S.PopNewCardClose>&#10006;</S.PopNewCardClose>
            </Link>
            <S.Wrap>
              <S.Form id="formNewCard" onSubmit={handleNewCardAdd}>
                <S.FormBlock>
                  <S.SubTtl htmlFor="formTitle">Название задачи</S.SubTtl>
                  <S.FormNewInput
                    type="text"
                    name="title"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                    value={newTask.title}
                    onChange={handleInputChange}
                  />
                </S.FormBlock>
                <S.FormBlock>
                  <S.SubTtl htmlFor="textArea">Описание задачи</S.SubTtl>
                  <S.FormNewArea
                    type="textarea"
                    name="description"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={newTask.description}
                    onChange={handleInputChange}
                  />
                </S.FormBlock>
              </S.Form>
              <Calendar />
            </S.Wrap>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <S.Categories>
            <S.CategoriesTtl>Категория</S.CategoriesTtl>
              <S.CategoriesThemes>
                {["Web Design", "Research", "Copywriting"].map((topic) => (
                  <S.CategoriesTheme
                    key={topic}
                    $isActive={newTask.topic === topic}
                    $topicColor={getTopicColor(topic)}
                    onClick={() => handleTopicChange(topic)}
                  >
                    <S.CategoriesThemeP $topicColor={getTopicColor(topic)}>
                      {topic}
                    </S.CategoriesThemeP>
                  </S.CategoriesTheme>
                ))}
              </S.CategoriesThemes>
            </S.Categories>
            <S.FormNewCreate onClick={handleNewCardAdd} type="submit" id="btnCreate">Создать задачу</S.FormNewCreate>
          </S.Content>
        </S.Block>
      </S.Container>
    </S.PopNewCard>
  );
}
