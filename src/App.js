import { useState } from "react";
import AmountList from "./comps/AmountList";
import CreateAmount from "./comps/CreateAmount";
import CategoriesList from "./comps/CategoriesList";

function App() {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const categories = ["house", "pets", "clothes", "food"];

  const createAmount = (amount, currentDate, category) => {
    const updatedTransactions = [
      ...transactions,
      {
        id: Math.round(Math.random() * 9999),
        currentDate,
        amount,
        category,
      },
    ];
    setTransactions(updatedTransactions);
    setBalance(balance - amount);
  };

  return (
    <div>
      <h1>Balance:</h1>
      <h3>{balance} $</h3>
      <div>
        <CategoriesList
          categories={categories}
          transactions={transactions}
          onCreate={createAmount}
        />
      </div>
      <div>
        <AmountList transactions={transactions} />
      </div>
    </div>
  );
}

export default App;
