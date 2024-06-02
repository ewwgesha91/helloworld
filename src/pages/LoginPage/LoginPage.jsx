import { Link, /* useNavigate */ } from "react-router-dom";
import { paths } from "../../lib/paths";
import * as S from "../RegistrationPage/RegistrationPage.styled";
import { loginUser } from "../../api";
import { useState } from "react";
import { useUser } from "../../hooks/useUser";
export default function LoginPage() {
/*   let navigate = useNavigate(); */
  const {isLoginUser} = useUser();

  const loginForm = {
    login: "",
    password: "",
  };

  const [loginData, setLoginData] = useState(loginForm);

  const [addLoginError, setAddLoginError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!loginData.login || loginData.login.trim().length === 0) {
      setAddLoginError("Не введён логин.");
      return;
    }

    if (!loginData.password || loginData.password.trim().length === 0) {
      setAddLoginError("Не введён пароль.");
      return;
    }

    try {
      const data = await loginUser(loginData);
        console.log(data);
        isLoginUser(data.user);
/*         navigate(paths.MAIN); */
    } catch (error) {
      console.log(error);
      setAddLoginError(error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  return (
    <S.Wrapper>
      <S.Form>
        <S.FormContainer>
          <S.FormHeader>Вход</S.FormHeader>
          <S.FormInput
            type="text"
            value={loginData.login}
            onChange={handleInputChange}
            name="login"
            placeholder="Эл. почта"
          />
          <S.FormInput
            type="password"
            value={loginData.password}
            onChange={handleInputChange}
            name="password"
            placeholder="Пароль"
          />
          {addLoginError && <p style={{color: 'red'}}>{addLoginError}</p>}
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
