import React, { useEffect } from "react";

function Slider() {

    return (
        <div className="slider-container">
            {/* Slider Image */}
            <div id="mainSlider" className="nivoSlider slider-image">
                <img
                    src="/images/slider/slide1.jpg"
                    alt="main slider"
                    title="#htmlcaption1"
                />
                <img
                    src="/images/slider/slide2.jpg"
                    alt="main slider"
                    title="#htmlcaption2"
                />
            </div>
            {/* Slider Caption 1 */}
            <div
                id="htmlcaption1"
                className="nivo-html-caption slider-caption-1"
            >
                <div className="slider-progress" />
                <div className="container">
                    <div className="slider3-cap-wrapper3 slide-text">
                        <div className="slide-one-text slide-def hp1-cap1">
                            <div
                                className="slide-one-dec wow fadeInDown"
                                data-wow-duration=".9s"
                                data-wow-delay="0.8s"
                            >
                                <h4>It has finally started...</h4>
                            </div>
                            <div
                                className="slide-one-title wow fadeInDown"
                                data-wow-duration=".9s"
                                data-wow-delay="0.8s"
                            >
                                <h2>Huge sale up to </h2>
                            </div>
                            <div
                                className="slide-one-title wow fadeInDown"
                                data-wow-duration=".9s"
                                data-wow-delay="0.8s"
                            >
                                <h1>
                                    <span className="slide-text-big">70%</span>
                                    off
                                </h1>
                            </div>
                            <div
                                className="check-it-out slide2btn-check1 wow fadeInDown"
                                data-wow-duration=".9s"
                                data-wow-delay="0.8s"
                            >
                                <a className="btn-def-black" href="shop.html">
                                    Shop now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Slider Caption 2 */}
            <div
                id="htmlcaption2"
                className="nivo-html-caption slider-caption-2"
            >
                <div className="slider-progress" />
                <div className="container">
                    <div className="slider3-cap-wrapper3 slide-two-cap slide-text text-center">
                        <div className="slide-two-text slide-def hp1-cap2">
                            <div
                                className="slide-two-title slide-underline posr wow fadeInUp text-center"
                                data-wow-duration=".9s"
                                data-wow-delay="0.8s"
                            >
                                <h4>Men's Accessories</h4>
                            </div>
                            <div
                                className="slide-two-dec wow fadeInUp"
                                data-wow-duration=".9s"
                                data-wow-delay="0.8s"
                            >
                                <h1>Only $89.00</h1>
                            </div>
                            <div
                                className="check-it-out slide2btn-check2 wow fadeInUp"
                                data-wow-duration=".9s"
                                data-wow-delay="0.8s"
                            >
                                <a className="btn-def-black" href="shop.html">
                                    Shop Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider;
