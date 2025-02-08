import Banner from "../components/Banner";
import bannerImg from "../assets/banner/destinations-2.jpeg";
import { useParams } from "react-router-dom";
import { destinations } from "../services";
import { PiMapPinFill } from "react-icons/pi";
import image1 from "../assets/image-1.jpeg";

const Destination = () => {
    const { destination } = useParams();
    console.log(destination);

    const title = destinations.find((item) => item.path === destination);
    console.log(title);

    return (
        <>
            <Banner title={title.name} imageUrl={bannerImg} />
            <section className="section">
                <div className="container">
                    <div className="offers__wrapper">
                        <div className="offers__block">
                            <div className="offers__img">
                                <img src={image1} alt="" />
                            </div>
                            <div className="offers__info">
                                <div className="offers__data">
                                    <div className="offers__title">
                                        Special Offer 1
                                    </div>
                                    <div className="address">
                                        <PiMapPinFill size={18} />
                                        City, Address
                                    </div>
                                </div>
                                <div className="offers__price">£1849</div>
                            </div>
                        </div>
                        <div className="offers__block">
                            <div className="offers__img">
                                <img src={image1} alt="" />
                            </div>
                            <div className="offers__info">
                                <div className="offers__data">
                                    <div className="offers__title">
                                        Special Offer 1
                                    </div>
                                    <div className="address">
                                        <PiMapPinFill size={18} />
                                        City, Address
                                    </div>
                                </div>
                                <div className="offers__price">£1849</div>
                            </div>
                        </div>
                        <div className="offers__block">
                            <div className="offers__img">
                                <img src={image1} alt="" />
                            </div>
                            <div className="offers__info">
                                <div className="offers__data">
                                    <div className="offers__title">
                                        Special Offer 1
                                    </div>
                                    <div className="address">
                                        <PiMapPinFill size={18} />
                                        <span>City, Address</span>
                                    </div>
                                </div>
                                <div className="offers__price">£1849</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Destination;
