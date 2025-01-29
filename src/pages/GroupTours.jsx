import Banner from "../components/Banner";
import bannerImg from "../assets/banner/tours.jpeg";
import { FaPhoneAlt } from "react-icons/fa";

const GroupTours = () => {
    return (
        <>
            <Banner title={"Group Tours"} imageUrl={bannerImg} />
            <div className="group-tours">
                <div className="container">
                    <div className="group-tours__wrapper">
                        <div className="group-tours__info">
                            <h2 className="group-tours__title">
                                Why Book Your Golf Group with Us?
                            </h2>
                            <p className="group-tours__subtitle">
                                Golfers heading out on their next golf holiday
                                or break with a group or society will be well
                                versed to consult Your Golf Travel. Our team is
                                made up of dedicated, some may even say
                                obsessed, golfers. As a result of working for a
                                golf travel company, the responsibility of
                                organising our own societies and groups lands at
                                our door.
                            </p>
                            <p className="group-tours__subtitle">
                                So, you'll get the very best advice for where to
                                go from both our personal and professional
                                experience!
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
export default GroupTours;
