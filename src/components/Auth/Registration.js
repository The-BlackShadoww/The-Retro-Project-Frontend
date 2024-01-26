import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input, InputPassword } from "../UI/Form/Input";
import { SubmitButton } from "../UI/Form/Button";
import { Checkbox } from "../UI/Form/Checkbox";

const Registration = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dob, setDob] = useState("");
    // Checkbox state
    const [isAgreed, setIsAgreed] = useState(false);
    const [isGetUpdate, setIsGetUpdate] = useState(false);

    const data = {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        dob: dob,
        isAgreed: isAgreed,
        isGetUpdate: isGetUpdate,
    };
    console.log(data);

    const handleChange = (e) => {
        // e.preventDefault();
        let value = e.target.value;
        let name = e.target.name;

        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        } else if (name === "firstName") {
            setFirstName(value);
        } else if (name === "lastName") {
            setLastName(value);
        } else if (name === "dob") {
            setDob(value);
        } else if (name === "update") {
            setIsGetUpdate(e.target.checked);
        } else if (name === "agreement") {
            setIsAgreed(e.target.checked);
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <main>
            <div className="flex justify-center w-full h-full">
                <div className="max-w-[460px] h-auto mt-8 mx-[36px] flex flex-col">
                    <header>
                        <h1 className="text-4xl font-bold">
                            Now let's make you a Retro Member
                        </h1>
                    </header>
                    <form onSubmit={submitHandler}>
                        <div className="mt-8">
                            <Input
                                type={"email"}
                                id={"email"}
                                name={"email"}
                                value={email}
                                onChange={handleChange}
                                label={"E-mail"}
                            />
                            <div className="flex gap-4">
                                <Input
                                    type={"text"}
                                    id={"firstName"}
                                    name={"firstName"}
                                    value={firstName}
                                    onChange={handleChange}
                                    label={"First Name"}
                                />
                                <Input
                                    type={"text"}
                                    id={"lastName"}
                                    name={"lastName"}
                                    value={lastName}
                                    onChange={handleChange}
                                    label={"Last Name"}
                                />
                            </div>
                            <InputPassword
                                type={"password"}
                                id={"#password"}
                                name={"password"}
                                value={password}
                                onChange={handleChange}
                                label={"Password"}
                            />
                            <Input
                                type={"date"}
                                id={"#dob"}
                                name={"dob"}
                                value={dob}
                                onChange={handleChange}
                                label={"Date of Birth"}
                            />
                        </div>
                        {/* checkbox */}
                        <div>
                            <ul className="">
                                <li className="mt-12">
                                    <Checkbox
                                        label={
                                            "Sign up for emails to get updates fromRetro on products, offers and your membership benefits"
                                        }
                                        id={"update"}
                                        name={"update"}
                                        value={isGetUpdate}
                                        isChecked={isGetUpdate}
                                        onChange={handleChange}
                                        pl={"20px"}
                                    />
                                </li>
                                <li className="mt-12">
                                    <Checkbox
                                        id={"agreement"}
                                        name={"agreement"}
                                        value={isAgreed}
                                        isChecked={isAgreed}
                                        onChange={handleChange}
                                        pl={"20px"}
                                    >
                                        I agree to Retro's
                                        <span>
                                            <Link to="" className="underline">
                                                Privacy Policy
                                            </Link>
                                        </span>
                                        and{" "}
                                        <span>
                                            <Link to="" className="underline">
                                                Terms of Use
                                            </Link>
                                        </span>
                                    </Checkbox>
                                </li>
                            </ul>
                        </div>
                        <div className="flex justify-between items-end">
                            <Link
                                to="/auth"
                                className="basis-[50%] text-base font-medium underline"
                            >
                                Log in
                            </Link>
                            <div className="basis-[50%]">
                                <SubmitButton title={"Create Account"} />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Registration;
