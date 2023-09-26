import { useState } from "react";

function CreateAmount({ category, onCreate }) {
  const [amount, setAmount] = useState(0);
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
    onCreate(amount, currentDate, category);
    setAmount(0);
  };

  return (
    <div className="amount-create" onSubmit={handleSubmit}>
      <h3>Input amount: </h3>
      <form>
        <input className="input" value={amount} onChange={handleChange} />
      </form>
    </div>
  );
}

export default CreateAmount;
