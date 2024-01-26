import React from "react";
import { CardSwiperLg } from "../../lib/Swiper/Swiper";
import "../../assests/styles/global.css";
import Section from "../../layouts/Section";
import Data from "../../db/db.json";

const Community = () => {
    const data = Data.community;

    let content;

    content = (
        <Section title={"Retro Membership"}>
            <div>
                <CardSwiperLg arr={data} />
            </div>
        </Section>
    );

    return content;
};

export default Community;

//! code with redux
// import React from "react";
// import { CardSwiperLg } from "../../lib/Swiper/Swiper";
// import "../../assests/styles/global.css";
// import {
//     useGetCommunityDataQuery,
//     selectAllCommunity,
// } from "../../services/ReduxRtkQuery/homeSlices/communitySlice";
// import { useSelector } from "react-redux";
// import Section from "../../layouts/Section";

// const Community = () => {
//     const {
//         data: Data,
//         isLoading,
//         isError,
//         isSuccess,
//         error,
//     } = useGetCommunityDataQuery();
//     console.log(Data);

//     const data = useSelector(selectAllCommunity);

//     let content;

//     if (isLoading) {
//         content = <p>Loading...</p>;
//     } else if (isSuccess) {
//         content = (
//             <Section title={"Retro Membership"}>
//                 <div>
//                     <CardSwiperLg arr={data} />
//                 </div>
//             </Section>
//         );
//     } else if (isError) {
//         content = <p>{error}</p>;
//     }

//     return content;
// };

// export default Community;
