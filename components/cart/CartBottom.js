import React from "react";

function CartBottom({ onBack, onNext }) {
    return (
        <div className="bottom-indicator-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-12">
                        {onBack && (
                            <div className="page-indicator-left indicator-def">
                                <a
                                    href="#href"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        // updateCheckoutStep(1);
                                        onBack();
                                    }}
                                >
                                    <i className="fa fa-angle-left" /> Back
                                </a>
                            </div>
                        )}
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="page-indicator-right indicator-def">
                            <a
                                href="#checkout"
                                onClick={(e) => {
                                    e.preventDefault();
                                    // updateCheckoutStep(1);
                                    onNext();
                                }}
                            >
                                Next <i className="fa fa-angle-right" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartBottom;
