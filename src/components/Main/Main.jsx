import { statusList } from "../../data";
import Column from "../Column/Column";
import * as S from "./Main.styled"
export default function Main({cards}) {
  return (
    <S.Main>
      <div className="container">
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
      </div>
    </S.Main>
  );
}
