import React from "react";
import { CardSwiper } from "../../lib/Swiper/Swiper";
import Section from "../../layouts/Section";

const Iconic = ({ data }) => {
    let content;

    content = (
        <Section title={"Always Iconic"}>
            <div className="">
                <CardSwiper arr={data} path={"/product"} />
            </div>
        </Section>
    );

    return content;
};

export default Iconic;

//! code with redux
// import React from "react";
// import { CardSwiper } from "../../lib/Swiper/Swiper";
// import {
//     useGetIconicDataQuery,
//     selectAllIconic,
// } from "../../services/ReduxRtkQuery/homeSlices/iconicSlice";
// import { useSelector } from "react-redux";
// import Section from "../../layouts/Section";

// const Iconic = () => {
//     const {
//         // data: Data,
//         isLoading,
//         isError,
//         isSuccess,
//         error,
//     } = useGetIconicDataQuery();

//     const data = useSelector(selectAllIconic);

//     let content;

//     if (isLoading) {
//         content = <p>Loading...</p>;
//     } else if (isSuccess) {
//         content = (
//             <Section title={"Always Iconic"}>
//                 <div className="">
//                     <CardSwiper arr={data} />
//                 </div>
//             </Section>
//         );
//     } else if (isError) {
//         content = <p>{error}</p>;
//     }

//     return content;
// };

// export default Iconic;
