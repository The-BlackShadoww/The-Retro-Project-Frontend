import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input, InputPassword } from "../UI/Form/Input";
import { authenticate } from "../../services/authServices";
import Alert from "../UI/Alert/Alert";
import {
    AllAccountContext,
    CurrentAccountContext,
    AuthToken,
    LocationContext,
} from "../../contexts";

const Login = () => {
    const navigate = useNavigate();
    const { location } = useContext(LocationContext);
    const { allAccounts } = useContext(AllAccountContext);
    const { setCurrentAccount } = useContext(CurrentAccountContext);
    const { setToken } = useContext(AuthToken);
    const [isAuthSuccess, setIsAuthSuccess] = useState(false);
    const [isAuthFailed, setIsAuthFailed] = useState(false);
    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    useEffect(() => {
        //* auth alerts
        if (isAuthSuccess) {
            setTimeout(() => {
                handleAlertSuccess();
            }, 2500);
        } else if (isAuthFailed) {
            setTimeout(() => {
                handleAlertFail();
            }, 2000);
        }
    }, [isAuthSuccess, isAuthFailed]);

    const { email, password } = values;

    const handleAlertSuccess = () => {
        setIsAuthSuccess(!isAuthSuccess);
    };

    const handleAlertFail = () => {
        setIsAuthFailed(!isAuthFailed);
    };

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setValues({
            ...values,
            [name]: value,
        });
    };

    const submitHandler = (e) => {
        e.preventDefault();

        if (email && password) {
            authenticate(values, "signIn")
                .then((response) => {
                    const accObject = allAccounts.find(
                        (item) => item.email === email
                    );

                    if (accObject) {
                        localStorage.setItem(
                            "account",
                            JSON.stringify(accObject)
                        );
                    } else {
                        console.log("Member not found");
                    }

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

                    setToken(JSON.parse(localStorage.getItem("authToken")));

                    handleAlertSuccess();

                    setTimeout(() => {
                        navigate(location);
                    }, 2000);
                })
                .catch((error) => {
                    handleAlertFail();
                    console.log(error);
                });
        }
    };

    return (
        <main>
            {isAuthSuccess && (
                <Alert
                    onAlertChange={handleAlertSuccess}
                    message={"Signed In Successfully"}
                />
            )}
            {isAuthFailed && (
                <Alert onAlertChange={handleAlertFail}>
                    <h1 className="text-lg font-semibold">
                        <span className="text-red-600">Failed to Sign In.</span>{" "}
                        Please Check your email and password
                    </h1>
                </Alert>
            )}
            <div className="flex justify-center w-full h-full">
                <div className="max-w-[460px] h-auto mt-8 mx-[36px] flex flex-col">
                    <header>
                        <h1 className="text-4xl font-bold">
                            Enter your email and password to Sign in
                        </h1>
                    </header>
                    <form onSubmit={submitHandler} className="">
                        <div>
                            <Input
                                type={"email"}
                                id={"email"}
                                name={"email"}
                                value={email}
                                onChange={handleChange}
                                label={"E-mail"}
                            />
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
                            <br />
                            <span className="text-gray-500 text-sm font-medium m underline">
                                <Link to="">Forget password</Link>
                            </span>
                        </div>
                        <div className="w-full flex justify-between items-end mt-12">
                            <span>
                                <Link
                                    to="resignation"
                                    className="text-base font-medium underline"
                                >
                                    Join us
                                </Link>
                            </span>
                            <button
                                type="submit"
                                className="px-7 py-[10px] rounded-full text-white font-medium bg-black hover:opacity-50"
                            >
                                Log in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Login;

//! previous code
// import React, { useContext, useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Input, InputPassword } from "../UI/Form/Input";
// import { authenticate } from "../../services/authServices";
// import {
//     AllAccountContext,
//     CurrentAccountContext,
//     AuthToken,
//     LocationContext,
// } from "../../contexts";
// import Alert from "../UI/Alert/Alert";

// const Login = () => {
//     const navigate = useNavigate();
//     const { location } = useContext(LocationContext);
//     // console.log(location);
//     const { allAccounts } = useContext(AllAccountContext);
//     const { setCurrentAccount } = useContext(CurrentAccountContext);
//     const { setToken } = useContext(AuthToken);
//     const [isAuthSuccess, setIsAuthSuccess] = useState(false);
//     const [isAuthFailed, setIsAuthFailed] = useState(false);
//     const [values, setValues] = useState({
//         email: "",
//         password: "",
//     });

//     useEffect(() => {
//         if (isAuthSuccess) {
//             setTimeout(() => {
//                 handleAlertSuccess();
//             }, 2500);
//         } else if (isAuthFailed) {
//             setTimeout(() => {
//                 handleAlertFail();
//             }, 2000);
//         }
//     }, [isAuthSuccess, isAuthFailed]);

//     const { email, password } = values;

//     const handleAlertSuccess = () => {
//         setIsAuthSuccess(!isAuthSuccess);
//     };

//     const handleAlertFail = () => {
//         setIsAuthFailed(!isAuthFailed);
//     };

//     const handleChange = (e) => {
//         const name = e.target.name;
//         const value = e.target.value;

//         setValues({
//             ...values,
//             [name]: value,
//         });
//     };

//     let resultArray;
//     if (allAccounts !== null && allAccounts !== undefined) {
//         resultArray = Object.values(allAccounts[0]); //! **Cannot convert undefined or null to object***
//     } else {
//         console.log("something went wrong");
//     }

//     const submitHandler = (e) => {
//         e.preventDefault();

//         if (email && password) {
//             authenticate(values, "signIn")
//                 .then((response) => {
//                     const accObject = resultArray.find(
//                         (item) => item.email === email
//                     );

//                     if (accObject) {
//                         localStorage.setItem(
//                             "account",
//                             JSON.stringify(accObject)
//                         );
//                     } else {
//                     }

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
//                     setToken(JSON.parse(localStorage.getItem("authToken")));
//                     handleAlertSuccess();
//                     setTimeout(() => {
//                         navigate(location);
//                     }, 2000);
//                 })
//                 .catch((error) => {
//                     handleAlertFail();
//                 });
//         }
//     };

//     return (
//         <main>
//             {isAuthSuccess && (
//                 <Alert
//                     onAlertChange={handleAlertSuccess}
//                     message={"Signed In Successfully"}
//                 />
//             )}
//             {isAuthFailed && (
//                 <Alert onAlertChange={handleAlertFail}>
//                     <h1 className="text-lg font-semibold">
//                         <span className="text-red-600">Failed to Sign In.</span>{" "}
//                         Please Check your email and password
//                     </h1>
//                 </Alert>
//             )}
//             <div className="flex justify-center w-full h-full">
//                 <div className="max-w-[460px] h-auto mt-8 mx-[36px] flex flex-col">
//                     <header>
//                         <h1 className="text-4xl font-bold">
//                             Enter your email and password to Sign in
//                         </h1>
//                     </header>
//                     <form onSubmit={submitHandler} className="">
//                         <div>
//                             <Input
//                                 type={"email"}
//                                 id={"email"}
//                                 name={"email"}
//                                 value={email}
//                                 onChange={handleChange}
//                                 label={"E-mail"}
//                             />
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
//                             <br />
//                             <span className="text-gray-500 text-sm font-medium m underline">
//                                 <Link to="">Forget password</Link>
//                             </span>
//                         </div>
//                         <div className="w-full flex justify-between items-end mt-12">
//                             <span>
//                                 <Link
//                                     to="resignation"
//                                     className="text-base font-medium underline"
//                                 >
//                                     Join us
//                                 </Link>
//                             </span>
//                             <button
//                                 type="submit"
//                                 className="px-7 py-[10px] rounded-full text-white font-medium bg-black hover:opacity-50"
//                             >
//                                 Log in
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </main>
//     );
// };

// export default Login;
