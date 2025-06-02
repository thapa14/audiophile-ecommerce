import type { ReactNode } from "react";
import clsx from "clsx";
import { Icon } from "@iconify/react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  icon?: string;
  iconSize?: number;
  iconPlacement?: "start" | "end";
  variant?: "contained" | "outlined" | "text";
};

export default function Button({
  children,
  variant = "contained",
  icon,
  iconSize = 13,
  iconPlacement = "end",
  className,
  ...other
}: ButtonProps) {
  const baseClass =
    "inline-flex items-center justify-center gap-2 font-bold text-[13px] tracking-[1px] cursor-pointer";

  const variantClass = clsx({
    "w-40 h-12": variant !== "text",
    "text-white bg-peru hover:bg-peru-light": variant === "contained",
    "text-black bg-white border-2 border-black hover:text-white hover:bg-black":
      variant === "outlined",
    "text-peru": variant === "text",
  });

  return (
    <button className={clsx(baseClass, variantClass, className)} {...other}>
      {icon && iconPlacement === "start" && (
        <Icon icon={icon} width={iconSize} height={iconSize} />
      )}
      {children}
      {icon && iconPlacement === "end" && (
        <Icon icon={icon} width={iconSize} height={iconSize} />
      )}
    </button>
  );
}
