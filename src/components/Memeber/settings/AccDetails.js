import React, { useContext, useState } from "react";
import { Input, InputPassword } from "../../UI/Form/Input";
import { SubmitButtonOutlined, SubmitButton } from "../../UI/Form/Button";
import { CurrentAccountContext } from "../../../contexts";
import EditModal from "../../UI/Modal/EditModal";
import { Button } from "../../UI/Buttons/Button";

const AccDetails = () => {
    const { currentAccount } = useContext(CurrentAccountContext);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPass, setConfirmNewPass] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [addPhone, setAddPhone] = useState(false);

    const handelModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handlePhone = () => {
        setAddPhone(!addPhone);
    };

    const handleChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;

        if (name === "newPass") {
            setNewPassword(value);
        } else if (name === "confirmNewPass") {
            setConfirmNewPass(value);
        } else if (name === "phoneNumber") {
            setPhoneNumber(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="max-w-[768px] w-full xl:mx-[140px] px-0 mb-20">
            {/* Edit password */}
            <EditModal
                modal={isModalOpen}
                onModal={handelModal}
                title={"Edit Password"}
            >
                <form onSubmit={handleSubmit} className="w-full">
                    <Input
                        type={"text"}
                        name={"currentPass"}
                        id={"currentPass"}
                        placeholder={"Current Password*"}
                        value={currentAccount ? currentAccount.password : ""}
                        label={"Current Password"}
                        disabled={"true"}
                    />
                    <InputPassword
                        type={"password"}
                        name={"newPass"}
                        id={"newPass"}
                        label={"New Password*"}
                        value={newPassword}
                        onChange={handleChange}
                    />
                    <InputPassword
                        type={"password"}
                        name={"confirmNewPass"}
                        id={"confirmNewPass"}
                        label={"Confirm New Password*"}
                        value={confirmNewPass}
                        onChange={handleChange}
                    />
                    <p className="my-4 text-[#707072] text-sm">
                        *Password must have at least six characters
                    </p>
                    <div className="mt-8 text-end">
                        <SubmitButton title={"Save"} />
                    </div>
                </form>
            </EditModal>
            {/* Add phone number */}
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
                {/* Inputs container */}
                <div>
                    {/* Email */}
                    <Input
                        type={"email"}
                        id={"email"}
                        name={"email"}
                        value={`${currentAccount ? currentAccount.email : ""}`}
                        onChange={handleChange}
                        label={"E-mail"}
                    />
                    {/* Password */}
                    <div className="mt-8">
                        <h4 className="font-semibold text-[14px]">Password</h4>
                        <div className="flex items-center justify-between mt-5">
                            <div className="">
                                {currentAccount ? currentAccount.password : ""}
                            </div>
                            <button
                                onClick={handelModal}
                                className="p-[2px] text-sm font-medium border-b-2 border-b-black"
                            >
                                Edit
                            </button>
                        </div>
                    </div>
                    {/* Phone Number */}
                    <div className="mt-8">
                        <h4 className="font-semibold text-[14px]">
                            Phone Number
                        </h4>
                        <div className="flex items-center justify-between mt-5">
                            <div className="">{phoneNumber}</div>
                            <button
                                onClick={handlePhone}
                                className="p-[2px] text-sm font-medium border-b-2 border-b-black"
                            >
                                Add
                            </button>
                        </div>
                    </div>
                    {/* Date of Birth */}
                    <Input
                        type={"date"}
                        id={"date"}
                        name={"date"}
                        value={`${currentAccount ? currentAccount.dob : ""}`}
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
                        onChange={handleChange}
                    />
                </div>
                <div className="w-full flex justify-between items-center border-x-0 border-y-gray-400 py-4 my-5">
                    <p className="text-[14px] font-semibold text-black">
                        Delete Account
                    </p>
                    <SubmitButtonOutlined title={"Delete"} />
                </div>
                <SubmitButton title={"Save"} disabled={true} />
            </div>
        </div>
    );
};

export default AccDetails;
