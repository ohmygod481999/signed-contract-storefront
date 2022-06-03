import BreadCrumb from "../components/BreadCrumb";

export default function Contact() {
    return (
        <div className="subpage-main-wrapper about-full">
            <BreadCrumb />
            <div
                className="contact-email-area"
                style={{
                    marginBottom: "75px",
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="row">
                                <form
                                    id="contact-form"
                                    className="contact-form"
                                    action="mail.php"
                                    method="post"
                                >
                                    <div className="address-wrapper">
                                        <div className="col-md-12">
                                            <div className="address-fname">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    placeholder="Name*"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="address-email">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Email*"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="address-web">
                                                <input
                                                    type="text"
                                                    name="telephone"
                                                    placeholder="Website"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xs-12">
                                            <div className="address-subject">
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    placeholder="Subject*"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xs-12">
                                            <div className="address-textarea">
                                                <textarea
                                                    name="message"
                                                    placeholder="Write your message*"
                                                    defaultValue={""}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <p className="form-messege" />
                                    <div className="col-xs-12">
                                        <div className="send-email">
                                            <button
                                                type="submit"
                                                className="btn btn-default"
                                            >
                                                Send email
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
