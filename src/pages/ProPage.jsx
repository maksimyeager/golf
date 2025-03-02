import { FaCalendar } from "react-icons/fa";
import { PiMapPinFill } from "react-icons/pi";
import { useState, useEffect } from "react";
import { client, urlFor } from "../../sanity";
import { useParams } from "react-router-dom";

const ProPage = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [pro, setPro] = useState();

    useEffect(() => {
        client
            .fetch(
                `*[_type == "ourPros" && slug.current == $id][0]{
                    title, 
                    image,
                    price,
                    location,
                    date, 
                    description, 
                }`,
                { id }
            )
            .then((data) => {
                setPro(data);
                setLoading(false);
            })
            .catch(console.error);
    }, [id]);
    return (
        <div className="pro-page">
            {!loading && (
                <div className="container">
                    <div className="pro-page__wrapper">
                        <div className="pro-page__image">
                            <img
                                src={pro.image ? urlFor(pro.image).url() : null}
                                alt={pro.title}
                            />
                        </div>
                        <div className="pro-page__info">
                            <h2 className="pro-page__title">{pro.title}</h2>
                            <div className="marks">
                                <div className="mark">1 in 12 FREE</div>
                                <div className="mark">
                                    20% off Drinks & Top Tracer
                                </div>
                                <div className="mark">FREE Callaway Driver</div>
                            </div>
                            <div className="pro-page__data">
                                <p className="data">
                                    <FaCalendar />{" "}
                                    <span>
                                        {new Date(
                                            pro.date
                                        ).toLocaleDateString()}
                                    </span>
                                </p>
                                <div className="address">
                                    <PiMapPinFill size={18} />
                                    {pro.location}
                                </div>
                            </div>
                            <div className="pro-page__info-bottom">
                                <div className="our-pros__price-desc">
                                    per person
                                </div>
                                <div className="our-pros__price">
                                    £{pro.price}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pro-page__desc">
                        {pro.description.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
export default ProPage;
