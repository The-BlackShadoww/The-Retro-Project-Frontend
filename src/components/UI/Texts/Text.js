import React from "react";
import "../../../assests/styles/global.css";

export const DescriptiveText = ({ children }) => {
    return (
        <div className="roboto">
            <p className="text-lg">{children}</p>
        </div>
    );
};

export const SmallText = ({ children }) => {
    return (
        <div className="roboto my-2">
            <p className="text-sm opacity-70 font-semibold">{children}</p>
        </div>
    );
};
