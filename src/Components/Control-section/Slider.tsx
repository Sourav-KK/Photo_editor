const Slider = ({
  value,
  minVal,
  maxVal,
  unit,
  isFile,
  handleChange,
}: {
  value: number | string;
  minVal: number;
  maxVal: number;
  filterName: string;
  unit: string;
  isFile: File | undefined | null;
  handleChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="slider-container">
      <p>
        {isFile ? (
          <>
            {value}
            {unit}
          </>
        ) : (
          "0%"
        )}
      </p>
      <input
        type="range"
        name=""
        id="slider"
        value={value}
        max={maxVal}
        min={minVal}
        disabled={!isFile}
        title={!isFile ? "Choose and image" : "Slide to apply filter"}
        onChange={handleChange}
      />
    </div>
  );
};

export default Slider;
