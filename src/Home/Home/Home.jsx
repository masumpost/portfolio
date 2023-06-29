import AboutMe from "../../Components/AboutMe";
import Contact from "../../Components/Contact";
import Cover from "../../Components/Cover";
import Footer from "../../Components/Footer";
import Resume from "../../Components/Resume";

const Home = () => {
    return (
        <div>
            <Cover></Cover>
            <AboutMe></AboutMe>
            <Resume></Resume>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;