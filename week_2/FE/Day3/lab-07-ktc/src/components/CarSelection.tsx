import React, { useState } from "react";

const cartList = ["Toyota", "Honda", "BMW", "Mercedes"];
const colorList = ["Red", "Blue", "Black", "White"];

const CarSelection = () => {
  const [selectCar, setSelectCar] = useState<string>(cartList[0]);
  const [selectColor, setSelectColor] = useState<string>(colorList[0]);

  const handleChangeCar = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectCar(e.target.value);
  };

  const handleChangeColor = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectColor(e.target.value);
  };

  return (
    <div className="flex-col ">
      <h2>Select your car</h2>
      <label className="m-10">
        Select a car
        <select className="m-10" value={selectCar} onChange={handleChangeCar}>
          {cartList.map((car) => (
            <option value={car} key={car}>
              {car}
            </option>
          ))}
        </select>
      </label>

      <label className="m-10">
        Select a color
        <select className="m-10" value={selectColor} onChange={handleChangeColor}>
          {colorList.map((color) => (
            <option value={color} key={color}>
              {color}
            </option>
          ))}
        </select>
      </label>
      You selected a {selectColor} - {selectCar}
    </div>
  );
};

export default CarSelection;
