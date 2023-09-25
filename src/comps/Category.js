import { BsFillHouseHeartFill } from "react-icons/bs";
import { FaCat } from "react-icons/fa";
import { BiSolidTShirt } from "react-icons/bi";
import { IoFastFoodOutline } from "react-icons/io5";
import { useState } from "react";
import { IconContext } from "react-icons";

export default function Category({ category }) {
  const style = { color: "rgb(34 211 238)", size: 70 };
  const [amount, setAmount] = useState(0);

  const mapping = [
    { name: "house", component: <BsFillHouseHeartFill /> },
    { name: "pets", component: <FaCat /> },
    { name: "clothes", component: <BiSolidTShirt /> },
    { name: "food", component: <IoFastFoodOutline /> },
  ];

  const icon = mapping.find((obj) => {
    return obj.name === category.name;
  });

  return (
    <div className="category">
      <div className="px-16 py-16">
        <div>
          <IconContext.Provider value={style}>
            {icon.component}
          </IconContext.Provider>
        </div>
        <div>{category.amount} $</div>
      </div>
    </div>
  );
}
