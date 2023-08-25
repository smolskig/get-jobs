import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<""> {
  children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  return (
    <button className={`py-3 px-12 rounded-md hover:brightness-90 transition-all ${props.className}`}>
      {props.children}
    </button>
  );
};

export default Button;
