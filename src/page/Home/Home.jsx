import AboutMe from "./aboutMe/AboutMe";
import Banner from "./banner/Banner";
import ContactMe from "./contactMe/ContactMe";
import Portfolio from "./portfolio/portfolio";
import Skills from "./skills/Skills";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Skills/>
            <AboutMe/>
            <Portfolio/>
            <ContactMe/>
        </div>
    );
};

export default Home;