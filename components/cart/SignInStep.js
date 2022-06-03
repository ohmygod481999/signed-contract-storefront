import React from "react";

function SignInStep() {
    return (
        <div className="lp-email-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12 col-xs-12">
                        <div className="account-creation">
                            <div className="lp-title">
                                <h3>Create an account</h3>
                            </div>
                            <div className="lp-left-text">
                                <p>
                                    Please enter your email address to create an
                                    account.
                                </p>
                            </div>
                            <form action="#">
                                <div className="lp-input">
                                    <label htmlFor="emailleft">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        id="emailleft"
                                        name="email"
                                    />
                                </div>
                                <div className="lp-input">
                                    <label htmlFor="phoneno">
                                        Phone Number
                                    </label>
                                    <input
                                        type="text"
                                        id="phoneno"
                                        name="phone"
                                    />
                                </div>
                            </form>
                            <div className=" lp-account-btn btn-ac ">
                                <a href="#">
                                    <i
                                        className="fa fa-user"
                                        aria-hidden="true"
                                    />{" "}
                                    Create an account
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-xs-12">
                        <div className="account-creation">
                            <div className="lp-title">
                                <h3>Already registered?</h3>
                            </div>
                            <div className="lp-left-text">
                                <p>
                                    Please put your email address that was used
                                    at the time of registration.
                                </p>
                            </div>
                            <form action="#">
                                <div className="lp-input">
                                    <label htmlFor="emailleftt">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        id="emailleftt"
                                        name="email2"
                                    />
                                </div>
                                <div className="lp-input">
                                    <label htmlFor="emailleft2">Password</label>
                                    <input
                                        type="password"
                                        id="emailleft2"
                                        name="pword"
                                    />
                                </div>
                            </form>
                            <div className=" lp-account-btn btn-ac btn-ac2">
                                <a href="#">
                                    <i
                                        className="fa fa-lock"
                                        aria-hidden="true"
                                    />
                                    Sign In
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignInStep;
