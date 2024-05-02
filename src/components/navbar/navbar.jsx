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
                    Tahri moussa
                </motion.span>
                <div className="social">
                    <a href="#">
                        <img src="/icons8-linkedin-48.png" alt="" />
                    </a>
                    <a href="#">
                        <img src="/icons8-github-32.png" alt="" />
                    </a>

                </div>
            </div>
        </div>
    );
};

export default Navbar;