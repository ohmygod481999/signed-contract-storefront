import React from "react";
import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import "animate.css";
import { getStrapiMedia, getStrapiMedias } from "../utils/media";

const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

const slideContents = [
    <div key={1} className="container">
        <div className="slider3-cap-wrapper3 slide-text">
            <div className="slide-one-text slide-def hp1-cap1">
                <div
                    className="slide-one-dec animate__animated animate__fadeInDown"
                    data-wow-duration=".9s"
                    data-wow-delay="0.8s"
                >
                    <h4>It has finally started...</h4>
                </div>
                <div
                    className="slide-one-title animate__animated animate__fadeInDown"
                    data-wow-duration=".9s"
                    data-wow-delay="0.8s"
                >
                    <h2>Huge sale up to </h2>
                </div>
                <div
                    className="slide-one-title animate__animated animate__fadeInDown"
                    data-wow-duration=".9s"
                    data-wow-delay="0.8s"
                >
                    <h1>
                        <span className="slide-text-big">70%</span>
                        off
                    </h1>
                </div>
                <div
                    className="check-it-out slide2btn-check1 animate__animated animate__fadeInDown"
                    data-wow-duration=".9s"
                    data-wow-delay="0.8s"
                >
                    <Link href={"/shop"}>
                        <a className="btn-def-black">Shop now</a>
                    </Link>
                </div>
            </div>
        </div>
    </div>,
    <div key={2} className="container">
        <div className="slider3-cap-wrapper3 slide-two-cap slide-text text-center">
            <div className="slide-two-text slide-def hp1-cap2">
                <div
                    className="slide-two-title slide-underline posr animate__animated animate__fadeInDown text-center"
                    data-wow-duration=".9s"
                    data-wow-delay="0.8s"
                >
                    <h4>Men's Accessories</h4>
                </div>
                <div
                    className="slide-two-dec animate__animated animate__fadeInDown"
                    data-wow-duration=".9s"
                    data-wow-delay="0.8s"
                >
                    <h1>Only $89.00</h1>
                </div>
                <div
                    className="check-it-out slide2btn-check2 animate__animated animate__fadeInDown"
                    data-wow-duration=".9s"
                    data-wow-delay="0.8s"
                >
                    <Link href={"/shop"}>
                        <a className="btn-def-black">Shop Now</a>
                    </Link>
                </div>
            </div>
        </div>
    </div>,
];

function Slider2({ images }) {
    return (
        <Slider {...settings} arrows={null}>
            {getStrapiMedias(images).map((imageUrl, i) => {
                // if (i >= slideContents.length) return null;
                return (
                    <div key={i} className="slider-container">
                        <div
                            id={`htmlcaption${i + 1}`}
                            className="nivo-html-caption slider-caption-1"
                            style={{
                                display: "block",
                                backgroundImage: `url(${imageUrl})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                paddingTop: "80px",
                                paddingBottom: "80px",
                                height: "500px",
                            }}
                        >
                            <div className="slider-progress" />
                            {/* {slideContents[i]} */}
                        </div>
                    </div>
                );
            })}
        </Slider>
    );
}

export default Slider2;
