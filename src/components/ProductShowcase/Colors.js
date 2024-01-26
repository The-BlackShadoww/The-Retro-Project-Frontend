import React from "react";

const Colors = ({ showColors }) => {
    return (
        <div className={`${showColors ? "block" : "hidden"}`}>Show colors</div>
    );
};

export default Colors;
