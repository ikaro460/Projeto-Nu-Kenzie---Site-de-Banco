import Card from "../Card";
import EmptyList from "../empty-list";

function List({
  listTransactions,
  setListTransactions,
  filterIsOn,
  setFilterIsOn,
  filteredlist,
  setFilteredList,
}) {
  function filterEntradas() {
    setFilteredList([...listTransactions].filter((a) => a.type === "entrada"));
    setFilterIsOn(true);
  }

  function filterSaidas() {
    setFilteredList([...listTransactions].filter((a) => a.type !== "entrada"));
    setFilterIsOn(true);
  }

  function filterTodos() {
    setFilteredList([...listTransactions]);
    setFilterIsOn(false);
  }

  return (
    <ul className="list">
      <div className="list-header">
        <h4 id="resumo-financeiro">Resumo financeiro</h4>
        <button className="pink" onClick={() => filterTodos()}>
          Todos
        </button>
        <button onClick={() => filterEntradas()}>Entradas</button>
        <button onClick={() => filterSaidas()}>Despesas</button>
      </div>

      {filterIsOn ? (
        filteredlist.length > 0 ? (
          filteredlist.map((transaction, index) => {
            return (
              <Card
                listTransactions={listTransactions}
                filteredlist={filteredlist}
                setFilteredList={setFilteredList}
                setListTransactions={setListTransactions}
                transaction={transaction}
                key={index}
                index={index}
              />
            );
          })
        ) : (
          <EmptyList />
        )
      ) : listTransactions.length > 0 ? (
        listTransactions.map((transaction, index) => {
          return (
            <Card
              listTransactions={listTransactions}
              setFilteredList={setFilteredList}
              setListTransactions={setListTransactions}
              transaction={transaction}
              key={index}
              index={index}
            />
          );
        })
      ) : (
        <EmptyList />
      )}
    </ul>
  );
}

export default List;
