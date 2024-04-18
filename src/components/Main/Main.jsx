import Column from "../Column/Column";

export default function Main() {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            <Column title="БЕЗ СТАТУСА" />
            <Column title="НУЖНО СДЕЛАТЬ" />
            <Column title="В РАБОТЕ" />
            <Column title="ТЕСТИРОВАНИЕ" />
            <Column title="ГОТОВО" />
          </div>
        </div>
      </div>
    </main>
  );
}
