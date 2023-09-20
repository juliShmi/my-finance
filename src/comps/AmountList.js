function AmountList({ transactions }) {
  const renderedTransactions = transactions.map((transaction) => {
    return (
      <div key={transaction.id}>
        {transaction.currentDate} | {transaction.sign} {transaction.amount}$
      </div>
    );
  });

  return <div>{renderedTransactions}</div>;
}

export default AmountList;
