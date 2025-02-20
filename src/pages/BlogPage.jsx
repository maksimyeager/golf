import { FaCalendar } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";

const BlogPage = () => {
    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    url: window.location.href,
                });
                console.log("Успешно поделились!");
            } catch (error) {
                console.log("Ошибка при попытке поделиться:", error);
            }
        } else {
            alert("Ваш браузер не поддерживает функцию поделиться.");
        }
    };

    return (
        <div className="blog-page">
            <div className="container">
                <div className="blog-page__top">
                    <div className="blog-page__image"></div>
                    <div className="blog__page__info">
                        <div className="blog-page__info-top">
                            <h2>Blog 1</h2>
                            <div className="blog-page__settings">
                                <p className="data">
                                    <FaCalendar /> <span>Thur 17 Nov 2022</span>
                                </p>
                                <button
                                    onClick={handleShare}
                                    className="share-button"
                                >
                                    <IoIosShareAlt color="#fff" />
                                </button>
                            </div>
                        </div>
                        <div className="blog-page__info-bottom">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="blog-page__bottom">
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit, sed quia consequuntur magni dolores eos
                        qui ratione voluptatem sequi nesciunt. Neque porro
                        quisquam est, qui dolorem ipsum quia dolor sit amet,
                        consectetur, adipisci velit, sed quia non numquam eius
                        modi tempora incidunt ut labore et dolore magnam aliquam
                        quaerat voluptatem.
                    </p>
                    <div className="blog-page__image"></div>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
