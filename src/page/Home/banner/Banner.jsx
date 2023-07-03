import p_img from "../../../assets/My project.png";
import RusemeButton from "../../../component/RusemeButton";
/* eslint-disable react/no-unescaped-entities */
const Banner = () => {
  return (
   <section id="banner">
    <div className="lg:flex justify-between items-center">
      <div className="px-4 lg:ml-3">
        <div className="font-bold pt-8">
          <p className="text-2xl lg:text-3xl text-black">
            HI, <span className="text-orange-500">I'm</span>
          </p>
          <h2 className="text-5xl lg:text-8xl text-slate-800 font-bold py-5">
            Saiful Islam
          </h2>
          <h1 className="text-2xl lg:text-3xl">I,m Web Developer</h1>
          <p className="lg:w-96 py-6">
            From France, Paris. I have rich experience in web design, also I am
            good at wordpress. I love to talk with you about our unique.
          </p>
          <RusemeButton/>
        </div>
      </div>
      <div className="lg:w-6/12 w-full">
        <div className="lg:right-44 lg:top-52 right-28 bottom-56 p-4 shadow-sm bg-orange-500 w-44 h-44 lg:w-96 lg:h-96 rounded-full absolute z-0"></div>
        <img className="rounded-b-full relative z-10" src={p_img} alt="" />
      </div>
    </div>
   </section> 
  );
};   

export default Banner;
