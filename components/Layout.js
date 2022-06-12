import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Layout(props) {

    return (
        <>
            <Header />
            <div className="clearfix"></div>
            {props.children}
            <Footer />
        </>
    );
}

export default Layout;
