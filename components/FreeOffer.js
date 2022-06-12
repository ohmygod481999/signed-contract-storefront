import React from "react";

function FreeOffer({ content }) {
    const { title1, description1, title2, description2, title3, description3 } =
        content;
    return (
        <div className="free-offer ptb-95">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="free-offer-wrapper free-border">
                            <div className="row">
                                <div className="col-md-4 col-sm-4 col-xs-12">
                                    <div className="single-free-offer text-center">
                                        <div className="title-head">
                                            <h4>{title1}</h4>
                                        </div>
                                        <div className="free-offer-text">
                                            <p>{description1}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-12">
                                    <div className="single-free-offer def-virticle-line posr text-center">
                                        <div className="title-head">
                                            <h4>{title2}</h4>
                                        </div>
                                        <div className="free-offer-text">
                                            <p>{description2}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-12">
                                    <div className="single-free-offer def-virticle-line posr text-center">
                                        <div className="title-head">
                                            <h4>{title3}</h4>
                                        </div>
                                        <div className="free-offer-text">
                                            <p>{description3}</p>
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

export default FreeOffer;
