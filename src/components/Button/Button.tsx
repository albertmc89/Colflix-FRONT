import { ButtonHTMLAttributes } from "react";
import "./Button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  actionOnClick?: () => void;
  text?: string;
  onFocus?: () => void;
  onBlur?: () => void;
}

const Button = ({
  className,
  actionOnClick,
  text,
  onFocus,
  onBlur,
  children,
}: ButtonProps): React.ReactElement => {
  return (
    <button
      className={`button ${className}`}
      onClick={actionOnClick}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      {children}
      {text}
    </button>
  );
};

export default Button;
