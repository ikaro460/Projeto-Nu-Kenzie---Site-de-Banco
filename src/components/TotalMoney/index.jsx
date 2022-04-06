function TotalMoney({ listTransactions }) {
  return (
    <div id="total-money">
      <h4>Valor Total:</h4>
      <h3>
        $ {}
        {listTransactions.reduce((a, b) => {
          // console.log(a.value + b.value);
          // console.log(a.value);
          // console.log(b.value);
          return a + b.value;
        }, 0)}
      </h3>
      <h6>O valor se refere ao saldo</h6>
    </div>
  );
}
export default TotalMoney;
