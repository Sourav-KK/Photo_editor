import { DEFAULT_OPTIONSI } from "../../Utilities/Default_Options";
const Filter_btns = ({
  options,
  selectedOptionIndex,
  setSelectedOptionIndex,
  isFile,
}: {
  options: DEFAULT_OPTIONSI[];
  selectedOptionIndex: number;
  setSelectedOptionIndex: React.Dispatch<React.SetStateAction<number>>;
  isFile: File | null | undefined;
}) => {
  const handleSetIndex = (index: number) => {
    setSelectedOptionIndex(index);
  };

  return (
    <div className="btn-holder">
      {options.map((elem, index) => (
        <button
          key={index}
          type="button"
          className={`filter-btn ${
            index === selectedOptionIndex ? "active" : ""
          }`}
          name={elem.name}
          onClick={() => handleSetIndex(index)}
          disabled={!isFile}
        >
          {elem.name}
        </button>
      ))}
    </div>
  );
};

export default Filter_btns;
