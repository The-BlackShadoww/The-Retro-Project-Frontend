import React from "react";
import HeroContent from "./HeroContent";

const Hero = ({ data }) => {
    let content;

    content = <HeroContent data={data} path={"/product"} />;

    return <>{content}</>;
};

export default Hero;

//! previous Code with redux
// import React from "react";
// import { useSelector } from "react-redux";
// import HeroContent from "./HeroContent";
// import {
//     useGetHeroDataQuery,
//     selectAllHero,
// } from "../../services/ReduxRtkQuery/homeSlices/heroSlice";

// const Hero = () => {
//     const {
//         data: heroData,
//         isLoading,
//         isError,
//         isSuccess,
//         error,
//     } = useGetHeroDataQuery();
//     console.log(heroData);

//     const data = useSelector(selectAllHero);

//     let content;
//     if (isLoading) {
//         content = <p>Loading...</p>;
//     } else if (isSuccess) {
//         content = <HeroContent data={data} />;
//     } else if (isError) {
//         content = <p>{error}</p>;
//     }

//     return <>{content}</>;
// };

// export default Hero;
