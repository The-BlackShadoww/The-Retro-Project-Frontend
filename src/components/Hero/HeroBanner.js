import React from "react";
import { WindowWidth } from "../../utils/windowWidth/WindowWidth";

const HeroBanner = ({ img_lg, img_sm }) => {
    return (
        <div>
            <WindowWidth screen={767} src_lg={img_lg} srt_sm={img_sm} />
        </div>
    );
};

export default HeroBanner;
