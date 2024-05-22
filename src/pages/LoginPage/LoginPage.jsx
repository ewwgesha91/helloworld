import { Link, useNavigate } from "react-router-dom";
import { paths } from "../../lib/paths";
import * as S from "../RegistrationPage/RegistrationPage.styled";
export default function LoginPage({ setIsAuth }) {
  const navigate = useNavigate();

  const logHandler = () => {
    setIsAuth(true);
    navigate(paths.MAIN);
  };

  return (
    <S.Wrapper>
      <S.Form>
        <S.FormContainer>
          <S.FormHeader>Вход</S.FormHeader>
          <S.FormInput type="mail" placeholder="Эл. почта" />
          <S.FormInput type="password" placeholder="Пароль" />
          <S.FormButton type="button" onClick={logHandler}>
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
