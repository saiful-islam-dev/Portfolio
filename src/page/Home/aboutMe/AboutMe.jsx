/* eslint-disable react/no-unescaped-entities */
import RusemeButton from "../../../component/RusemeButton";
import img from "./../../../assets/My project-1.png";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const AboutMe = () => {
  return (
    <div className="py-8">
      <div className="grid lg:grid-cols-2">
        <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="w-3/5 mx-auto">
          <img className="rounded-xl" src={img} alt="" />
        </div>
        <div data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
          <h1 className="text-2xl font-semibold pt-3">About Me</h1>
          <h2 className="text-3xl font-bold py-4">I'm a Passionate Web Designer</h2>
          <p className="lg:w-4/5 font-semibold text-slate-700 pb-4">Innovative web designer and development enthusiast.I thrive on the art of translating ideas into captivating websites. With an eye for aesthetics and a love for clean code, I breathe life into digital realms. My passion lies in creating intuitive, user-centered designs that leave lasting impressions. Let's embark on a journey where imagination meets functionality, and together, we'll shape the future of the web.</p>
          <button className="btn btn-outline btn-error rounded-3xl">CONTACT ME</button>
          <RusemeButton/>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
