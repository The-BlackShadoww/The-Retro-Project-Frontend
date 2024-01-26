import React from "react";

export const SubmitButton = ({ title, disabled }) => {
    return (
        <div className="w-full flex justify-end mt-8">
            <button
                type="submit"
                disabled={disabled}
                className={`px-7 py-[10px] rounded-full text-white font-medium bg-black ${
                    disabled ? "opacity-50" : "opacity-100"
                }  hover:opacity-50`}
            >
                {title}
            </button>
        </div>
    );
};

export const SubmitButtonOutlined = ({ title }) => {
    return (
        <button
            type="submit"
            className="px-7 py-[10px] rounded-full border border-gray-400 text-[#111111] font-medium bg-white opacity-50 hover:opacity-100"
        >
            {title}
        </button>
    );
};
