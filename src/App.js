import { useState } from "react";
import AmountList from "./comps/AmountList";
import CreateAmount from "./comps/CreateAmount";
import CategoriesList from "./comps/CategoriesList";

function App() {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const [categories, setCategories] = useState([
    { name: "house", amount: 0 },
    { name: "pets", amount: 40 },
    { name: "clothes", amount: 10 },
    { name: "food", amount: 20 },
  ]);

  const [category, setCategory] = useState([]);

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
      <h1>Balance:</h1>
      <h3>{balance} $</h3>
      <div>
        <CategoriesList categories={categories} />
      </div>
      <hr></hr>
      <CreateAmount onUpdate={updateAmount}></CreateAmount>
      <hr></hr>
      <div>
        <AmountList transactions={transactions} />
      </div>
    </div>
  );
}

export default App;
