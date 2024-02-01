import React, { useContext } from "react";
import { MemberProfileContext } from "../../contexts";

const Shipment = () => {
    const { profile } = useContext(MemberProfileContext);

    let content;

    if (profile) {
        content = (
            <div className="py-2 w-full flex flex-col justify-end">
                <span className="font-medium pb-1">To,</span>
                <span className="font-medium pb-1">
                    Name: {profile.firstName}
                </span>
                <span className="font-medium pb-1">Email: {profile.email}</span>
                <span className="font-medium pb-1">
                    Phone Number: {profile.phoneNumber}
                </span>
                <span className="font-medium pb-1">
                    Address: {profile.address1}
                </span>
                <span className="font-medium pb-1">City: {profile.city}</span>
                <span className="font-medium pb-1">
                    Post Code: {profile.postCode}
                </span>
                <span className="font-medium pb-1">
                    Country: {profile.country}
                </span>
            </div>
        );
    }

    return (
        <div>
            <div className="w-full bg-[#f5f5f5] px-4 py-4">
                <h1 className="text-black text-2xl font-bold">Shipment</h1>
            </div>
            <div className="w-full px-4 border">{content}</div>
        </div>
    );
};

export default Shipment;
