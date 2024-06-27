import { DEFAULT_OPTIONS } from "../../Utilities/Default_Options";
const Filter_btns = () => {
  return (
    <div className="btn-holder">
      {DEFAULT_OPTIONS.map((elem, index) => (
        <button type="button" className="filter-btn" key={index}>
          {elem.name}
        </button>
      ))}
    </div>
  );
};

export default Filter_btns;
