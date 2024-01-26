import React from "react";
import { Checkbox } from "../UI/Form/Checkbox";

const Gender = ({
    isMenChecked,
    isWomenChecked,
    isKidsChecked,
    handleCheck,
}) => {
    const data = {
        isMenChecked: isMenChecked,
        isWomenChecked: isWomenChecked,
        isKidsChecked: isKidsChecked,
    };
    console.log(data);

    return (
        <div className={`pt-3 pb-6 font-medium`}>
            <h4>Gender</h4>
            <ul className="pt-4">
                <li className="cursor-pointer">
                    <Checkbox
                        label={"Men"}
                        id={"men"}
                        name={"men"}
                        value={isMenChecked}
                        pl={"8px"}
                        isChecked={isMenChecked}
                        onChange={handleCheck}
                    />
                </li>
                <li className="cursor-pointer">
                    <Checkbox
                        label={"Women"}
                        id={"women"}
                        name={"women"}
                        value={isWomenChecked}
                        pl={"8px"}
                        isChecked={isWomenChecked}
                        onChange={handleCheck}
                    />
                </li>
                <li className="cursor-pointer">
                    <Checkbox
                        label={"Kids"}
                        id={"kids"}
                        name={"kids"}
                        value={isKidsChecked}
                        pl={"8px"}
                        isChecked={isKidsChecked}
                        onChange={handleCheck}
                    />
                </li>
            </ul>
        </div>
    );
};

export default Gender;
