import Banner from "../components/Banner";
import bannerImg from "../assets/banner/tours.jpeg";
import { FaPhoneAlt } from "react-icons/fa";

const Tournaments = () => {
    return (
        <>
            <Banner title={"Tournaments"} imageUrl={bannerImg} />
            <div className="group-tours">
                <div className="container">
                    <div className="group-tours__wrapper">
                        <div className="group-tours__info">
                            <h2 className="group-tours__title">
                                You Choose The Tournament & We'll Take Care Ff
                                The Rest
                            </h2>
                            <p className="group-tours__subtitle">
                                Whether it’s attending The Open or taking a trip
                                overseas to walk the fairways at Augusta
                                National at the Masters, don’t miss out on all
                                the drama and excitement; it’s time to indulge
                                your golfing passion and attend that bucket-list
                                event you’ve been dreaming of.
                            </p>
                            <p className="group-tours__subtitle">
                                Here at Golfbreaks, we make it our mission to
                                provide you with the ultimate tournament
                                experience. Whichever golf tournament you
                                choose, our dedicated team of experts are on
                                hand to guide you every step of the way and help
                                you plan a memorable trip of a lifetime. With a
                                vast range of bespoke packages, we’ve got every
                                step of your trip covered so all you have to do
                                is just relax and soak up the surroundings -
                                we’ll handle the rest.
                            </p>
                            <p className="group-tours__subtitle">
                                What are you waiting for? Get in touch with our
                                team today and witness incredible, historic
                                moments unfold before your eyes!
                            </p>
                        </div>
                        <div className="group-tours__contacts">
                            <div className="group-tours__contacts-info">
                                <div className="group-tours__number">
                                    050 545 56 85
                                </div>
                                <div className="group-tours__contacts-desc">
                                    Contact us
                                </div>
                            </div>
                            <div className="group-tours__contacts-img">
                                <FaPhoneAlt fontSize={40} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Tournaments;
