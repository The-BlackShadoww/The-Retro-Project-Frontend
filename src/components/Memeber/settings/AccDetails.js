import React, { useContext, useState } from "react";
import { Input, InputPasswordBorderLess } from "../../UI/Form/Input";
import { SubmitButtonOutlined, SubmitButton } from "../../UI/Form/Button";
import { CurrentAccountContext } from "../../../contexts";
import EditModal from "../../UI/Modal/EditModal";
import { Button } from "../../UI/Buttons/Button";

const AccDetails = () => {
    const { currentAccount } = useContext(CurrentAccountContext);
    console.log(currentAccount);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [addPhone, setAddPhone] = useState(false);
    const { firstName, lastName, dob, email, password } = currentAccount;

    const handelModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handlePhone = () => {
        setAddPhone(!addPhone);
    };

    // const handleChange = (e) => {
    //     // e.preventDefault();

    //     let value = e.target.value;

    //     let name = e.target.name;

    //     if (name === "email") {
    //         setEmail(value);
    //     } else if (name === "password") {
    //         setPassword(value);
    //     } else if (name === "p_number") {
    //         setPhoneNumber(value);
    //     } else if (name === "location") {
    //         setLocation(value);
    //     }
    // };

    const submitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <div className="max-w-[768px] w-full xl:mx-[140px] px-0 mb-20">
            <EditModal
                modal={isModalOpen}
                onModal={handelModal}
                title={"Edit Password"}
            >
                <form className="w-full">
                    <Input
                        type={"password"}
                        name={"currentPass"}
                        id={"currentPass"}
                        placeholder={"Current Password*"}
                        value={currentAccount.password}
                    />
                    <Input
                        type={"password"}
                        name={"newPass"}
                        id={"newPass"}
                        placeholder={"New Password*"}
                        value={newPassword}
                    />
                    <Input
                        type={"password"}
                        name={"confirmNewPass"}
                        id={"confirmNewPass"}
                        placeholder={"Confirm New Password*"}
                        value={newPassword}
                    />
                    <p className="my-4 text-[#707072] text-sm">
                        *Password must have at least six characters
                    </p>
                    <div className="mt-8 text-end">
                        <Button title={"save"} />
                    </div>
                </form>
            </EditModal>

            <EditModal
                modal={addPhone}
                onModal={handlePhone}
                title={"Add Phone Number"}
            >
                <form className="w-full">
                    <Input
                        type={"phone"}
                        name={"phoneNumber"}
                        id={"phoneNumber"}
                        placeholder={"Phone Number"}
                        value={phoneNumber}
                    />
                    <div className="mt-8 text-end">
                        <Button title={"Add"} />
                    </div>
                </form>
            </EditModal>
            <header>
                <h1 className="text-xl font-medium">Account Details</h1>
            </header>
            <div>
                <form onSubmit={submitHandler}>
                    {/* Inputs container */}
                    <div>
                        {/* Email */}
                        <Input
                            type={"email"}
                            id={"email"}
                            name={"email"}
                            value={email}
                            // onChange={handleChange}
                            label={"E-mail"}
                        />
                        {/* Password */}
                        <div className="flex items-center">
                            <InputPasswordBorderLess
                                label={"Password"}
                                name={"password"}
                                value={password}
                                placeholder={"......."}
                                // onChange={handleChange}
                            />
                            <button
                                onClick={handelModal}
                                className="p-[2px] text-sm border-b-2 border-b-black"
                            >
                                Edit
                            </button>
                        </div>
                        {/* Mobile Number */}
                        <div className="flex items-center">
                            <InputPasswordBorderLess
                                label={"Phone number"}
                                id={"p_number"}
                                name={"p_number"}
                                value={phoneNumber}
                                placeholder={"xxxxx"}
                                // onChange={handleChange}
                            />
                            <button
                                onClick={handlePhone}
                                className="p-[2px] text-sm border-b-2 border-b-black"
                            >
                                Add
                            </button>
                        </div>
                        {/* Date of Birth */}
                        <Input
                            type={"date"}
                            id={"date"}
                            name={"date"}
                            value={dob}
                            onChange={""}
                            label={"Date of Birth"}
                            disabled={true}
                        />
                    </div>
                    <div className="mt-8">
                        <h1 className="text-[14px] font-semibold text-black">
                            Location
                        </h1>
                        <Input
                            type={"text"}
                            name={"location"}
                            id={"location"}
                            value={"Bangladesh"}
                            placeholder={"Country/Region*"}
                            disabled={false}
                            // onChange={handleChange}
                        />
                    </div>
                    <div className="w-full flex justify-between items-center border-x-0 border-y-gray-400 py-4 my-5">
                        <p className="text-[14px] font-semibold text-black">
                            Delete Account
                        </p>
                        <SubmitButtonOutlined title={"Delete"} />
                    </div>
                    <SubmitButton title={"Save"} disabled={true} />
                </form>
            </div>
        </div>
    );
};

export default AccDetails;

//! previous code
// import React, { useState } from "react";
// import { Input, InputPasswordBorderLess } from "../../UI/Form/Input";
// import { SubmitButtonOutlined, SubmitButton } from "../../UI/Form/Button";

// const AccDetails = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [phoneNumber, setPhoneNumber] = useState("");
//     const [location, setLocation] = useState("");

//     const handleChange = (e) => {
//         // e.preventDefault();

//         let value = e.target.value;

//         let name = e.target.name;

//         if (name === "email") {
//             setEmail(value);
//         } else if (name === "password") {
//             setPassword(value);
//         } else if (name === "p_number") {
//             setPhoneNumber(value);
//         } else if (name === "location") {
//             setLocation(value);
//         }
//     };

//     const submitHandler = (e) => {
//         e.preventDefault();
//     };

//     return (
//         <div className="max-w-[768px] w-full xl:mx-[140px] px-0 mb-20">
//             <header>
//                 <h1 className="text-xl font-medium">Account Details</h1>
//             </header>
//             <div>
//                 <form onSubmit={submitHandler}>
//                     {/* Inputs container */}
//                     <div>
//                         {/* Email */}
//                         <Input
//                             type={"email"}
//                             id={"email"}
//                             name={"email"}
//                             value={email}
//                             onChange={handleChange}
//                             label={"E-mail"}
//                         />
//                         {/* Password */}
//                         <div className="flex items-center">
//                             <InputPasswordBorderLess
//                                 label={"Password"}
//                                 name={"password"}
//                                 value={password}
//                                 placeholder={"......."}
//                                 onChange={handleChange}
//                             />
//                             <button className="p-[2px] text-sm border-b-2 border-b-black">
//                                 Edit
//                             </button>
//                         </div>
//                         {/* Mobile Number */}
//                         <div className="flex items-center">
//                             <InputPasswordBorderLess
//                                 label={"Phone number"}
//                                 id={"p_number"}
//                                 name={"p_number"}
//                                 value={phoneNumber}
//                                 onChange={handleChange}
//                             />
//                             <button className="p-[2px] text-sm border-b-2 border-b-black">
//                                 Add
//                             </button>
//                         </div>
//                         {/* Date of Birth */}
//                         <Input
//                             type={"date"}
//                             id={"date"}
//                             name={"date"}
//                             value={""}
//                             onChange={""}
//                             label={"Date of Birth"}
//                             disabled={true}
//                         />
//                     </div>
//                     <div className="mt-8">
//                         <h1 className="text-[14px] font-semibold text-black">
//                             Location
//                         </h1>
//                         <Input
//                             type={"text"}
//                             name={"location"}
//                             id={"location"}
//                             value={location}
//                             placeholder={"Country/Region*"}
//                             disabled={false}
//                             onChange={handleChange}
//                         />
//                     </div>
//                     <div className="w-full flex justify-between items-center border-x-0 border-y-gray-400 py-4 my-5">
//                         <p className="text-[14px] font-semibold text-black">
//                             Delete Account
//                         </p>
//                         <SubmitButtonOutlined title={"Delete"} />
//                     </div>
//                     <SubmitButton title={"Save"} disabled={true} />
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default AccDetails;
