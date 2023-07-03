import AboutMe from "./aboutMe/AboutMe";
import Banner from "./banner/Banner";
import ContactMe from "./contactMe/ContactMe";
import Skills from "./skills/Skills";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Skills/>
            <AboutMe/>
            <ContactMe/>
        </div>
    );
};

export default Home;