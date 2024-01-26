import React from "react";
import { Checkbox } from "../UI/Form/Checkbox";

const ShopByPrice = ({
    is0_25Checked,
    is25_50Checked,
    is50_100Checked,
    isOver100Checked,
    handleCheck,
}) => {
    const data = {
        is0_25Checked: is0_25Checked,
        is25_50Checked: is25_50Checked,
        is50_100Checked: is50_100Checked,
        isOver100Checked: isOver100Checked,
    };
    console.log(data);
    
    return (
        <div className={`pt-3 pb-6 font-medium`}>
            <h4>Shop By Price</h4>
            <ul className="pt-4">
                <li>
                    <Checkbox
                        label={"$0 - $25"}
                        id={"0_25"}
                        name={"0_25"}
                        value={is0_25Checked}
                        pl={"8px"}
                        isChecked={is0_25Checked}
                        onChange={handleCheck}
                    />
                </li>
                <li>
                    <Checkbox
                        label={"$25 - $50"}
                        id={"25_50"}
                        name={"25_50"}
                        value={is25_50Checked}
                        pl={"8px"}
                        isChecked={is25_50Checked}
                        onChange={handleCheck}
                    />
                </li>
                <li>
                    <Checkbox
                        label={"$50 - $100"}
                        id={"50_100"}
                        name={"50_100"}
                        value={is50_100Checked}
                        pl={"8px"}
                        isChecked={is50_100Checked}
                        onChange={handleCheck}
                    />
                </li>
                <li>
                    <Checkbox
                        label={"over $100"}
                        id={"over_100"}
                        name={"over_100"}
                        value={isOver100Checked}
                        pl={"8px"}
                        isChecked={isOver100Checked}
                        onChange={handleCheck}
                    />
                </li>
            </ul>
        </div>
    );
};

export default ShopByPrice;
