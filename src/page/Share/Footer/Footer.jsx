import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Footer = () => {
  return (
    <div>
      <footer data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className="footer footer-center p-4 bg-slate-900 text-white">
        <div>
          <p className="text-lg">Copyright © 2023 - All right reserved by safiul Islam</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
