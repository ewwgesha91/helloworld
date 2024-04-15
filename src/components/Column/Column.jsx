import Card from "../Card/Card";

const Column = ({ title }) => {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        <Card category="Web Design" title="Название задачи" date="30.10.23" />
      </div>
    </div>
  );
};

export default Column;
