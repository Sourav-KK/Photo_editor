import "./index.css";
import React, { useRef, useState } from "react";
import Rotate_btn from "./Components/Control-section/Rotate-btn";
import Slider from "./Components/Control-section/Slider";
import Filter_btns from "./Components/Control-section/Filter-btns";
import Img_section from "./Components/ImageSection/Img_section";
import Btns from "./Components/Btns";
import Filter_heading from "./Components/Control-section/Filter_heading";
import { DEFAULT_OPTIONS, DEFAULT_OPTIONSI } from "./Utilities/Default_Options";
import { Btn_optionsI } from "./Utilities/Interfaces";

function App() {
  const [file, setFile] = useState<File | null>();
  const inputFileRef = useRef<HTMLInputElement | null>(null);
  const [options, setOptions] = useState<DEFAULT_OPTIONSI[]>(DEFAULT_OPTIONS);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number>(0);
  const selectedOption = options[selectedOptionIndex];

  console.log("selectedOptionIndex:", selectedOptionIndex);

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
    if (!file) return;
    const fileURL = URL.createObjectURL(file);
    const link = document.createElement("a");

    link.href = fileURL;
    link.download = "edited_image";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const Btn_options: Btn_optionsI[] = [
    {
      name: "Reset",
      style: {
        backgroundColor: "#E264B2",
      },
      hoverStyle: {
        backgroundColor: "#B7267F",
      },
      clickHandler: handleReset,
    },
    {
      name: "Unmount",
      style: {
        backgroundColor: "#E264B2",
      },
      hoverStyle: {
        backgroundColor: "#B7267F",
      },
      clickHandler: handleUnmount,
    },
    {
      name: "Download",
      style: {
        backgroundColor: "#3888CA",
      },
      hoverStyle: {
        backgroundColor: "#1E659F",
      },
      clickHandler: handleDownload,
    },
    {
      name: "Upload",
      style: {
        backgroundColor: "#38CA38",
      },
      hoverStyle: {
        backgroundColor: "#0D870D",
      },
      clickHandler: handleUploadImage,
    },
  ];

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
          <Btns btns={Btn_options} />
        </div>
      </div>
    </div>
  );
}

export default App;
