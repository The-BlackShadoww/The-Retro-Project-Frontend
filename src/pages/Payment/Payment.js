import React, { useContext, useEffect } from "react";
import PaymentDetails from "../../components/Payment/PaymentDetails";
import { useNavigate } from "react-router-dom";
import { AuthToken } from "../../contexts";

const Payment = () => {
    const navigate = useNavigate();
    const { token } = useContext(AuthToken);

    useEffect(() => {
        if (token === null) {
            setTimeout(() => {
                navigate("/");
            }, 500);
        }
    }, [token, navigate]);

    return token !== null ? <PaymentDetails /> : null;
};

export default Payment;
