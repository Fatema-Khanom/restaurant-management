//import Bannar from "./Banner/Banner";
import Banner from "./Banner/Banner";
import ContactUs from "./ContactUs/ContactUs";
import OurFeatures from "./OurFeatures/OurFeatures";
import TopFood from "./TopFood/TopFood";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopFood></TopFood>
            <OurFeatures></OurFeatures>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;