import React, { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";

//! General Input
export const Input = ({
    type,
    id,
    name,
    label,
    value,
    placeholder,
    onChange,
    disabled,
}) => {
    return (
        <div
            className={`relative w-full rounded-lg border mt-8 border-black ${
                disabled ? "opacity-40" : "opacity-100"
            }`}
        >
            <input
                type={type}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                disabled={disabled}
                placeholder={placeholder}
                className="w-full bg-transparent outline-none px-4 py-3"
            />
            <label
                for={id}
                className="absolute top-[-50%] translate-y-[50%] left-2 px-[5px] text-[14px] font-medium text-gray-500 bg-white"
            >
                {label}
            </label>
        </div>
    );
};

//! Input for Password
export const InputPassword = ({
    type,
    id,
    name,
    label,
    value,
    onChange,
    placeholder,
    disabled,
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const passwordController = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="relative w-full flex items-center  rounded-lg border mt-8 border-black">
            <input
                type={showPassword ? "text" : type}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-[92.5%] bg-transparent outline-none px-4 py-3 "
            />
            <label
                for={id}
                className="absolute top-[-50%] translate-y-[50%] left-2 px-[5px] text-[14px] font-medium text-gray-500 bg-white"
            >
                {label}
            </label>
            <span className="cursor-pointer" onClick={passwordController}>
                {showPassword ? <LuEyeOff /> : <LuEye />}
            </span>
        </div>
    );
};

export const InputPasswordBorderLess = ({
    type,
    id,
    name,
    label,
    value,
    placeholder,
    onChange,
}) => {
    return (
        <div className="relative w-full flex items-center mt-8 mb-3">
            <input
                type={"password"}
                id={id}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className="w-[92.5%] bg-transparent outline-none pr-4 py-3 placeholder:text-black font-bold"
            />
            <label
                for={id}
                className="absolute top-[-50%] translate-y-[50%] left-0 px-[0px] text-[14px] font-semibold text-black bg-white"
            >
                {label}
            </label>
        </div>
    );
};
