import { Routes, Route } from "react-router-dom";

import ScrollToTop from "./utils/scrollToTop";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Destinations from "./pages/Destinations";
import OurPros from "./pages/OurPros";
import Blog from "./pages/Blog";
import BlogPage from "./pages/BlogPage";
import GroupTours from "./pages/GroupTours";
import Destination from "./pages/Destination";
import Tour from "./pages/Tour";
import CustomizeTours from "./pages/CustomizeTours";
import ProPage from "./pages/ProPage";

import "./scss/app.scss";
import OfferPage from "./pages/OfferPage";

const App = () => {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path={"/"} element={<Layout />}>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/offers"} element={<Offers />} />
                    <Route path={"/offer/:id"} element={<OfferPage />} />
                    <Route path={"/destinations"} element={<Destinations />} />
                    <Route
                        path={"/destination/:destination"}
                        element={<Destination />}
                    />
                    <Route path={"/tour"} element={<Tour />} />
                    <Route path={"/our-pros"} element={<OurPros />} />
                    <Route path={"/pro"} element={<ProPage />} />
                    <Route path={"/blog"} element={<Blog />} />
                    <Route path={"/blog-page/:id"} element={<BlogPage />} />
                    <Route path={"/group-tours"} element={<GroupTours />} />
                    <Route
                        path={"/customize-tours"}
                        element={<CustomizeTours />}
                    />
                </Route>
            </Routes>
        </>
    );
};

export default App;
