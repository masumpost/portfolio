import { Outlet } from "react-router-dom";
import AboutMe from "../../Components/AboutMe";
import Contact from "../../Components/Contact";
import Footer from "../../Components/Footer";
import MyWork from "../../Components/MyWork";
import Resume from "../../Components/Resume";

const Home = () => {
    return (
        <div>
            <Outlet></Outlet>
            <AboutMe></AboutMe>
            <Resume></Resume>
            <MyWork></MyWork>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;