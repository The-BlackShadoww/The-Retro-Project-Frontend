import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import BagDetails from "../../components/Bag/BagDetails";
import { LocationContext } from "../../contexts";

const Bag = () => {
    const { setLocation } = useContext(LocationContext);
    const getLocation = useLocation();
    
    useEffect(() => {
        setLocation(getLocation.pathname);
    }, []);

    return <BagDetails />;
};

export default Bag;
