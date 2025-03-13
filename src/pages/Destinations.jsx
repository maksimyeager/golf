import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import bannerImg from "../assets/banner/destinations.jpeg";
import destiantion1 from "../assets/destinations/destination-1.jpg";
import { useTranslation } from "react-i18next";
import { getDestinations } from "../services";

const Destinations = () => {
    const { t } = useTranslation("global");

    const destinations = getDestinations(t);
    return (
        <>
            <Banner title={"Destinations"} imageUrl={bannerImg} />
            <section className="section section--destinations">
                <div className="container">
                    <div className="destinations__wrapper">
                        {destinations.map((item, index) => {
                            return (
                                <Link
                                    to={`/destination/${item.path}`}
                                    key={index}
                                >
                                    <div className="destinations__block">
                                        <div className="destinations__img">
                                            <img src={destiantion1} alt="" />
                                            <div className="destinations__img--overlay"></div>
                                        </div>
                                        <div className="destinations__title">
                                            {item.name}
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Destinations;
