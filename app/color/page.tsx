"use client";
import { useState } from "react";

export default function Color() {
  const [color, setColor] = useState("000000");

  const handleColorChange = (increment: number) => {
    let nextColor = (parseInt(color, 16) - increment).toString(16);
    if (nextColor.length > 6) {
      nextColor = "000000"; // 음수가 발생한 경우
    }
    setColor(nextColor.padStart(6, "0"));
  };

  const handleOnClickReset = () => {
    setColor("000000");
  };

  const handleOnClickRandom = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor.padStart(6, "0"));
  };

  return (
    <>
      <h1 style={{ color: `#${color}` }}>#{color}</h1>
      <p>컬러를 골라보세요</p>
      <button onClick={() => handleColorChange(10)}>color + 10</button>
      <button onClick={() => handleColorChange(10000)}>color + 10000</button>
      <button onClick={() => handleColorChange(10)}>color - 10</button>
      <button onClick={() => handleColorChange(10000)}>color - 10000</button>
      <button onClick={handleOnClickReset}>Reset</button>
      <button onClick={handleOnClickRandom}>Random</button>
    </>
  );
}
