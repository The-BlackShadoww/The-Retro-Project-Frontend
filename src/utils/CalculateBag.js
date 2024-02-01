import { useContext } from "react";
import { BagContext } from "../contexts";

// when bag data will come from a api we can convert this component into a utility function because then we don't have to use the context, we can directly map an array.

export const GetBagTotal = () => {
    const { bag } = useContext(BagContext);

    if (bag) {
        const total = bag.reduce((accumulator, currentItem) => {
            return accumulator + currentItem.price * currentItem.quantity;
        }, 0);

        return total;
    }
    return 0;
};
