import type { JSX } from "react";
import { Link } from "react-router-dom"

type CustomLinkProps = {
    href: string;
    label: string;
    className?: string;
}

const CustomLink = ({ href, label, className }: CustomLinkProps): JSX.Element => {
    return (
        <Link
            to={href} 
            className={`text-sky-800 hover:text-sky-500 ${className ?? ""}`}
        >
            {label}
        </Link>
    )
}

export default CustomLink