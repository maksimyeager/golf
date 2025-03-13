import Banner from "../components/Banner";
import bannerImg from "../assets/banner/tour.jpeg";
import { Link } from "react-router-dom";
import { HiMapPin } from "react-icons/hi2";
import useGetOffers from "../hooks/useGetOffers";
import { urlFor } from "../../sanity";
import { useTranslation } from "react-i18next";

const Tour = () => {
    const {t} = useTranslation("global")
    const { offers, loading } = useGetOffers();

    return (
        <div>
            <Banner title={t("header.tours")} imageUrl={bannerImg} />
            <section className="section">
                <div className="container">
                    <div className="offers__wrapper">
                        {!loading &&
                            offers.slice(0, 6).map((item, index) => (
                                <div className="offers__block" key={index}>
                                    <Link to={`/offer/${item.slug.current}`}>
                                        <div className="offers__img">
                                            <img
                                                src={
                                                    item.image
                                                        ? urlFor(
                                                              item.image
                                                          ).url()
                                                        : null
                                                }
                                                alt={item.title}
                                            />
                                        </div>
                                        <div className="offers__info">
                                            <div className="offers__data">
                                                <div className="offers__title">
                                                    {item.title}
                                                </div>
                                                <div className="address">
                                                    <HiMapPin size={18} />
                                                    {item.location}
                                                </div>
                                            </div>
                                            <div className="offers__price">
                                                £{item.price}
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Tour;
