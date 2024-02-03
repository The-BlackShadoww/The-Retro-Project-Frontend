import React, { useContext, useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Trending from "../../components/Trending/Trending";
import Offer from "../../components/Offers/Offer";
import Featured from "../../components/Featured/Featured";
import Gift from "../../components/Gifts/Gift";
import Iconic from "../../components/Iconic/Iconic";
import Community from "../../components/Community/Community";
import Sport from "../../components/Sport/Sport";
import Data from "../../db/db.json";
import { useLocation } from "react-router-dom";
import { LocationContext } from "../../contexts";

const Home = () => {
    const { setLocation } = useContext(LocationContext);
    const getLocation = useLocation();

    useEffect(() => {
        setLocation(getLocation.pathname);
    });

    return (
        <main>
            <div className="mobile_sm:p-0 p-4">
                <Hero data={Data.hero} />
            </div>
            <div className="p-4 tablet:p-12 md:p-6">
                <Trending data={Data.trending} />
                <Offer />
                <Featured />
                <Gift />
                <Iconic data={Data.iconic} />
                <Sport data={Data.sport} />
                <Community />
            </div>
        </main>
    );
};

export default Home;
