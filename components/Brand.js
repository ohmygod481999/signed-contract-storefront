import React from "react";
import { getStrapiMedias } from "../utils/media";

function Brand({ images }) {
    
    return (
        <div className="brand-area hp1-brand-area">
            <div className="container">
                <div className="row">
                    <div className="brand-slider-wrapper">
                        <div className="active-brand-owl def-owl">
                            {getStrapiMedias(images).map((imageUrl, i) => (
                                <div
                                    key={i}
                                    className={`col-md-${12 / images.data.length}`}
                                >
                                    <div className="brand-image">
                                        <img src={imageUrl} alt="Domino" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Brand;
