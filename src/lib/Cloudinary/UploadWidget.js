//! Uploading Images & Videos in React with the Cloudinary Upload Widget

import React, { useEffect, useRef } from "react";

function UploadWidget() {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();

    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        // console.log(cloudinaryRef.current);
        widgetRef.current = cloudinaryRef.current.createUploadWidget(
            {
                cloudName: "diwkbhqlg", //* Bring it from cloudinary website
                uploadPreset: "kvzqu3kb", //* Bring it from cloudinary website
            },
            function (error, result) {
                console.log(result);
            }
        );
    }, []);

    const imageFromCloudinary =
        "https://res.cloudinary.com/diwkbhqlg/image/upload/v1702998522/lx8uk1gla1ceqg4a6zpr.webp";

    return (
        <div>
            <p>This is cloudinary Upload Widget</p>
            <button
                className="bg-black text-white p-5"
                onClick={() => widgetRef.current.open()}
            >
                upload
            </button>
            <img src={imageFromCloudinary} alt="cloudinary" />
        </div>
    );
}

export default UploadWidget;

//! First you have to put this script in the head section of the index.html file in the public folder.
{
    /* <script
    src="https://upload-widget.cloudinary.com/global/all.js"
    type="text/javascript"
></script>; */
}
