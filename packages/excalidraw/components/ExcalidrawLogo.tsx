import "./ExcalidrawLogo.scss";

const LogoIcon = () => (
  <img
    src="/logo.png" // Update this path to the actual location of your image
    alt="Excalidraw Logo"
    className="ExcalidrawLogo-icon"
  />
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
