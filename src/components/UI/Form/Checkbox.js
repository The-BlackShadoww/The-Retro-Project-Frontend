import React from "react";
import { CheckMarkIcon } from "../../../assests/icons/Icons";

export const Checkbox = ({
    label,
    id,
    name,
    value,
    isChecked,
    onChange,
    children,
    pl,
}) => {
    return (
        <div className="flex items-start">
            <input
                type="checkbox"
                id={id}
                name={name}
                value={value}
                checked={isChecked}
                onChange={onChange}
                className="relative peer shrink-0 w-[18px] h-[18px]  appearance-none border border-gray-400 rounded-sm bg-white  checked:bg-black checked:border-0 outline-none cursor-pointer"
            />
            <label
                for={id}
                className={`font-medium`}
                style={{ paddingLeft: pl }}
            >
                {label ? label : children}
            </label>
            <CheckMarkIcon />
        </div>
    );
};
