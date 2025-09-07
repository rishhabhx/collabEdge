import "./ExcalidrawLogo.scss";

const LogoIcon = () => (
  <img
    src="/logo.png" // Update this path to the actual location of your image
    alt="Excalidraw Logo"
    className="ExcalidrawLogo-icon"
  />
);

const LogoText = () => (
  <svg
    viewBox="0 0 300 55"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    className="ExcalidrawLogo-text"
  >
    <text
      x="10"
      y="35"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontSize="28"
      fontWeight="600"
      fill="currentColor"
      letterSpacing="-0.5px"
    >
      {/* Excalidraw */}
    </text>
  </svg>
);

type LogoSize = "xs" | "small" | "normal" | "large" | "custom";

interface LogoProps {
  size?: LogoSize;
  withText?: boolean;
  style?: React.CSSProperties;
  /**
   * If true, the logo will not be wrapped in a Link component.
   * The link prop will be ignored as well.
   * It will merely be a plain div.
   */
  isNotLink?: boolean;
}

export const ExcalidrawLogo = ({
  style,
  size = "large",
  withText,
}: LogoProps) => {
  return (
    <div className={`ExcalidrawLogo is-${size}`} style={style}>
      <LogoIcon />
      {/* {withText && <LogoText />} */}
    </div>
  );
};

export default ExcalidrawLogo;