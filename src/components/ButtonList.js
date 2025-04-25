import React from "react";
import Button from "./Button";

const List = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "Cooking",
  "Valentines",
  "Movies",
  "News",
  "Travel",
]; 

const ButtonList = () => {
  return (
    <div className="flex flex-wrap">
      {List.map((name) => (
        <Button key={name} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;