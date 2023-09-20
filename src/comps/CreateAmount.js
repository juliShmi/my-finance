import { useState } from "react";

function CreateAmount({ onUpdate }) {
  const [amount, setAmount] = useState(0);
  const [sign, setSign] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date}/${year}`;
  }

  const handleChange = (event) => {
    setAmount(+event.target.value);
    setCurrentDate(getDate());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (sign === "plus") {
      onUpdate(amount, sign, currentDate);
      setAmount(0);
    }
    if (sign === "minus") {
      onUpdate(amount, sign, currentDate);
      setAmount(0);
    }
  };

  return (
    <div className="amount-create">
      <h3>Input amount: </h3>
      <form onSubmit={handleSubmit}>
        <button className="plus-button" onClick={() => setSign("plus")}>
          Plus
        </button>
        <input className="input" value={amount} onChange={handleChange} />
        <button className="minus-button" onClick={() => setSign("minus")}>
          Minus
        </button>
      </form>
    </div>
  );
}

export default CreateAmount;
