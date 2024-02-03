import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input, InputPassword } from "../UI/Form/Input";
import { SubmitButton } from "../UI/Form/Button";
import { Checkbox } from "../UI/Form/Checkbox";
import { authenticate, storeMemberAcc } from "../../services/authServices";
import { CurrentAccountContext, LocationContext } from "../../contexts";
import { nanoid } from "nanoid";
import Alert from "../UI/Alert/Alert";

const Registration = () => {
    const navigate = useNavigate();
    const { location } = useContext(LocationContext);
    const { setCurrentAccount } = useContext(CurrentAccountContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dob, setDob] = useState("");
    const [isAgreed, setIsAgreed] = useState(false);
    const [isGetUpdate, setIsGetUpdate] = useState(false);
    const [isPasswordShort, setIsPasswordShort] = useState(false);
    const [isEmailExits, setIsEmailExits] = useState(false);
    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    useEffect(() => {
        //* auth alerts
        if (isPasswordShort) {
            setTimeout(() => {
                handlePasswordCheck();
            }, 2000);
        } else if (isEmailExits) {
            setTimeout(() => {
                handleEmailCheck();
            }, 2000);
        } else if (registrationSuccess) {
            setTimeout(() => {
                handleRegistration();
            }, 2000);
        }
    }, [isPasswordShort, isEmailExits, registrationSuccess]);

    const handlePasswordCheck = () => {
        setIsPasswordShort(!isPasswordShort);
    };

    const handleEmailCheck = () => {
        setIsEmailExits(!isEmailExits);
    };

    const handleRegistration = () => {
        setRegistrationSuccess(!registrationSuccess);
    };

    const handleChange = (e) => {
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

    const data = {
        id: nanoid(),
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        dob: dob,
        isAgreed: isAgreed,
        isGetUpdate: isGetUpdate,
        date: new Date(),
    };
    
    const submitHandler = (e) => {
        e.preventDefault();

        if (
            firstName &&
            lastName &&
            email &&
            password &&
            dob &&
            isAgreed &&
            isGetUpdate
        ) {
            if (password.length >= 6) {
                authenticate(data, "signUp")
                    .then((response) => {
                        const account = {
                            ...data,
                            authToken: response.data.idToken,
                            memberId: response.data.localId,
                        };

                        storeMemberAcc(account);

                        localStorage.setItem("account", JSON.stringify(data));
                        localStorage.setItem(
                            "memberId",
                            JSON.stringify(response.data.localId)
                        );
                        localStorage.setItem(
                            "authToken",
                            JSON.stringify(response.data.idToken)
                        );

                        setCurrentAccount(
                            JSON.parse(localStorage.getItem("account"))
                        );

                        handleRegistration();

                        setTimeout(() => {
                            navigate(location);
                        }, 2000);
                    })
                    .catch((error) => {
                        handleEmailCheck();
                        console.log(error);
                    });
            } else {
                handlePasswordCheck();
            }
        } else {
            alert("Fill the form");
        }
    };

    return (
        <main>
            {isPasswordShort && (
                <Alert
                    onAlertChange={handlePasswordCheck}
                    message={"Password must have at least six characters"}
                />
            )}
            {isEmailExits && (
                <Alert onAlertChange={handleEmailCheck}>
                    <h1 className="text-lg font-semibold my-2">
                        <span className="text-orange-600">{email}</span> has
                        already been registered!
                    </h1>
                </Alert>
            )}
            {registrationSuccess && (
                <Alert onAlertChange={handleRegistration}>
                    <h1 className="text-lg font-semibold my-2">
                        <span className="text-orange-600">
                            Congratulations!{" "}
                        </span>{" "}
                        Registration Successful
                    </h1>
                </Alert>
            )}
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
                            <span className="text-xs font-semibold">
                                * Password must have at least six characters
                            </span>
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
                                Sign in
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

// //! previous code
// import React, { useContext, useState } from "react";
// import { Link } from "react-router-dom";
// import { Input, InputPassword } from "../UI/Form/Input";
// import { SubmitButton } from "../UI/Form/Button";
// import { Checkbox } from "../UI/Form/Checkbox";
// import { authenticate, storeMemberAcc } from "../../services/authServices";
// import { CurrentAccountContext } from "../../contexts";
// import { nanoid } from "nanoid";

// const Registration = () => {
//     const { setCurrentAccount } = useContext(CurrentAccountContext);
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [firstName, setFirstName] = useState("");
//     const [lastName, setLastName] = useState("");
//     const [dob, setDob] = useState("");
//     const [isAgreed, setIsAgreed] = useState(false);
//     const [isGetUpdate, setIsGetUpdate] = useState(false);

//     const data = {
//         id: nanoid(),
//         email: email,
//         password: password,
//         firstName: firstName,
//         lastName: lastName,
//         dob: dob,
//         isAgreed: isAgreed,
//         isGetUpdate: isGetUpdate,
//         date: new Date(),
//     };

//     const handleChange = (e) => {
//         let value = e.target.value;
//         let name = e.target.name;

//         if (name === "email") {
//             setEmail(value);
//         } else if (name === "password") {
//             setPassword(value);
//         } else if (name === "firstName") {
//             setFirstName(value);
//         } else if (name === "lastName") {
//             setLastName(value);
//         } else if (name === "dob") {
//             setDob(value);
//         } else if (name === "update") {
//             setIsGetUpdate(e.target.checked);
//         } else if (name === "agreement") {
//             setIsAgreed(e.target.checked);
//         }
//     };

//     const submitHandler = (e) => {
//         e.preventDefault();

//         if (
//             firstName &&
//             lastName &&
//             email &&
//             password &&
//             dob &&
//             isAgreed &&
//             isGetUpdate
//         ) {
//             authenticate(data, "signUp")
//                 .then((response) => {
//                     const account = {
//                         ...data,
//                         authToken: response.data.idToken,
//                         memberId: response.data.localId,
//                     };

//                     storeMemberAcc(account);

//                     localStorage.setItem("account", JSON.stringify(data));
//                     localStorage.setItem(
//                         "memberId",
//                         JSON.stringify(response.data.localId)
//                     );
//                     localStorage.setItem(
//                         "authToken",
//                         JSON.stringify(response.data.idToken)
//                     );

//                     setCurrentAccount(
//                         JSON.parse(localStorage.getItem("account"))
//                     );
//                 })
//                 .catch((error) => console.log(error));
//         } else {
//             alert("Fill the form");
//         }
//     };

//     return (
//         <main>
//             <div className="flex justify-center w-full h-full">
//                 <div className="max-w-[460px] h-auto mt-8 mx-[36px] flex flex-col">
//                     <header>
//                         <h1 className="text-4xl font-bold">
//                             Now let's make you a Retro Member
//                         </h1>
//                     </header>
//                     <form onSubmit={submitHandler}>
//                         <div className="mt-8">
//                             <Input
//                                 type={"email"}
//                                 id={"email"}
//                                 name={"email"}
//                                 value={email}
//                                 onChange={handleChange}
//                                 label={"E-mail"}
//                             />
//                             <div className="flex gap-4">
//                                 <Input
//                                     type={"text"}
//                                     id={"firstName"}
//                                     name={"firstName"}
//                                     value={firstName}
//                                     onChange={handleChange}
//                                     label={"First Name"}
//                                 />
//                                 <Input
//                                     type={"text"}
//                                     id={"lastName"}
//                                     name={"lastName"}
//                                     value={lastName}
//                                     onChange={handleChange}
//                                     label={"Last Name"}
//                                 />
//                             </div>
//                             <InputPassword
//                                 type={"password"}
//                                 id={"#password"}
//                                 name={"password"}
//                                 value={password}
//                                 onChange={handleChange}
//                                 label={"Password"}
//                             />
//                             <span className="text-xs font-semibold">
//                                 * Password must have at least six characters
//                             </span>
//                             <Input
//                                 type={"date"}
//                                 id={"#dob"}
//                                 name={"dob"}
//                                 value={dob}
//                                 onChange={handleChange}
//                                 label={"Date of Birth"}
//                             />
//                         </div>
//                         {/* checkbox */}
//                         <div>
//                             <ul className="">
//                                 <li className="mt-12">
//                                     <Checkbox
//                                         label={
//                                             "Sign up for emails to get updates fromRetro on products, offers and your membership benefits"
//                                         }
//                                         id={"update"}
//                                         name={"update"}
//                                         value={isGetUpdate}
//                                         isChecked={isGetUpdate}
//                                         onChange={handleChange}
//                                         pl={"20px"}
//                                     />
//                                 </li>
//                                 <li className="mt-12">
//                                     <Checkbox
//                                         id={"agreement"}
//                                         name={"agreement"}
//                                         value={isAgreed}
//                                         isChecked={isAgreed}
//                                         onChange={handleChange}
//                                         pl={"20px"}
//                                     >
//                                         I agree to Retro's
//                                         <span>
//                                             <Link to="" className="underline">
//                                                 Privacy Policy
//                                             </Link>
//                                         </span>
//                                         and{" "}
//                                         <span>
//                                             <Link to="" className="underline">
//                                                 Terms of Use
//                                             </Link>
//                                         </span>
//                                     </Checkbox>
//                                 </li>
//                             </ul>
//                         </div>
//                         <div className="flex justify-between items-end">
//                             <Link
//                                 to="/auth"
//                                 className="basis-[50%] text-base font-medium underline"
//                             >
//                                 Sign in
//                             </Link>
//                             <div className="basis-[50%]">
//                                 <SubmitButton title={"Create Account"} />
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </main>
//     );
// };

// export default Registration;
