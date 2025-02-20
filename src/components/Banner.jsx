const Banner = ({ title, imageUrl }) => {
    return (
        <div
            className="banner"
            style={{
                padding: "120px 0",
                borderRadius: "82px",
                margin: "0 15px",
                backgroundImage: `linear-gradient(
            90deg,
            rgba(3, 31, 2, 0.7) 0%,
            rgba(76, 43, 1, 0.609) 46.71%,
            rgba(102, 102, 102, 0) 100%
        ),
        url(${imageUrl})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <h1 className="title-1">{title}</h1>
        </div>
    );
};
export default Banner;
