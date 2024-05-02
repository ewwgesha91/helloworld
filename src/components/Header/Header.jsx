import { useState } from "react";
import * as S from "./Header.styled";
import { Container } from "../../styled/Common.styled";

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
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo" />
            </a>
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
              <div
                className="header__pop-user-set pop-user-set"
                id="user-set-target"
              >
                <p className="pop-user-set__name">Ivan Ivanov</p>
                <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                <div className="pop-user-set__theme">
                  <p>Темная тема</p>
                  <input type="checkbox" className="checkbox" name="checkbox" />
                </div>
                <button type="button" className="_hover03">
                  <a href="#popExit">Выйти</a>
                </button>
              </div>
            )}
          </S.HeaderNav>
        </S.HeaderBlock>
      </Container>
    </S.Header>
  );
}
