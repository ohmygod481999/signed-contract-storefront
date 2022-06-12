import AboutTop from "../components/AboutTop";
import Brand from "../components/Brand";
import { fetchAPI } from "../utils/api";

export default function About({ about }) {
    console.log(about);

    return (
        <div>
            <AboutTop about={about}/>
            <Brand />
        </div>
    );
}

export const getStaticProps = async () => {
    const aboutRes = await fetchAPI("/about-us", {
        populate: "*",
    });

    return {
        props: {
            about: aboutRes.data,
        },
    };
};
