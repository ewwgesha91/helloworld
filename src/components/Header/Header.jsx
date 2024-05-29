import { useState } from "react";
import * as S from "./Header.styled";
import { Container } from "../../styled/Common.styled";
import { Link } from "react-router-dom";
import { paths } from "../../lib/paths";

export default function Header({ onCardAdd }) {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen((prevState) => !prevState);
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
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </S.HeaderLogo>
          <S.HeaderNav>
            <S.HeaderBtnMainNew onClick={onCardAdd} id="btnMainNew">
              <S.HeaderBtnMainNewLink href="#">
                Создать новую задачу
              </S.HeaderBtnMainNewLink>
            </S.HeaderBtnMainNew>
            <S.HeaderUser onClick={togglePopup} href="#user-set-target">
              Ivan Ivanov
            </S.HeaderUser>
            {isOpen && (
              <S.HeaderPopUserSet id="user-set-target">
                <p className="pop-user-set__name">Ivan Ivanov</p>
                <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                <div className="pop-user-set__theme">
                  <p>Темная тема</p>
                  <input type="checkbox" className="checkbox" name="checkbox" />
                </div>
                <Link to={paths.USER_EXIT}>
                  <button type="button" className="_hover03">
                    Выйти
                  </button>
                </Link>
              </S.HeaderPopUserSet>
            )}
          </S.HeaderNav>
        </S.HeaderBlock>
      </Container>
    </S.Header>
  );
}
