import Banner from "../components/Banner";
import bannerImg from "../assets/banner/destinations-2.jpeg";
import { useParams } from "react-router-dom";
import { destinations } from "../services";
import { Link } from "react-router-dom";
import image1 from "../assets/image-1.jpeg";
import { HiMapPin } from "react-icons/hi2";

const Destination = () => {
    const { destination } = useParams();
    console.log(destination);

    const findDestination = destinations.find(
        (item) => item.path === destination
    );
    console.log(findDestination);

    return (
        <>
            <Banner title={findDestination.name} imageUrl={bannerImg} />
            <section className="section">
                <div className="container">
                    {findDestination.desc && (
                        <div className="offers__desc">
                            {findDestination.desc.map((item, index) => (
                                <p key={index}>{item}</p>
                            ))}
                        </div>
                    )}

                    <div className="offers__wrapper">
                        <div className="offers__block">
                            <Link to={"/offer"}>
                                <div className="offers__img">
                                    <img src={image1} alt="" />
                                </div>
                                <div className="offers__info">
                                    <div className="offers__data">
                                        <div className="offers__title">
                                            Special Offer 1
                                        </div>
                                        <div className="address">
                                            <HiMapPin size={18} />
                                            City, Address
                                        </div>
                                    </div>
                                    <div className="offers__price">£1849</div>
                                </div>
                            </Link>
                        </div>
                        <div className="offers__block">
                            <Link to={"/offer"}>
                                <div className="offers__img">
                                    <img src={image1} alt="" />
                                </div>
                                <div className="offers__info">
                                    <div className="offers__data">
                                        <div className="offers__title">
                                            Special Offer 1
                                        </div>
                                        <div className="address">
                                            <HiMapPin size={18} />
                                            City, Address
                                        </div>
                                    </div>
                                    <div className="offers__price">£1849</div>
                                </div>
                            </Link>
                        </div>
                        <div className="offers__block">
                            <Link to={"/offer"}>
                                <div className="offers__img">
                                    <img src={image1} alt="" />
                                </div>
                                <div className="offers__info">
                                    <div className="offers__data">
                                        <div className="offers__title">
                                            Special Offer 1
                                        </div>
                                        <div className="address">
                                            <HiMapPin size={18} />
                                            City, Address
                                        </div>
                                    </div>
                                    <div className="offers__price">£1849</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Destination;
