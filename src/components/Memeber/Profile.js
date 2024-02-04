import React, { useContext } from "react";
import { CurrentAccountContext } from "../../contexts";
import { formatDateTime } from "../../utils/formatDateTime";

const Profile = () => {
    const { currentAccount } = useContext(CurrentAccountContext);

    let content;

    if (currentAccount) {
        content = (
            <>
                <div className="w-full flex mobile_sm:flex-row flex-col mobile_sm:items-center items-start">
                    <div className="lg:w-[100px] lg:h-[100px] w-[70px] h-[70px] bg-gray-200 rounded-full"></div>
                    <div className="mobile_sm:pl-5 mobile_sm:pt-0 pt-5">
                        <h1 className="text-3xl font-medium">
                            {currentAccount.firstName} {currentAccount.lastName}
                        </h1>
                        <p>
                            Retro Member since{" "}
                            {formatDateTime(currentAccount.date)}
                        </p>
                        {/* <p>Retro Member since {currentAccount.date}</p> */}
                    </div>
                </div>
                <div className="mt-10 pl-2">
                    <div className="flex pb-2">
                        <p className="font-medium">Email :</p>
                        <p className="pl-5 font-medium">
                            {currentAccount.email}
                        </p>
                    </div>
                    <div className="flex">
                        <p className="font-medium">Country :</p>
                        <p className="pl-5 font-medium">
                            {currentAccount.country
                                ? currentAccount.country
                                : "Bangladesh"}
                        </p>
                    </div>
                </div>
            </>
        );
    } else {
        content = (
            <>
                <div className="w-full flex mobile_sm:flex-row flex-col mobile_sm:items-center items-start">
                    <div className="lg:w-[100px] lg:h-[100px] w-[70px] h-[70px] bg-gray-200 rounded-full"></div>
                    <div className="mobile_sm:pl-5 mobile_sm:pt-0 pt-5">
                        <h1 className="text-3xl font-medium">Member Name</h1>
                        <p>Retro Member since Date</p>
                    </div>
                </div>
                <div className="mt-10 pl-2">
                    <div className="flex pb-2">
                        <p className="font-medium">Email :</p>
                        <p className="pl-5 font-medium">Email</p>
                    </div>
                    <div className="flex">
                        <p className="font-medium">Country :</p>
                        <p className="pl-5 font-medium">Country Name</p>
                    </div>
                </div>
            </>
        );
    }

    return (
        <main className="w-full h-[50vh] mobile_sm:mt-16 mt-6">{content}</main>
    );
};

export default Profile;

//! previous code without auth
// import React, { useContext } from "react";
// import { CurrentAccountContext } from "../../contexts";

// const Profile = () => {
//     const { currentAccount } = useContext(CurrentAccountContext);

//     console.log(currentAccount);

//     const data = [
//         {
//             id: 0,
//             name: "Name of the Member",
//             email: "member@gmail.com",
//             country: "Country Name",
//             date: "dd/mm/yy",
//         },
//     ];

//     let content;

//     content = data.map((i) => (
//         <div key={i.id}>
//             <div className="w-full flex mobile_sm:flex-row flex-col mobile_sm:items-center items-start">
//                 <div className="lg:w-[100px] lg:h-[100px] w-[70px] h-[70px] bg-gray-200 rounded-full"></div>
//                 <div className="mobile_sm:pl-5 mobile_sm:pt-0 pt-5">
//                     <h1 className="text-3xl font-medium">{i.name}</h1>
//                     <p>Retro Member since {i.date}</p>
//                 </div>
//             </div>
//             <div className="mt-10 pl-2">
//                 <div className="flex pb-2">
//                     <p className="font-medium">Email :</p>
//                     <p className="pl-5 font-medium">{i.email}</p>
//                 </div>
//                 <div className="flex">
//                     <p className="font-medium">Country :</p>
//                     <p className="pl-5 font-medium">{i.country}</p>
//                 </div>
//             </div>
//         </div>
//     ));

//     return (
//         <main className="w-full h-[50vh] mobile_sm:mt-16 mt-6">{content}</main>
//     );
// };

// export default Profile;
