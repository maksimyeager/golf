import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import bannerImg from "../assets/banner/destinations.jpeg";
import image2 from "../assets/image-2.jpeg";
import { destinations } from "../services";

const Destinations = () => {
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
                                            <img src={image2} alt="" />
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
