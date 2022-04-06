function Formulario({ listTransactions, setListTransactions }) {
  //console.log(listTransactions);
  //console.log(setListTransactions);

  const addTransaction = (event) => {
    event.preventDefault();

    setListTransactions([
      ...listTransactions,
      {
        description: event.target[0].value,
        type: event.target[2].value,
        value:
          event.target[2].value === "entrada"
            ? Number(event.target[1].value)
            : Number(-event.target[1].value),
      },
    ]);
  };
  return (
    <form onSubmit={addTransaction}>
      <div className="input-descricao">
        <label htmlFor="">Descrição</label>
        <input placeholder="Digite aqui sua descrição"></input>
        <h6 id="ex">Ex: Compra de roupas</h6>
      </div>

      <section className="input-tipo-valor">
        <div className="input-valor">
          <label htmlFor="">Valor</label>
          <input type="number"></input>
        </div>

        <div className="input-tipo">
          <label htmlFor="">Tipo</label>
          <select defaultValue="Entrada">
            <option value="entrada">Entrada</option>
            <option value="saida">Despesa</option>
          </select>
        </div>
      </section>
      <button className="pink" type="submit">
        Inserir Valor
      </button>
    </form>
  );
}

export default Formulario;
