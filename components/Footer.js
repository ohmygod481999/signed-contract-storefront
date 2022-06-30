import Link from "next/link";
import React, { useContext } from "react";
import { getStrapiMedia } from "../utils/media";
import { get } from "lodash";
import DisplayContext from "../context/display-context";

function Footer() {
    const { global } = useContext(DisplayContext);

    return (
        <div className="main-footer-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="footer-content-wrapper">
                            <div className="footer-content">
                                <div
                                    id="f-about"
                                    className="footer-title def-funderline ftitle-about posr"
                                >
                                    <div className="">
                                        <Link href="/">
                                            <a>
                                                <img
                                                    style={{
                                                        width: "75px",
                                                    }}
                                                    src={getStrapiMedia(
                                                        get(
                                                            global,
                                                            "attributes.secondary_logo"
                                                        )
                                                    )}
                                                    alt="domino"
                                                />
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                <div className="footer-text">
                                    <p>
                                        Lorem ipsum dolor sit amet, consec
                                        tetuer adipis elit, aliquam eget nibh
                                        etlibura. Aenean commodo ligula eget
                                        dolor Aenean massa. Portals seize
                                        data-driven, tag expedite
                                    </p>
                                    <div className="footer-readmore">
                                        <a href="about.html">Read more</a>
                                    </div>
                                </div>
                                <ul className="footer-social-icon">
                                    <li>
                                        <a href="#">
                                            <i className="zmdi zmdi-facebook" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="zmdi zmdi-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="zmdi zmdi-rss" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="zmdi zmdi-youtube" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="zmdi zmdi-google-plus" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-6 col-xs-12">
                        <div className="footer-list-wrapper">
                            <div
                                id="f-info"
                                className="footer-title def-funderline ftitle-info posr"
                            >
                                <h5 className="active">Information</h5>
                            </div>
                            <ul className="footer-list-text jscroll-info">
                                <li>
                                    <a href="shop.html" title="New products">
                                        New products
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="single-product.html"
                                        title="Best sellers"
                                    >
                                        Best sellers
                                    </a>
                                </li>
                                <li>
                                    <a href="shop.html" title="Our stores">
                                        Our stores
                                    </a>
                                </li>
                                <li>
                                    <a href="contact.html" title="Contact us">
                                        Contact us
                                    </a>
                                </li>
                                <li>
                                    <a href="index2.html" title="Sitemap">
                                        Sitemap
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-6 col-xs-12">
                        <div className="footer-list-wrapper">
                            <div
                                id="f-cussve"
                                className="footer-title def-funderline def-funderline2 ftitle-cus posr"
                            >
                                <h5 className="active">Customer Service</h5>
                            </div>
                            <ul className="footer-list-text jscroll-cussrve">
                                <li>
                                    <a href="contact.html" title="Contact us">
                                        Chính sách mua hàng
                                    </a>
                                </li>
                                <li>
                                    <a href="index2.html" title="Discount">
                                        Chính sách đổi trả
                                    </a>
                                </li>
                                <li>
                                    <a href="index2.html" title="Site map">
                                        Chính sách bảo hành
                                    </a>
                                </li>
                                <li>
                                    <a href="about.html" title="About us">
                                        Chính sách khách hàng thân thiết
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
