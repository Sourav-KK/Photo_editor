import { Btn_optionsI } from "../Utilities/Interfaces";

const useBtn = ({
  handleReset,
  handleUnmount,
  handleDownload,
  handleUploadImage,
  btnState,
}: {
  handleReset: () => void;
  handleUnmount: () => void;
  handleDownload: () => void;
  handleUploadImage: () => void;
  btnState: boolean;
}) => {
  const Btn_options: Btn_optionsI[] = [
    {
      name: "Reset",
      style: {
        backgroundColor: "#E33A16",
      },
      hoverStyle: {
        backgroundColor: "#C32C0B",
      },
      clickHandler: handleReset,
      state: btnState,
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
      state: btnState,
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
      state: btnState,
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
      state: true,
    },
  ];

  return Btn_options;
};

export default useBtn;
