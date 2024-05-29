import { useState } from "react";
import { addNewCard } from "../../api";
import { useTasks } from "../../hooks/useTasks";
import Calendar from "../Calendar/Calendar";
import { useNavigate } from "react-router-dom";
import { paths } from "../../lib/paths";
import { useUser } from "../../hooks/useUser";

export default function PopNewCard() {
  const { getTasks } = useTasks();
  const { user } = useUser();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const newTaskForm = {
    title: "",
    topic: "",
    description: "",
    date: "",
  };

  const [newTask, setNewTask] = useState(newTaskForm);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewTask({ ...newTask, [name]: value });
  };

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
      setError(error.message);
    }
  };

  return (
    <div className="pop-new-card" id="popNewCard">
      <div className="pop-new-card__container">
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>
            <a href="#" className="pop-new-card__close">
              &#10006;
            </a>
            <div className="pop-new-card__wrap">
              <form
                className="pop-new-card__form form-new"
                id="formNewCard"
                action="#"
              >
                <div className="form-new__block">
                  <label htmlFor="formTitle" className="subttl">
                    Название задачи
                  </label>
                  <input
                    className="form-new__input"
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                  />
                </div>
                <div className="form-new__block">
                  <label htmlFor="textArea" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-new__area"
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  ></textarea>
                </div>
              </form>
              <Calendar />
            </div>
            <div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__themes">
                <div className="categories__theme _orange _active-category">
                  <p className="_orange">Web Design</p>
                </div>
                <div className="categories__theme _green">
                  <p className="_green">Research</p>
                </div>
                <div className="categories__theme _purple">
                  <p className="_purple">Copywriting</p>
                </div>
              </div>
            </div>
            <button className="form-new__create _hover01" id="btnCreate">
              Создать задачу
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
