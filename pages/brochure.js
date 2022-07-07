import AboutTop from "../components/AboutTop";
import Banner2 from "../components/Banner2";
import Brand from "../components/Brand";
import { fetchAPI } from "../utils/api";
import { getStrapiMedias } from "../utils/media";

export default function About({ brochure }) {
    const imageUrls = getStrapiMedias(brochure.attributes.brochure_images);

    return (
        <div>
            {/* <AboutTop about={about}/> */}
            {/* <Brand /> */}
            {imageUrls.map((imageUrl, i) => (
                <div key={i} className="">
                    <img src={imageUrl} alt="" />
                </div>
            ))}
        </div>
    );
}

export const getStaticProps = async () => {
    const brochureRes = await fetchAPI("/brochure", {
        populate: "*",
    });

    return {
        props: {
            brochure: brochureRes.data,
        },
    };
};
