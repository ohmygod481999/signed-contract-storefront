import { useState } from "react";
import { useForm } from "react-hook-form";
import BreadCrumb from "../components/BreadCrumb";
import { fetchAPI } from "../utils/api";

export default function Contact() {
    const [resMsg, setResMsg] = useState(null);

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const res = await fetchAPI(
                "/ezforms/submit",
                {},
                {
                    method: "POST",
                    body: JSON.stringify({
                        token: "",
                        formData: data,
                    }),
                }
            );
            setValue("name", "");
            setValue("email", "");
            setValue("phone", "");
            setValue("subject", "");
            setValue("message", "");
            setResMsg("Gửi thông tin thành công");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="subpage-main-wrapper about-full">
            {/* <BreadCrumb title={"Contact"} /> */}
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
                                <div id="contact-form" className="contact-form">
                                    <div className="address-wrapper">
                                        <div className="col-md-12">
                                            <div className="address-fname">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    placeholder="Name*"
                                                    {...register("name", {
                                                        required: true,
                                                    })}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="address-email">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Email*"
                                                    {...register("email", {
                                                        required: true,
                                                    })}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="address-web">
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    placeholder="Phone"
                                                    {...register("phone", {
                                                        required: true,
                                                    })}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xs-12">
                                            <div className="address-subject">
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    placeholder="Subject*"
                                                    {...register("subject", {
                                                        required: true,
                                                    })}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xs-12">
                                            <div className="address-textarea">
                                                <textarea
                                                    name="message"
                                                    placeholder="Write your message*"
                                                    defaultValue={""}
                                                    {...register("message", {
                                                        required: true,
                                                    })}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <p className="form-messege text-center">
                                        {resMsg}
                                    </p>
                                    <div className="col-xs-12">
                                        <div className="send-email">
                                            <button
                                                onClick={handleSubmit(onSubmit)}
                                                className="btn btn-default"
                                            >
                                                Send email
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
