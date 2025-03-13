import Banner from "../components/Banner";
import bannerImg from "../assets/banner/our-pros.jpeg";
import pro from "../assets/pro.jpeg";
import { Link } from "react-router-dom";
import { client, urlFor } from "../../sanity";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const OurPros = () => {
    const { t } = useTranslation("global");

    const [ourPros, setOurPros] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        client
            .fetch(
                '*[_type == "ourPros"]{title, image, shortDescription, slug, price}'
            )
            .then((data) => {
                setOurPros(data);
                setLoading(false);
            });
    }, []);

    return (
        <>
            <Banner title={t("header.our-pros")} imageUrl={bannerImg} />
            <div className="our-pros">
                {!loading && (
                    <div className="container">
                        {ourPros.map((item, index) => (
                            <div className="our-pros__block" key={index}>
                                <Link to={`/pro/${item.slug.current}`}>
                                    <div className="our-pros__image">
                                        <img
                                            src={
                                                item.image
                                                    ? urlFor(item.image).url()
                                                    : null
                                            }
                                            alt={item.title}
                                        />
                                    </div>
                                    <div className="our-pros__info">
                                        <div className="our-pros__info-top">
                                            <h2>{item.title}</h2>
                                            <p>{item.shortDescription}</p>
                                        </div>
                                        <div className="our-pros__info-bottom">
                                            <div className="our-pros__price-desc">
                                                per person
                                            </div>
                                            <div className="our-pros__price">
                                                £{item.price}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default OurPros;
