import * as S from "./RegistrationPage.styled";
import { Link, useNavigate } from "react-router-dom";
import { paths } from "../../lib/paths";
import { regUser } from "../../api";
import { useState } from "react";
export default function RegPage({ setUser }) {
  const navigate = useNavigate();

  const regForm = {
    login: "",
    name: "",
    password: "",
  };

  const [regData, setRegData] = useState(regForm);

  const [addRegError, setAddRegError] = useState(null);

  const handleReg = async (e) => {
    e.preventDefault();

    if (!regData.name || regData.name.trim().length === 0) {
      setAddRegError("Не введено имя.");
      return;
    }

    if (!regData.login || regData.login.trim().length === 0) {
      setAddRegError("Не введён логин.");
      return;
    }

    if (!regData.password || regData.password.trim().length === 0) {
      setAddRegError("Не введён пароль.");
      return;
    }

    try {
      await regUser(regData).then((data) => {
        console.log(data);
        setUser(data.user);
        navigate(paths.MAIN);
      });
    } catch (error) {
      setAddRegError(error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target; // Извлекаем имя поля и его значение

    setRegData({
      ...regData, // Копируем текущие данные из состояния
      [name]: value, // Обновляем нужное поле
    });
  };

  return (
    <S.Wrapper>
      <S.Form>
        <S.FormContainer>
          <S.FormHeader>Регистрация</S.FormHeader>

          <S.FormInput
            type="text"
            value={regData.name}
            onChange={handleInputChange}
            name="name"
            placeholder="Имя"
          />
          <S.FormInput
            type="text"
            value={regData.login}
            onChange={handleInputChange}
            name="login"
            placeholder="Эл. почта"
          />
          <S.FormInput
            type="password"
            value={regData.password}
            onChange={handleInputChange}
            name="password"
            placeholder="Пароль"
          />
          {addRegError && <p style={{ color: "red" }}>{addRegError}</p>}

          <Link to={paths.MAIN}>
            <S.FormButton onClick={handleReg}>Зарегистрироваться</S.FormButton>
          </Link>
          <S.FormFooter>
            Уже есть аккаунт? <Link to={paths.LOGIN}>Войдите здесь</Link>
          </S.FormFooter>
        </S.FormContainer>
      </S.Form>
    </S.Wrapper>
  );
}
