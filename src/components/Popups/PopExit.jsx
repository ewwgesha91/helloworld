import { Link } from "react-router-dom";
import { paths } from "../../lib/paths";
import * as S from "./PopUp.styled"
import { useUser } from "../../hooks/useUser";
const PopExit = () => {
const {logoutUser} = useUser();
  return (
    <S.PopExit>
      <S.Container>
        <S.PopExitBlock>
          <S.PopExitTitle><h2>Выйти из аккаунта?</h2></S.PopExitTitle>
          <form className="pop-exit__form" id="formExit" action="#">
            <S.PopExitFormGroup>
              <S.PopExitYes id="exitYes"><a onClick={logoutUser}>Да, выйти</a></S.PopExitYes>
              <S.PopExitNo id="exitNo"><Link to={paths.MAIN}>Нет, остаться</Link></S.PopExitNo>
            </S.PopExitFormGroup>
          </form>
        </S.PopExitBlock>
      </S.Container>
    </S.PopExit>
  );
};

export default PopExit;