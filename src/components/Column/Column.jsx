import Card from "../Card/Card";
import { Cards } from "../Card/Card.styled";
import * as S from "./Column.styled";

const Column = ({ title, cardList }) => {
  return (
    <S.MainColumn>
      <S.ColumnTitle>
        <S.ColumnTitleText>{title}</S.ColumnTitleText>
      </S.ColumnTitle>
      <Cards>
        {cardList.map((card) => (
          <Card
            key={card._id}
            topic={card.topic}
            title={card.title}
            date={card.date}
            id={card._id}
          />
        ))}
      </Cards>
    </S.MainColumn>
  );
};

export default Column;
