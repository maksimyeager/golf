import Banner from "../components/Banner";
import bannerImg from "../assets/banner/destinations-2.jpeg";
import { useParams } from "react-router-dom";
import { destinations } from "../services";
import { Link } from "react-router-dom";
import { HiMapPin } from "react-icons/hi2";
import { client, urlFor } from "../../sanity";
import { useState, useEffect } from "react";

const Destination = () => {
    const { destination } = useParams();
    const [loading, setLoading] = useState(true);
    const [destinationOffers, setDestinationOffers] = useState();

    const findDestination = destinations.find(
        (item) => item.path === destination
    );

    useEffect(() => {
        client
            .fetch(
                '*[_type == "destinationOffer"  && key == $destination]{title, image, location, price, slug}',
                { destination }
            )
            .then((data) => {
                setDestinationOffers(data);
                setLoading(false);
            });
    }, [destination]);
    console.log(destinationOffers);

    return (
        <>
            <Banner title={findDestination.name} imageUrl={bannerImg} />
            <section className="section">
                {!loading && (
                    <div className="container">
                        {findDestination.desc && (
                            <div className="offers__desc">
                                {findDestination.desc.map((item, index) => (
                                    <p key={index}>{item}</p>
                                ))}
                            </div>
                        )}

                        <div className="offers__wrapper">
                            {destinationOffers.map((item, index) => (
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
                                                alt=""
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
                )}
            </section>
        </>
    );
};

export default Destination;
