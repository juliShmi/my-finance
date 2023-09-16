import { useState } from "react";

function CreateAmount({ onUpdate }) {
  const [amount, setAmount] = useState(0);
  const [sign, setSign] = useState("");

  const handleChange = (event) => {
    setAmount(+event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (sign === "plus") {
      onUpdate(amount, sign);
      setAmount(0);
    }
    if (sign === "minus") {
      onUpdate(amount, sign);
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
