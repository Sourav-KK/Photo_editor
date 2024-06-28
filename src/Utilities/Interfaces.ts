interface Btn_optionsI {
  name: string;
  style: React.CSSProperties;
  hoverStyle: React.CSSProperties;
  clickHandler: () => void;
  state: boolean;
}

export type { Btn_optionsI };
