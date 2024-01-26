import React from "react";
import { CardSwiper } from "../../lib/Swiper/Swiper";
import Section from "../../layouts/Section";

const Sport = ({ data }) => {
    let content;

    content = (
        <Section title={"Shop by Sport"}>
            <div>
                <CardSwiper arr={data} path={"/product"} />
            </div>
        </Section>
    );

    return content;
};

export default Sport;

//! code with redux
// import React from "react";
// import { CardSwiper } from "../../lib/Swiper/Swiper";
// import { useSelector } from "react-redux";
// import {
//     useGetSportDataQuery,
//     selectAllSport,
// } from "../../services/ReduxRtkQuery/homeSlices/sportSlice";
// import Section from "../../layouts/Section";

// const Sport = () => {
//     const {
//         data: Data,
//         isLoading,
//         isError,
//         isSuccess,
//         error,
//     } = useGetSportDataQuery();
//     console.log(Data);

//     const data = useSelector(selectAllSport);

//     let content;

//     if (isLoading) {
//         content = <p>Loading...</p>;
//     } else if (isSuccess) {
//         content = (
//             <Section title={"Shop by Sport"}>
//                 <div>
//                     <CardSwiper arr={data} />
//                 </div>
//             </Section>
//         );
//     } else if (isError) {
//         content = <p>{error}</p>;
//     }
//     return content;
// };

// export default Sport;
