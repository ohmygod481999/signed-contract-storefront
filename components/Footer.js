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
                            <a
                                style={{
                                    marginBottom: "10px",
                                }}
                            >
                                <img
                                    style={{
                                        width: "75px",
                                    }}
                                    src={getStrapiMedia(
                                        get(global, "attributes.secondary_logo")
                                    )}
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
                                <Link href={"/purchase-policy"}>
                                    <a
                                        title="Contact us"
                                        style={{
                                            color: "#FFF",
                                            // textTransform: "uppercase",
                                            fontSize: "13px",
                                        }}
                                    >
                                        PURCHASE POLICY
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/return-policy"}>
                                    <a
                                        title="Discount"
                                        style={{
                                            color: "#FFF",
                                            // textTransform: "uppercase",
                                            fontSize: "13px",
                                        }}
                                    >
                                        RETURN POLICY
                                    </a>
                                </Link>
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
                            fontSize: "16px",
                        }}
                    >
                        <h3
                            style={{
                                marginBottom: 0,
                            }}
                        >
                            BE A MAN
                            <br />
                            WHO PROVES NOT ALL
                            <br />
                            MAN ARE SAME
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
