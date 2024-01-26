import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Shipping from "./Shipping";
import InYourBag from "./InYourBag";

const CheckoutDetails = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [postCode, setPostCode] = useState("");
    const [country, setCountry] = useState("");

    const amount = [
        {
            id: 0,
            subtotal: "---",
            estimated: "---",
            total: "---",
        },
    ];

    const handleChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;

        if (name === "email") {
            setEmail(value);
        } else if (name === "phoneNumber") {
            setPhoneNumber(value);
        } else if (name === "firstName") {
            setFirstName(value);
        } else if (name === "lastName") {
            setLastName(value);
        } else if (name === "address1") {
            setAddress1(value);
        } else if (name === "address2") {
            setAddress2(value);
        } else if (name === "city") {
            setCity(value);
        } else if (name === "postCode") {
            setPostCode(value);
        } else if (name === "country") {
            setCountry(value);
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();

        let data = {
            email: email,
            phoneNumber: phoneNumber,
            firstName: firstName,
            lastName: lastName,
            address1: address1,
            address2: address2,
            city: city,
            postCode: postCode,
            country: country,
        };
        console.log(data);

        if (
            city ||
            email ||
            lastName ||
            address1 ||
            address2 ||
            postCode ||
            firstName ||
            phoneNumber ||
            country !== ""
        ) {
            navigate("/payment");
            // redirect("/payment");
        } else {
            alert("Fill the form");
        }
    };

    return (
        <main className="tablet:p-12 p-4">
            <div className="w-full text-center pb-10 px-2">
                <h1 className="text-4xl font-extrabold">Checkout</h1>
            </div>
            <div className="flex tablet:flex-row flex-col gap-5">
                <Shipping
                    email={email}
                    phoneNumber={phoneNumber}
                    firstName={firstName}
                    lastName={lastName}
                    address1={address1}
                    address2={address2}
                    city={city}
                    postCode={postCode}
                    country={country}
                    handleChange={handleChange}
                    submitHandler={submitHandler}
                />
                <InYourBag data={amount} />
            </div>
        </main>
    );
};

export default CheckoutDetails;
