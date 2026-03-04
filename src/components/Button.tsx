import type { JSX } from "react";

type ButtonProps = {
    type: "submit" | "reset" | "button" | undefined;
    label: string;
    className?: string;
    onClick?: () => void;
}

const Button = ({ type, label, className = "w-full", onClick }: ButtonProps): JSX.Element => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`py-2.5 px-4 bg-sky-700 hover:bg-sky-800 text-white font-semibold rounded-lg transition-colors duration-200 cursor-pointer ${className ?? ""}`}
        >
            {label}
        </button>
    )
}

export default Button;