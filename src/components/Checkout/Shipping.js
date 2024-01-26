import React from "react";
import { Input } from "../UI/Form/Input";
import { SubmitButton } from "../UI/Form/Button";

const Shipping = ({
    email,
    phoneNumber,
    firstName,
    lastName,
    address1,
    address2,
    city,
    postCode,
    country,
    handleChange,
    submitHandler,
}) => {
    return (
        // <div className="max-w-[1200px] w-full border">
        <div className="basis-[70%] w-full tablet:order-1 order-2">
            <div className="w-full bg-[#111111] px-4 py-4">
                <h1 className="text-white text-2xl font-bold">Shipping</h1>
            </div>
            <form onSubmit={submitHandler}>
                <div className="px-4 pb-8 border">
                    <div className="flex gap-4">
                        <Input
                            type={"text"}
                            name={"firstName"}
                            id={"firstName"}
                            value={firstName}
                            onChange={handleChange}
                            placeholder={"First Name"}
                            disabled={false}
                        />
                        <Input
                            type={"text"}
                            name={"lastName"}
                            id={"lasName"}
                            value={lastName}
                            onChange={handleChange}
                            placeholder={"Last Name"}
                            disabled={false}
                        />
                    </div>
                    <div>
                        <Input
                            type={"email"}
                            name={"email"}
                            id={"email"}
                            value={email}
                            onChange={handleChange}
                            placeholder={"Email"}
                            disabled={false}
                        />
                    </div>
                    <div>
                        <Input
                            type={"text"}
                            name={"phoneNumber"}
                            id={"phoneNumber"}
                            value={phoneNumber}
                            onChange={handleChange}
                            placeholder={"Phone Number"}
                            disabled={false}
                        />
                    </div>
                    <div className="flex tablet:flex-row flex-col tablet:gap-4">
                        <Input
                            type={"text"}
                            name={"address1"}
                            id={"address1"}
                            value={address1}
                            onChange={handleChange}
                            placeholder={"Address 1"}
                            disabled={false}
                        />
                        <Input
                            type={"text"}
                            name={"address2"}
                            id={"address2"}
                            value={address2}
                            onChange={handleChange}
                            placeholder={"Address 2"}
                            disabled={false}
                        />
                    </div>
                    <div>
                        <Input
                            type={"text"}
                            name={"city"}
                            id={"city"}
                            value={city}
                            onChange={handleChange}
                            placeholder={"City"}
                            disabled={false}
                        />
                    </div>
                    <div>
                        <Input
                            type={"text"}
                            name={"postCode"}
                            id={"postCode"}
                            value={postCode}
                            onChange={handleChange}
                            placeholder={"Post code"}
                            disabled={false}
                        />
                    </div>
                    <div>
                        <Input
                            type={"text"}
                            name={"country"}
                            id={"country"}
                            value={country}
                            onChange={handleChange}
                            placeholder={"Country"}
                            disabled={false}
                        />
                    </div>
                    <div>
                        <SubmitButton
                            title={"Save & Continue"}
                            path={"/payment"}
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Shipping;
