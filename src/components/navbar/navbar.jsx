import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <div className="navbar">

            <Sidebar />
            <div className="wrapper">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                </motion.span>
                <div className="social">
                    <a href="#">
                        <img src="https://e7.pngegg.com/pngimages/796/374/png-clipart-linkedin-linkedin.png" alt="" />
                    </a>
                    <a href="#">
                        <img src="https://banner2.cleanpng.com/20180605/zry/kisspng-fynydd-llc-logo-github-organization-andrew-scott-5b16e57c5a0c08.6997461415282271963688.jpg" alt="" />
                    </a>

                </div>
            </div>
        </div>
    );
};

export default Navbar;