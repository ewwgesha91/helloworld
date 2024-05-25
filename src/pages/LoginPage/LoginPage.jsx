import { Link, useNavigate } from "react-router-dom";
import { paths } from "../../lib/paths";
import * as S from "../RegistrationPage/RegistrationPage.styled";
import { loginUser } from "../../api";
import { useState } from "react";
export default function LoginPage({ setUser }) {
  const navigate = useNavigate();

 const loginForm = {
    login: "",
    password: "",
  };

  const [loginData, setLoginData] = useState(loginForm);

  const handleLogin = async (e) => {
    e.preventDefault();
    
    await loginUser(loginData)
    .then((data) => {
      console.log(data);
      setUser(data.user);
    }).then(() => {
      navigate(paths.MAIN);
    })
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target; // Извлекаем имя поля и его значение
  
    setLoginData({
      ...loginData, // Копируем текущие данные из состояния
      [name]: value, // Обновляем нужное поле
    });
  };

  return (
    <S.Wrapper>
      <S.Form>
        <S.FormContainer>
          <S.FormHeader>Вход</S.FormHeader>
          <S.FormInput type="text" value={loginData.login} onChange={handleInputChange} name="login" placeholder="Эл. почта" />
          <S.FormInput type="password" value={loginData.password} onChange={handleInputChange} name="password" placeholder="Пароль" />
          <S.FormButton type="button" onClick={handleLogin}>
            Войти
          </S.FormButton>
          <S.FormFooter>
            <S.FooterText>Нужно зарегистрироваться?</S.FooterText>
            <Link to={paths.REGISTER}>Регистрируйтесь здесь</Link>
          </S.FormFooter>
        </S.FormContainer>
      </S.Form>
    </S.Wrapper>
  );
}
