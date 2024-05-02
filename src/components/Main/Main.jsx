import { statusList } from "../../data";
import { Container } from "../../styled/Common.styled";
import Column from "../Column/Column";
import * as S from "./Main.styled"
export default function Main({cards}) {
  return (
    <S.Main>
      <Container>
      <S.MainBlock>
          <S.MainContent>
            {statusList.map((status) => (
              <Column
                key={status}
                title={status}
                cardList={cards.filter((card) => card.status === status)}
              />
            ))}
          </S.MainContent>
        </S.MainBlock>
      </Container>

    </S.Main>
  );
}
