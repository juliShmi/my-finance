import { BsFillHouseHeartFill } from "react-icons/bs";
import { FaCat } from "react-icons/fa";
import { BiSolidTShirt } from "react-icons/bi";
import { IoFastFoodOutline } from "react-icons/io5";
import { useState } from "react";
import { IconContext } from "react-icons";
import CreateAmount from "./CreateAmount";

export default function Category({ category, transactions, onCreate }) {
  const style = { color: "rgb(34 211 238)", size: 70 };
  const [showCreateAmount, setShowCreateAmount] = useState(false);

  const categoryAmount = transactions
    .filter((transaction) => transaction.category == category)
    .map((transaction) => transaction.amount)
    .reduce((a, b) => a + b, 0);

  const handleClick = (category) => {
    setShowCreateAmount(true);
  };

  let content;
  if (showCreateAmount) {
    content = <CreateAmount category={category} onCreate={onCreate} />;
  }

  const mapping = {
    house: <BsFillHouseHeartFill />,
    pets: <FaCat />,
    clothes: <BiSolidTShirt />,
    food: <IoFastFoodOutline />,
  };
  return (
    <div>
      <div className="category" onClick={() => handleClick(category)}>
        <div className="px-16 py-16">
          <div>
            <IconContext.Provider value={style}>
              {mapping[category]}
            </IconContext.Provider>
          </div>
          <div>{categoryAmount} $</div>
        </div>
      </div>
      {content}
    </div>
  );
}
