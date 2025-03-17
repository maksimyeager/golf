import { PiMapPinFill } from "react-icons/pi";
import offer1 from "../assets/offers/offer-1.jpeg";
import offer2 from "../assets/offers/offer-2.jpeg";
import offer3 from "../assets/offers/offer-3.jpeg";
import { client, urlFor } from "../../sanity";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const OfferPage = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [offer, setOffer] = useState([]);

    useEffect(() => {
        client
            .fetch(
                '*[_type == "destinationOffer"  && slug.current == $id][0]{title, titleTrans, image, location, price, description, slug}',
                { id }
            )
            .then((data) => {
                setOffer(data);
                setLoading(false);
            });
    }, []);

    return (
        <div className="offer-page">
            {!loading && (
                <div className="container">
                    <div className="offer-page__wrapper">
                        <div className="offer-page__wrapper-top">
                            <div className="offer-page__img">
                                <img
                                    src={
                                        offer.image
                                            ? urlFor(offer.image).url()
                                            : null
                                    }
                                    alt=""
                                />
                            </div>
                            <div className="offer-page__images">
                                <div className="offer-page__images-block">
                                    <img src={offer2} alt="" />
                                </div>
                                <div className="offer-page__images-block">
                                    <img src={offer1} alt="" />
                                </div>
                                <div className="offer-page__images-block">
                                    <img src={offer3} alt="" />
                                </div>
                                <div className="offer-page__images-block">
                                    <p>+10 images</p>
                                    <div className="offer-page__images-block--overlay"></div>
                                    <img src={offer2} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="offer-page__wrapper-bottom">
                            <div className="offer-page__info">
                                <div className="offer-page__data">
                                    <div className="offer-page__title">
                                        {offer.title}
                                    </div>
                                    <div className="address">
                                        <PiMapPinFill size={18} />
                                        {offer.location}
                                    </div>
                                </div>
                                <div className="price__info">
                                    <div className="price__desc">From</div>
                                    <div className="price">£1849</div>
                                </div>
                            </div>
                            <div className="marks">
                                <div className="mark">1 in 12 FREE</div>
                                <div className="mark">
                                    20% off Drinks & Top Tracer
                                </div>
                                <div className="mark">FREE Callaway Driver</div>
                            </div>
                        </div>
                    </div>
                    <div className="offer-page__desc">
                        {offer.description.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default OfferPage;
