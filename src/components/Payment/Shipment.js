import React from "react";

const Shipment = ({ data }) => {
    let content;

    content = data.map((i) => (
        <div key={i.id} className="py-2 w-full flex flex-col justify-end">
            <span className="font-medium pb-1">To,</span>
            <span className="font-medium pb-1">Name: {i.firstName}</span>
            <span className="font-medium pb-1">Email: {i.email}</span>
            <span className="font-medium pb-1">
                Phone Number: {i.phoneNumber}
            </span>
            <span className="font-medium pb-1">Address: {i.address1}</span>
            <span className="font-medium pb-1">City: {i.city}</span>
            <span className="font-medium pb-1">Post Code: {i.postCode}</span>
            <span className="font-medium pb-1">Country: {i.country}</span>
        </div>
    ));

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
