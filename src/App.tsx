import "./index.css";
import { useState } from "react";
import Rotate_btn from "./Components/Control-section/Rotate-btn";
import Slider from "./Components/Control-section/Slider";
import Filter_btns from "./Components/Control-section/Filter-btns";
import Img_section from "./Components/ImageSection/Img_section";
import Btns from "./Components/Btns";
import Filter_heading from "./Components/Control-section/Filter_heading";

function App() {
  const [photo, setPhoto] = useState<boolean>(false);

  return (
    <div className="container">
      <div className="inner-container">
        <div className="heading-container">
          <h1>|---- image editor ----| </h1>
        </div>

        <div className="main-container">
          <div className="tool-container">
            <Filter_heading />

            <Filter_btns />

            <Slider />

            <Rotate_btn />
          </div>

          <div className="img-container">
            <Img_section photo={photo} />
          </div>
        </div>

        <div className="fn-btn-container">
          <Btns />
        </div>
      </div>
    </div>
  );
}

export default App;
