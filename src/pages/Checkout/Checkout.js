import React, { useContext, useEffect } from "react";
import CheckoutDetails from "../../components/Checkout/CheckoutDetails";
import { AuthToken } from "../../contexts";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const navigate = useNavigate();
    const { token } = useContext(AuthToken);

    useEffect(() => {
        if (token === null) {
            setTimeout(() => {
                navigate("/");
            }, 500);
        }
    }, [token, navigate]);

    return token !== null ? <CheckoutDetails /> : null;
};

export default Checkout;
