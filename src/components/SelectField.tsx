import { useField } from "formik";
import type { JSX } from "react";
import type { Option } from "../types/option";

type SelectFieldProps = {
    name: string;
    label: string;
    options: Option[];
};

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
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>

            {meta.touched && meta.error && (
                <div className="text-xs text-red-500 mt-0.5">{meta.error}</div>
            )}
        </div>
    )
}

export default SelectField;