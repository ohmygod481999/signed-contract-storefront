import React from "react";

function BreadCrumb() {
    return (
        <div className="breadcrumbs-wrapper breadcumbs-bg1">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="breadcrumbs breadcrumbs-style1 sep1 posr">
                            <ul>
                                <li>
                                    <div className="breadcrumbs-icon1">
                                        <a
                                            href="index.html"
                                            title="Return to home"
                                        >
                                            <i className="fa fa-home" />
                                        </a>
                                    </div>
                                </li>
                                <li>Shop</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BreadCrumb;
