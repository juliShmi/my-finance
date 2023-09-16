import { useState } from "react";
import CreateAmount from "./comps/CreateAmount";
function App() {
  const [balance, setBalance] = useState(0);

  const updateAmount = (amount, sign) => {
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
    </div>
  );
}

export default App;
