import { useField } from "formik";
import type { SupportAgent } from "../types/user";
import type { JSX } from "react";

type SelectFieldProps = {
    name: string;
    label: string;
    options: string[] | SupportAgent[];
}

const SelectField = ({ label, options, ...props }: SelectFieldProps): JSX.Element => {
    const [field, meta] = useField(props);

    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={props.name} className="text-sm font-medium text-neutral-700">
                {label}
            </label>

            <select
                id={props.name}
                {...field}
                {...props}
                className="p-2.5 rounded-lg border text-sm outline-none transition-all duration-200"
            >
                <option value="">Select {label}</option>
                {options.map(option =>
                    typeof option === "string" ? (
                        <option key={option} value={option}>{option}</option>
                    ) : (
                        <option key={option.id} value={option.id}>{option.name}</option>
                    )
                )}
            </select>

            {meta.error && (
                <div className="text-xs text-red-500 mt-0.5">{meta.error}</div>
            )}
        </div>
    )
}

export default SelectField;