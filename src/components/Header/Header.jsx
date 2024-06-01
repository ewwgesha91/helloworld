import { useState } from "react";
import * as S from "./Header.styled";
import { Container } from "../../styled/Common.styled";
import { Link, useNavigate } from "react-router-dom";
import { paths } from "../../lib/paths";
import { useUser } from "../../hooks/useUser";

export default function Header() {
  const {user} = useUser();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  const navigate = useNavigate();

  const handleExit = () => {
    navigate(paths.USER_EXIT);
  };

  return (
    <S.Header>
      <Container>
        <S.HeaderBlock>
          <S.HeaderLogo>
            <Link to={paths.MAIN} target="_self">
              <img src="images/logo.png" alt="logo" />
            </Link>
          </S.HeaderLogo>
          <S.HeaderLogo>
            <Link to={paths.MAIN} target="_self">
            <img src="images/logo_dark.png" alt="logo" />
            </Link>
          </S.HeaderLogo>
          <S.HeaderNav>
            <S.HeaderBtnMainNew id="btnMainNew">
            <Link to={paths.NEWCARD}><S.HeaderBtnMainNewLink>Создать новую задачу</S.HeaderBtnMainNewLink></Link>
            </S.HeaderBtnMainNew>
            <S.HeaderUser onClick={handleClick} href="#">{user.name}</S.HeaderUser>
            {isOpen && (
              <S.HeaderPopUserSet id="user-set-target">
                <p className="pop-user-set__name">{user.name}</p>
                <p className="pop-user-set__mail">{user.login}</p>
                <div className="pop-user-set__theme">
                  <p>Темная тема</p>
                  <input type="checkbox" className="checkbox" name="checkbox" />
                </div>
                  <button onClick={handleExit} type="button" className="_hover03">
                    Выйти
                  </button>
              </S.HeaderPopUserSet>
            )}
          </S.HeaderNav>
        </S.HeaderBlock>
      </Container>
    </S.Header>
  );
}
