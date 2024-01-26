import React from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { Resize } from "@cloudinary/url-gen/actions";
import localImg from "../../assests/images/community-1.webp";

const cld = new Cloudinary({
    cloud: {
        cloudName: "diwkbhqlg",
    },
});

const CloudinarySdk = () => {
    return (
        <div>
            <AdvancedImage
                cldImg={cld
                    .image("/banner")
                    .resize(
                        Resize.crop().width(900).height(900).gravity("auto")
                    )
                    .resize(Resize.scale().width(600).height(600))
                    .quality("auto")
                    .format("auto")}
            />
            <img
                src={localImg}
                alt="local"
                className="w-[900px] h-[900px] mt-10"
            />
        </div>
    );
};

export default CloudinarySdk;
