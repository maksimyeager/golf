const CustomizeTours = () => {
    return (
        <div className="customize-tours">
            <div className="container">
                <h2 className="customize-tours__title">
                    Free Custom Golf Travel Quote - Golf Trip Information
                </h2>
                <p className="customize-tours__subtitle">
                    Complete the form below to receive a free golf travel quote
                    and golf destination information.
                </p>
                <form action="" className="customize-tours__form">
                    <div className="customize-tours__block">
                        <h2 className="customize-tours__block-title">
                            Contact Information
                        </h2>
                        <div className="customize-tours__form-row">
                            <div className="customize-tours__form-block">
                                <label htmlFor="">Name</label>
                                <input type="text" placeholder="John Dou" />
                            </div>
                            <div className="customize-tours__form-block">
                                <label htmlFor="">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="example@gmail.com"
                                />
                            </div>
                        </div>
                        <div className="customize-tours__form-row">
                            <div className="customize-tours__form-block">
                                <label htmlFor="">Phone</label>
                                <input type="phone" />
                            </div>
                        </div>
                    </div>
                    <div className="customize-tours__block">
                        <h2 className="customize-tours__block-title">
                            Travel Information
                        </h2>
                        <div className="customize-tours__form-row">
                            <div className="customize-tours__form-block">
                                <label htmlFor="">Destination</label>
                                <input
                                    type="text"
                                    placeholder="Where do you want to go?
"
                                />
                            </div>
                            <div className="customize-tours__form-block">
                                <label htmlFor="">Dates</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="customize-tours__form-row">
                            <div className="customize-tours__form-block">
                                <label htmlFor="">Number People</label>
                                <p>
                                    Number of potential golfers/non golfers or
                                    if couples or all buddies
                                </p>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="customize-tours__form-col">
                            <div className="customize-tours__form-block">
                                <label htmlFor="">Courses/Rounds</label>
                                <p>
                                    Provide trip details, number of rounds,
                                    desired courses, tee times, etc
                                </p>
                                <textarea></textarea>
                            </div>
                        </div>
                        <div className="customize-tours__form-col">
                            <div className="customize-tours__form-block">
                                <label htmlFor="">Lodging Needed</label>
                                <p>
                                    Provide trip details for lodging
                                    accommodations needed. (Type, configuration,
                                    etc)
                                </p>
                                <textarea></textarea>
                            </div>
                        </div>
                    </div>
                    <button type="submit">Request Info</button>
                </form>
            </div>
        </div>
    );
};

export default CustomizeTours;
