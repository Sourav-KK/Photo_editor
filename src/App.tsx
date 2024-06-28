import "./index.css";
import React, { useRef, useState } from "react";
import Rotate_btn from "./Components/Control-section/Rotate-btn";
import Slider from "./Components/Control-section/Slider";
import Filter_btns from "./Components/Control-section/Filter-btns";
import Img_section from "./Components/ImageSection/Img_section";
import Btns from "./Components/Btns";
import Filter_heading from "./Components/Control-section/Filter_heading";
import { DEFAULT_OPTIONS, DEFAULT_OPTIONSI } from "./Utilities/Default_Options";
import useBtn from "./Hooks/useBtn";

function App() {
  const [file, setFile] = useState<File | null>();
  const [btnState, setBtnState] = useState<boolean>(false);
  const inputFileRef = useRef<HTMLInputElement | null>(null);
  const [options, setOptions] = useState<DEFAULT_OPTIONSI[]>(DEFAULT_OPTIONS);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number>(0);
  const selectedOption = options[selectedOptionIndex];

  const handleUploadImage = () => {
    if (!inputFileRef.current) return;
    inputFileRef.current?.click();
  };

  const handleFileUploadChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!event.target.files) {
      return;
    }
    setBtnState(true);
    console.log("event.target.files[0]:", event.target.files[0]);
    setFile(event.target.files[0]);
  };

  const handleSliderChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (!file) return;

    setOptions((prevOption) => {
      return prevOption.map((option, index) => {
        if (index !== selectedOptionIndex) {
          return option;
        }

        return { ...option, value: target.value };
      });
    });
  };

  const getImageStyle = () => {
    const filters = options.map((option) => {
      return `${option.property}(${option.value}${option.unit})`;
    });

    return { filter: filters.join(" ") };
  };

  const handleUnmount = () => {
    setFile(null);
    setBtnState(false);
  };

  const handleReset = () => {
    setOptions(
      options.map((item) => ({
        ...item,
        value: item.defaultValue,
      }))
    );
  };

  const handleDownload = () => {
    if (!file) return; // No image to download
    const imageStyle = getImageStyle(); // Get the CSS filter style
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const img = new Image();
    img.src = URL.createObjectURL(file);

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.filter = imageStyle.filter; // Apply the filter style
      ctx.drawImage(img, 0, 0, img.width, img.height);

      // Trigger download
      const link = document.createElement("a");
      link.download = "edited-image.jpg"; // Set the desired filename
      link.href = canvas.toDataURL("image/jpeg", 0.8);
      link.click();
    };
  };

  const Fn_btns = useBtn({
    handleReset,
    handleUnmount,
    handleDownload,
    handleUploadImage,
    btnState,
  });

  return (
    <div className="container">
      <div className="inner-container">
        <div className="heading-container">
          <h1>|---- image editor ----| </h1>
        </div>

        <div className="main-container">
          <div className="tool-container">
            <Filter_heading />

            <Filter_btns
              options={options}
              selectedOptionIndex={selectedOptionIndex}
              setSelectedOptionIndex={setSelectedOptionIndex}
              isFile={file}
            />

            <Slider
              value={selectedOption.value}
              minVal={selectedOption.range.min}
              maxVal={selectedOption.range.max}
              filterName={selectedOption.name}
              unit={selectedOption.unit}
              isFile={file}
              handleChange={handleSliderChange}
            />

            <Rotate_btn />
          </div>

          <div className="img-container">
            <Img_section
              handleUploadImage={handleUploadImage}
              handleFileUploadChange={handleFileUploadChange}
              inputFileRef={inputFileRef}
              inputFile={file}
              styles={getImageStyle}
            />
          </div>
        </div>

        <div className="fn-btn-container">
          <Btns btns={Fn_btns} />
        </div>
      </div>
    </div>
  );
}

export default App;
