import React from "react";

function AboutTop() {
    return (
        <div className="about-top-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-7 col-sm-12 col-xs-12">
                        <div className="abt-image">
                            <a href="#">
                                <img src="images/about/abt1.jpg" alt="Domino" />
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
                                <p>
                                    Mellentesque faucibus dapibus dapibus. Morbi
                                    aliquam aliquet neque. Donec placerat
                                    dapibus sollicitudin. Morbi arcu nisi,
                                    mattis ut ullamcorper in, dapibus ac nunc.
                                    Cras bibendum mauris et sapien feugiat.
                                    scelerisque accumsan nibh gravida. Quisque
                                    aliquet justo elementum lectus ultrices
                                    bibendum.
                                </p>
                            </div>
                            <div className="about-feature">
                                <ul>
                                    <li>
                                        <i className="fa fa-check" /> Amazing
                                        wordpress theme
                                    </li>
                                    <li>
                                        <i className="fa fa-check" /> HTML &amp;
                                        CSS3 build with bootstrap
                                    </li>
                                    <li>
                                        <i className="fa fa-check" /> Powerfull
                                        admin panel
                                    </li>
                                    <li>
                                        <i className="fa fa-check" /> Icon well
                                        organized &amp; SEO optimized friendy
                                    </li>
                                    <li>
                                        <i className="fa fa-check" />{" "}
                                        Iconncredible design
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutTop;
