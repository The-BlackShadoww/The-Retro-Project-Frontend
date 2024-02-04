import React from "react";
import { Link } from "react-router-dom";
import { Poster } from "../UI/Media/AdvancedImg";
import { Button, ButtonWhite } from "../UI/Buttons/Button";

const JustIn = ({ data, color }) => {
    const content = data.map((i) => (
        <Link key={i.id} to="/product">
            <div className="w-full overflow-hidden relative">
                <Poster img={i.img} />
                <div className="absolute left-6 bottom-6 md:left-12 md:bottom-12">
                    <span
                        className={`mb-1 ${
                            color === "white" ? "text-white" : "text-black"
                        }`}
                    >
                        {i.status}
                    </span>

                    <h1
                        className={`${
                            color === "white" ? "text-white" : "text-black"
                        } mb-6 text-2xl`}
                    >
                        {i.p_name}
                    </h1>

                    {color === "white" ? (
                        <ButtonWhite path={i.path}>Shop</ButtonWhite>
                    ) : (
                        <Button path={i.path}>Shop</Button>
                    )}
                </div>
            </div>
        </Link>
    ));

    return content;
};

export default JustIn;
