import type {ReactNode} from "react";
import clsx from "clsx";


type ButtonProps = {
    children: ReactNode,
    className?: string,
    variant?: "contained" | "outlined"
}

export default function Button({children, variant = "contained", className, ...other}: ButtonProps) {

    const baseClass = "w-40 h-12 bg-peru font-bold text-[13px] tracking-[1px] cursor-pointer";

    const variantClass = clsx({
        "text-white bg-peru hover:bg-peru-light": variant === "contained",
        "text-black bg-white border-2 border-black hover:text-white hover:bg-black": variant === "outlined",
    })

    return <button className={clsx(baseClass, variantClass, className)} {...other}>{children}</button>
}