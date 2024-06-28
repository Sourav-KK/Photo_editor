import { useState } from "react";
import { Btn_optionsI } from "../Utilities/Interfaces";

const Btns = ({ btns }: { btns: Btn_optionsI[] }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      {btns.map((item, index) => (
        <button
          type="button"
          className="other-btn"
          key={index}
          style={index === hoveredIndex ? item.hoverStyle : item.style}
          onClick={item.clickHandler}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          disabled={!item.state}
        >
          {item.name}
        </button>
      ))}
    </>
  );
};

export default Btns;

// On Hover the index of the button is passed to the hoveredIndex state. When the hoveredIndex === index style is changed
