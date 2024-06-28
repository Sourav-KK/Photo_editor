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
    <div
      className="slider-container"
      title={!isFile ? "Choose and image" : "Slide to apply filter"}
    >
      <p>
        {isFile ? (
          <>
            {value}
            {unit}
          </>
        ) : (
          <span className="slider-span">0%</span>
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
        onChange={handleChange}
      />
    </div>
  );
};

export default Slider;
