import React from "react";
import { getStrapiMedia } from "../utils/media";
import { get } from "lodash";
import ReactMarkdown from "react-markdown";

function AboutTop({ about }) {
    return (
        <div className="about-top-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-7 col-sm-12 col-xs-12">
                        <div className="abt-image">
                            <a href="#">
                                <img
                                    src={getStrapiMedia(
                                        get(about, "attributes.image")
                                    )}
                                    alt="Domino"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-5 col-sm-12 col-xs-12">
                        <div className="abt-content-wrapper">
                            <div className="abt-title title-head-normal">
                                <h3>
                                    <span className="color-black-def">Why</span>{" "}
                                    We are?
                                </h3>
                            </div>
                            <div className="abt-content">
                                <ReactMarkdown>
                                    {get(about, "attributes.description")}
                                </ReactMarkdown>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutTop;
