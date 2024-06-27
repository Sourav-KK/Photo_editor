import {
  FlipHorizontal2,
  FlipVertical2,
  RotateCcw,
  RotateCw,
} from "lucide-react";

const Rotate_btn = () => {
  return (
    <div className="orientatation-btn-container">
      <button
        type="button"
        className="orientation-btn"
        title="Rotate Clockwise"
      >
        <RotateCw color="#363535" size={20} />
      </button>
      <button
        type="button"
        className="orientation-btn"
        title="Rotate Anti-Clockwise"
      >
        <RotateCcw color="#363535" size={20} />
      </button>
      <button
        type="button"
        className="orientation-btn"
        title="Horizontal Flip "
      >
        <FlipHorizontal2 color="#363535" size={20} />
      </button>
      <button type="button" className="orientation-btn" title="Vertical Flip">
        <FlipVertical2 color="#363535" size={20} />
      </button>
    </div>
  );
};

export default Rotate_btn;
