import { BsFillHouseHeartFill } from "react-icons/bs";
import { FaCat } from "react-icons/fa";
import { BiSolidTShirt } from "react-icons/bi";
import { IoFastFoodOutline } from "react-icons/io5";

function Icons() {
  const style = { color: "rgb(34 211 238)" };

  return (
    <div className="flex flex-row">
      <div className="px-16 py-16">
        <BsFillHouseHeartFill style={style} size={"4em"} />
      </div>
      <div className="px-16 py-16">
        <FaCat style={style} size={"4em"} />
      </div>
      <div className="px-16 py-16">
        <BiSolidTShirt style={style} size={"4em"} />
      </div>
      <div className="px-16 py-16">
        <IoFastFoodOutline style={style} size={"4em"} />
      </div>
    </div>
  );
}

export default Icons;
