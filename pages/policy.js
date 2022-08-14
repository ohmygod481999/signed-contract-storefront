import React from "react";
import { fetchAPI } from "../utils/api";
import ReactMarkdown from "react-markdown";

function policy({ policy }) {
    console.log(policy);
    return (
        <div className="blog-main-area mb-75">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="blog-main-wrapper">
                            <div className="blog-area-wrapper">
                                <div className="single-blog-post">
                                    <div className="single-content-wrap">
                                        <div className="singleblog-title title-head-normal" style={{
                                            marginBottom: "20px"
                                        }}>
                                            <h3>{policy.attributes.title}</h3>
                                        </div>
                                        <div className="blog-single-content">
                                            <ReactMarkdown>
                                                {policy.attributes.description}
                                            </ReactMarkdown>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export const getStaticProps = async () => {
    const policyRes = await fetchAPI("/policy", {
        populate: "*",
    });

    return {
        props: {
            policy: policyRes.data,
        },
    };
};

export default policy;
