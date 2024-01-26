import React, { useEffect, useState } from "react";
import { Banner } from "../../components/UI/Media/AdvancedImg";

export const WindowWidth = ({ screen, src_lg, srt_sm }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth <= screen);

    useEffect(() => {
        const handleWidth = () => {
            setWindowWidth(window.innerWidth <= screen);
        };
        window.addEventListener("resize", handleWidth);
        return () => window.removeEventListener("resize", handleWidth);
    }, [screen]);

    const img = windowWidth ? srt_sm : src_lg;

    if (screen <= 767) {
        return <Banner img={img} />;
    }
};
