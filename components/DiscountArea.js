import React from "react";

function DiscountArea() {
    return (
        <div className="middle-discount-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="discount-left-image">
                            <div className="single-discount overlay-margin-22 posr">
                                <div className="discount-img">
                                    <img
                                        src="images/discount/cms1.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="discount-text">
                                    <div className="discount-hover-text def-underline posr">
                                        <h4>Sale up to 70% off</h4>
                                    </div>
                                    <div className="discount-hover-desc desc-head-text uppercase">
                                        <h3>
                                            Some things simply
                                            <br />
                                            won’t go out of style
                                        </h3>
                                    </div>
                                    <div className="discount-hover-btn">
                                        <a
                                            className="btn-def"
                                            href="index.html"
                                        >
                                            Shop Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-12">
                        <div className="discout-middle-image hp1-dmimage">
                            <div className="single-middle-discount overlay-margin-10 posr">
                                <div className="discount-middle-img">
                                    <img
                                        src="images/discount/cms2.jpg"
                                        alt="domino"
                                    />
                                </div>
                                <div className="discount-middle-text">
                                    <div className="discount-middle-text-top">
                                        <h4>New Arrival</h4>
                                    </div>
                                    <div className="discount-middle-text-btm">
                                        <h3>
                                            Classic
                                            <br />
                                            Gentalman
                                        </h3>
                                    </div>
                                </div>
                                <div className="discount-round-btn round-btn">
                                    <a className href="index.html">
                                        <span className="upto">Up to</span>
                                        <br />
                                        <span className="sixtynine">69%</span>
                                        <br />
                                        <span className="off">off</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-12">
                        <div className="discount-right-wrapper hp1-dmimage">
                            <div className="discout-right-top-image">
                                <div className="single-right-top overlay-margin-10 posr">
                                    <div className="discount-right-img">
                                        <img
                                            src="images/discount/cms3.jpg"
                                            alt="domino"
                                        />
                                    </div>
                                    <div className="discount-right-text">
                                        <div className="discount-right-text-top">
                                            <h4>
                                                Glasses
                                                <br />
                                                For summer
                                            </h4>
                                        </div>
                                        <div className="discount-right-text-btm">
                                            <a className href="#">
                                                <span className>Shop Now</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="discout-right-top-image hp1-dmimage">
                                <div className="single-right-top overlay-margin-10 posr">
                                    <div className="discount-right-img">
                                        <img
                                            src="images/discount/cms4.jpg"
                                            alt="domino"
                                        />
                                    </div>
                                    <div className="discount-right-text">
                                        <div className="discount-right-text-top">
                                            <h4>
                                                Hair
                                                <br />
                                                Shaving Brush
                                            </h4>
                                        </div>
                                        <div className="discount-right-text-btm">
                                            <a className href="index.html">
                                                <span className>Shop Now</span>
                                            </a>
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

export default DiscountArea;
