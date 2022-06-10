import classNames from "classnames";
import Link from "next/link";
import { FunctionComponent, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  large?: boolean;
  href: string;
};

const Button: FunctionComponent<ButtonProps> = ({ children, large, href }) => {
  const css = classNames(
    "text-primary-normal px-8 py-2 w-max",
    "rounded-full border-primary-normal border",
    "transition-all hover:bg-primary-transparent",
    {
      "text-xl": !large,
      "text-2xl": large,
    }
  );

  return <Link href={href}><a className={css}>{children}</a></Link>;
};

export default Button;