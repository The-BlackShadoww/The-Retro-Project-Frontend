import React from "react";
import { CardImg } from "../UI/Media/AdvancedImg";

const AdminProfile = ({ isNavOpen, handleNav }) => {
    return (
        <div className="w-full h-[60px] relative p-2 bg-[#f5f5f5]">
            <div className="flex items-center">
                <div className="w-[40px] h-[40px] rounded-full border-2 overflow-hidden">
                    <CardImg img={"/Retro/dp"} />
                </div>
                <div className="pl-2 leading-[10px]">
                    <span className="text-base font-semibold">Admin Name</span>
                    <br />
                    <span className="text-xs">Admin</span>
                </div>
            </div>
            <div
                className={`absolute top-2 ${
                    isNavOpen ? "-right-5" : "-right-9"
                } `}
            >
                <button
                    onClick={handleNav}
                    className="w-[35px] h-[35px] bg-black text-white rounded-full"
                >
                    <span>{isNavOpen ? "<<" : ">>"}</span>
                </button>
            </div>
        </div>
    );
};

export default AdminProfile;
