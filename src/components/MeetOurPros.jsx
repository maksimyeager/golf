import { client, urlFor } from "../../sanity";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const MeetOurPros = () => {
    const { t } = useTranslation("global");
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        client.fetch('*[_type == "meetOurPros"]').then((data) => {
            setItems(data);
            setLoading(false);
        });
    }, [items]);

    return (
        <section className="section section--pro">
            <div className="container">
                <h2 className="section__title">Meet Our Pro’s</h2>
                <p className="section__subtitle" style={{ maxWidth: "500px" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                </p>
                {!loading && (
                    <div className="golf-pro__wrapper">
                        {items.map((item, index) => (
                            <div key={index} className="golf-pro__block">
                                <div className="golf-pro__info">
                                    <div className="golf-pro__img">
                                        <img
                                            src={
                                                item.image
                                                    ? urlFor(item.image).url()
                                                    : null
                                            }
                                            alt={item.name}
                                        />
                                    </div>
                                    <div className="golf-pro__data">
                                        <h3>{item.name}</h3>
                                        <p>{item.subtitle}</p>
                                    </div>
                                </div>
                                <p className="golf-pro__desc">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                )}

                <Link to={"/our-pros"} className="link-1">
                    {t("see-more")}
                </Link>
            </div>
        </section>
    );
};

export default MeetOurPros;
