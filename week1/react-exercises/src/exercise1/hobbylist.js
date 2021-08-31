import React from "react";
import Hobby from "./hobby";

function HobbyList() {
    const hobbies = ['Surfing', 'Rock climbing', 'Mountain biking', 'Breakdancing'];
  const hobbyList = hobbies.map((hobby) => (
    <Hobby key={hobby} hobby={hobby} />
  ));
  return <div>{hobbyList}</div>;
}

export default HobbyList;


