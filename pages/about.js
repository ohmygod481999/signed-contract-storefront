import React from "react";
import { fetchAPI } from "../utils/api";
import { getStrapiMedia } from "../utils/media";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

function about({ about }) {
    console.log(about);
    return (
        <div className="about-top-area mb-75">
            <div className="container">
                <div className="row">
                    <div className="col-md-7 col-sm-12 col-xs-12">
                        <div className="abt-image">
                            <a href="#">
                                <img
                                    src={getStrapiMedia(about.attributes.image)}
                                    alt="Domino"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-5 col-sm-12 col-xs-12">
                        <div className="abt-content-wrapper">
                            <div className="abt-content">
                                <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                                    {about.attributes.description}
                                </ReactMarkdown>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const getStaticProps = async () => {
    const aboutRes = await fetchAPI("/about-us", {
        populate: "*",
    });

    return {
        props: {
            about: aboutRes.data,
        },
    };
};

export default about;
