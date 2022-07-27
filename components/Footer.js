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
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                        }}
                    >
                        <Link href="/">
                            <a>
                                <img
                                    style={{
                                        width: "75px",
                                    }}
                                    src="http://cms.signedcontract.vn/uploads/SIGNED_CONTRACT_LOGO_WHITE_167d9584bd.png"
                                    // src={getStrapiMedia(
                                    //     get(global, "attributes.secondary_logo")
                                    // )}
                                    alt="domino"
                                />
                            </a>
                        </Link>

                        <ul
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                marginLeft: "15px",
                            }}
                        >
                            <li>
                                <Link href={"/policy"}>
                                    <a
                                        title="Our policy"
                                        style={{
                                            color: "#FFF",
                                            // textTransform: "uppercase",
                                            fontSize: "13px",
                                        }}
                                    >
                                        Our policy
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="mailto:info@signedcontract.asia"
                                    style={{
                                        color: "#FFF",
                                        // textTransform: "uppercase",
                                        fontSize: "13px",
                                    }}
                                >
                                    Info@signedcontract.asia
                                </a>
                            </li>
                            <li>
                                <ul className="footer-social-icon">
                                    <li>
                                        <a href="#">
                                            <i className="zmdi zmdi-facebook" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="zmdi zmdi-instagram" />
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div
                        className="quotes"
                        style={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <h3
                            className="hidden-xs"
                            style={{
                                marginBottom: 0,
                                fontSize: "21px",
                            }}
                        >
                            BE A MAN
                            <br />
                            WHO PROVES NOT
                            <br />
                            ALL MAN ARE SAME
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
