import React, { useState } from "react";
import Resizer from "react-image-file-resizer";


const ImageResizerComponent = () => {
    const [resizedImage, setResizedImage] = useState(null);

    const resizeImage = (file) => {
        Resizer.imageFileResizer(
            file,
            800, // Width
            600, // Height
            "JPEG", // Format
            100, // Quality
            0, // Rotation
            (uri) => {
                setResizedImage(uri);
            },
            "base64" // Output type
        );
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            resizeImage(file);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} accept="image/*" />
            {resizedImage && (
                <div>
                    <p>Resized Image:</p>
                   
                    <img src={resizedImage} alt="Resized" />
                </div>
            )}
        </div>
    );
};

export default ImageResizerComponent;
