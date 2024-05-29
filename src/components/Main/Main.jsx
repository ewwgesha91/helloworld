import { statusList } from "../../data";
import { useTasks } from "../../hooks/useTasks";
import { Container } from "../../styled/Common.styled";
import Column from "../Column/Column";
import * as S from "./Main.styled"

export default function Main() {
  const {tasks} = useTasks();
  return (
    <S.Main>
      <Container>
      <S.MainBlock>
          <S.MainContent>
            {statusList.map((status) => (
              <Column
                key={status}
                title={status}
                cardList={tasks.filter((card) => card.status === status)}
              />
            ))}
          </S.MainContent>
        </S.MainBlock>
      </Container>

    </S.Main>
  );
}
