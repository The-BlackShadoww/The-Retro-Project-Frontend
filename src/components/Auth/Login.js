import React, { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { Link } from "react-router-dom";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const passwordController = () => {
        setShowPassword(!showPassword);
    };
    const formController = (e) => {
        e.preventDefault();
    };

    return (
        <main>
            <div className="flex justify-center w-full h-full">
                <div className="max-w-[460px] h-auto mt-8 mx-[36px] flex flex-col">
                    <header>
                        <h1 className="text-4xl font-bold">
                            Enter your email and password to log in
                        </h1>
                    </header>
                    <form onSubmit={formController} className="">
                        <div>
                            <div className="relative w-full  rounded-lg border  mt-8 border-black">
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-transparent outline-none px-4 py-3 "
                                />
                                <label
                                    for="email"
                                    className="absolute top-[-50%] translate-y-[50%] left-2 px-[5px] text-[14px] font-medium text-gray-500 bg-white"
                                >
                                    E-mail
                                </label>
                            </div>
                            <div className="relative w-full flex items-center rounded-lg border mt-8  mb-3 border-black">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    className="w-[92.5%] bg-transparent outline-none px-4 py-3 "
                                />
                                <label
                                    for="password"
                                    className="absolute top-[-50%] translate-y-[50%] left-2 px-[5px] text-[14px] font-medium text-gray-500 bg-white"
                                >
                                    Password
                                </label>
                                <span
                                    className="cursor-pointer"
                                    onClick={passwordController}
                                >
                                    {showPassword ? <LuEyeOff /> : <LuEye />}
                                </span>
                            </div>
                            <span className="text-gray-500 font-medium underline">
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
