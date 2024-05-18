import { Link, useNavigate } from "react-router-dom";
import { paths } from "../../lib/paths";
import * as S from "./LoginPage.styled";
export default function LoginPage({ setIsAuth }) {
  const navigate = useNavigate();

  const logHandler = () => {
    setIsAuth(true);
    navigate(paths.MAIN);
  };

  return (
    <S.ContainerSignin>
      <S.Modal>
        <S.ModalBlock>
          <S.ModalTitle>Вход</S.ModalTitle>
          <S.ModalInput type="mail" placeholder="Эл.почта" />
          <S.ModalInput type="password" placeholder="Пароль" />
          <S.ModalBtn type="button" onClick={logHandler}>
            Войти
          </S.ModalBtn>
          <S.ModalFormGroup>
            <p>Нужно зарегистрироваться?</p>
            <Link to={paths.REGISTER}>Регистрируйтесь здесь</Link>
          </S.ModalFormGroup>
        </S.ModalBlock>
      </S.Modal>
    </S.ContainerSignin>
  );
}
