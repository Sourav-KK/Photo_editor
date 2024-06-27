interface DEFAULT_OPTIONSI {
  name: string;
  property: string;
  value: number | string;
  range: {
    min: number;
    max: number;
  };
  unit: string;
  defaultValue: number | string;
}

const DEFAULT_OPTIONS: DEFAULT_OPTIONSI[] = [
  {
    name: "Brightness",
    property: "brightness",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
    defaultValue: 100,
  },
  {
    name: "Conrast",
    property: "contrast",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
    defaultValue: 100,
  },
  {
    name: "Saturation",
    property: "saturate",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
    defaultValue: 100,
  },
  {
    name: "Grayscale",
    property: "grayscale",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
    defaultValue: 0,
  },
  {
    name: "Sepia",
    property: "sepia",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
    defaultValue: 0,
  },
  {
    name: "Hue Rotate",
    property: "hue-rotate",
    value: 0,
    range: {
      min: 0,
      max: 360,
    },
    unit: "deg",
    defaultValue: 0,
  },
  {
    name: "Blur",
    property: "blur",
    value: 0,
    range: {
      min: 0,
      max: 20,
    },
    unit: "px",
    defaultValue: 0,
  },
  {
    name: "Invert",
    property: "invert",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
    defaultValue: 0,
  },
  {
    name: "Opacity",
    property: "opacity",
    value: 100,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
    defaultValue: 100,
  },
];

export { DEFAULT_OPTIONS };

export type { DEFAULT_OPTIONSI };
