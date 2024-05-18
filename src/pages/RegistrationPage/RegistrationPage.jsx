import { Wrapper } from "../../styled/Common.styled";
import * as S from "../LoginPage/LoginPage.styled";
import { Link } from "react-router-dom";
import { paths } from "../../lib/paths";
export default function RegPage() {
  return (
    <Wrapper>
      <S.ContainerSignin>
        <S.Modal>
          <S.ModalBlock>
            <S.ModalTitle>Регистрация</S.ModalTitle>
            <S.ModalFormLogin>
              <S.ModalInput type="text" placeholder="Имя"></S.ModalInput>
              <S.ModalInput type="mail" placeholder="Эл.почта"></S.ModalInput>
              <S.ModalInput type="password" placeholder="Пароль"></S.ModalInput>
              <Link to={paths.MAIN}>
                <S.ModalBtn>Зарегистрироваться</S.ModalBtn>
              </Link>
              <S.ModalFormGroup>
                <p>Уже есть аккаунт?</p>
                <Link to={paths.LOGIN}>Войдите здесь</Link>
              </S.ModalFormGroup>
            </S.ModalFormLogin>
          </S.ModalBlock>
        </S.Modal>
      </S.ContainerSignin>
    </Wrapper>
  );
}
