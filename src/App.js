import { useState } from "react";
import AmountList from "./comps/AmountList";
import CreateAmount from "./comps/CreateAmount";

function App() {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const updateAmount = (amount, sign, currentDate) => {
    const updatedTransactions = [
      ...transactions,
      {
        id: Math.round(Math.random() * 9999),
        currentDate,
        amount,
        sign,
      },
    ];
    setTransactions(updatedTransactions);

    if (sign === "plus") {
      setBalance(balance + amount);
    } else {
      setBalance(balance - amount);
    }
  };
  return (
    <div>
      <h2>Balance:</h2>
      <h3>{balance} $</h3>
      <CreateAmount onUpdate={updateAmount}></CreateAmount>
      <hr></hr>
      <div>
        <AmountList transactions={transactions} />
      </div>
    </div>
  );
}

export default App;
