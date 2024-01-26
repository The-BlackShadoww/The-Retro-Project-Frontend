import React from "react";
import "../assests/styles/global.css";

const Section = ({ title, title_lg, children }) => {
    return (
        <section className="mt-24">
            <div className="mb-7">
                <h1 className="Poppins text-2xl font-medium">{title}</h1>
                <h1 className="Poppins text-3xl font-medium">{title_lg}</h1>
            </div>
            {children}
        </section>
    );
};

export default Section;
