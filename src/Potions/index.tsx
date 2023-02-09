import React, { ChangeEvent, Dispatch, SetStateAction } from "react";
import "./styles.css";

interface props {
  setRedPotion: Dispatch<SetStateAction<number>>;
  setGreenPotion: Dispatch<SetStateAction<number>>;
  setYellowPotion: Dispatch<SetStateAction<number>>;
  setGrayPotion: Dispatch<SetStateAction<number>>;
  setBluePotion: Dispatch<SetStateAction<number>>;
}

const Potions = (props: props) => {
  const {
    setRedPotion,
    setGreenPotion,
    setBluePotion,
    setGrayPotion,
    setYellowPotion,
  } = props;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case "RedPotion":
        setRedPotion(parseInt(event.target.value));
        break;
      case "GreenPotion":
        setGreenPotion(parseInt(event.target.value));
        break;
      case "BluePotion":
        setBluePotion(parseInt(event.target.value));
        break;
      case "GrayPotion":
        setGrayPotion(parseInt(event.target.value));
        break;
      case "YellowPotion":
        setYellowPotion(parseInt(event.target.value));
        break;
      default:
        break;
    }
  };

  return (
    <>
      <h4>Select an amount of potions</h4>
      <div className="potionsContainer">
        <div>
          <p>Red</p>
          <input
            type="number"
            className="input"
            name="RedPotion"
            placeholder="0"
            min={0}
            onChange={handleChange}
            data-testid="red-potion"
          />
        </div>
        <div>
          <p>Blue</p>
          <input
            type="number"
            className="input"
            name="BluePotion"
            placeholder="0"
            min={0}
            onChange={handleChange}
            data-testid="blue-potion"
          />
        </div>
        <div>
          <p>Yellow</p>
          <input
            type="number"
            className="input"
            name="YellowPotion"
            placeholder="0"
            min={0}
            onChange={handleChange}
            data-testid="yellow-potion"
          />
        </div>
        <div>
          <p>Green</p>
          <input
            type="number"
            className="input"
            name="GreenPotion"
            placeholder="0"
            min={0}
            onChange={handleChange}
            data-testid="green-potion"
          />
        </div>
        <div>
          <p>Gray</p>
          <input
            type="number"
            className="input"
            name="GrayPotion"
            placeholder="0"
            min={0}
            onChange={handleChange}
            data-testid="gray-potion"
          />
        </div>
      </div>
    </>
  );
};

export default Potions;
