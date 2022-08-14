import React from "react";
import { getStrapiMedia } from "../utils/media";

function Banner2({ image }) {
    return (
        <div className="" style={{
            marginTop: -7
        }}>
            <img src={getStrapiMedia(image)} alt="" />
        </div>
    );
}

export default Banner2;
