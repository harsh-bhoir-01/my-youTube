import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Live",
  "Gaming",
  "Songs",
  "Cooking",
  "Cricket",
  "One Direction",
  "WWE",
  "Zayn",
  "Reaction Videos",
  "Harry Styles",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((l) => (
        <Button name={l} key={Math.random()} />
      ))}
    </div>
  );
};

export default ButtonList;
