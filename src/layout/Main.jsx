import { Outlet } from "react-router-dom";
import Navbar from "../page/Share/Navdar/Navbar";
import Footer from "../page/Share/Footer/Footer";


const Main = () => {
    return (
        <div className="bg-slate-200 -z-50">
            <Navbar/>
            <div className="px-12 md:min-h-[calc(100vh-150px)]">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Main;