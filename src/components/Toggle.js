import React, { useState } from "react";

function Toggle() {
  const [isToggled, setIsToggled] = useState(false);

  function handleClick() {
    setIsToggled((isToggled) => !isToggled);
  }

  const colour = isToggled ? "red" : "white";
  
  return <button style={{ background: colour }} onClick={handleClick}>{isToggled ? "ON" : "OFF"}</button>;
}

export default Toggle;
