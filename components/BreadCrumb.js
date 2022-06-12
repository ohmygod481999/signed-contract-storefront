import Link from "next/link";
import React from "react";

function BreadCrumb({ title }) {
    return (
        <div className="breadcrumbs-wrapper breadcumbs-bg1">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="breadcrumbs breadcrumbs-style1 sep1 posr">
                            <ul>
                                <li>
                                    <div className="breadcrumbs-icon1">
                                        <Link href="/">
                                            <a title="Return to home">
                                                <i className="fa fa-home" />
                                            </a>
                                        </Link>
                                    </div>
                                </li>
                                <li>{title}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BreadCrumb;
