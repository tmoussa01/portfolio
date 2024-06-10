
import './skill.scss';
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};
const Skills = () => {

    const ref = useRef();

    const isInView = useInView(ref, { margin: "-100px" });
    const skills = [
        {
            title: "Frontend",
            skills: [
                {
                    name: "Vuejs",
                    image:
                        "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
                },
                {
                    name: "JavaFx",
                    image:
                        "https://upload.wikimedia.org/wikipedia/fr/c/cc/JavaFX_Logo.png",
                },
                {
                    name: "HTML",
                    image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
                },
                {
                    name: "CSS",
                    image:
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
                },
                {
                    name: "JavaScript",
                    image:
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
                },
                {
                    name: "Bootstrap",
                    image:
                        "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
                }

            ],
        },
        {
            title: "Backend",
            skills: [
                {
                    name: "Node Js",
                    image: "https://nodejs.org/static/images/logo.svg",
                },
                {
                    name: "Java",
                    image: "https://banner2.cleanpng.com/20180715/gzu/kisspng-java-development-kit-software-development-kit-comp-programming-language-icon-5b4b9cb1e74f20.0073080715316819699475.jpg",
                },
                {
                    name: "Spring Boot",
                    image: "https://upload.wikimedia.org/wikipedia/commons/7/79/Spring_Boot.svg",
                },
                {
                    name: "Php",
                    image: "https://www.php.net/images/logos/new-php-logo.svg",
                },
                {
                    name: "Jwt",
                    image: "https://seeklogo.com/images/J/jwt-logo-65D86B4640-seeklogo.com.png",
                },
                {
                    name: "Express Js",
                    image:
                        "https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png"
                },
                {
                    name: "Python",
                    image:
                        "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
                },
                {
                    name: "MySQL",
                    image:
                        "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
                },
                {
                    name: "MongoDB",
                    image:
                        "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
                },
            ],
        },

        {
            title: "Others",
            skills: [
                {
                    name: "Git",
                    image:
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png"
                },
                {
                    name: "GitHub",
                    image:
                        "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
                },
                {
                    name: "VS Code",
                    image:
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
                },
                {
                    name: "Intellij",
                    image:
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/IntelliJ_IDEA_Icon.svg/2048px-IntelliJ_IDEA_Icon.svg.png"
                },
                {
                    name: "Postman",
                    image:
                        "https://cdn.iconscout.com/icon/free/png-256/free-postman-3521648-2945092.png?f=webp"
                },
                {
                    name: "Figma",
                    image:
                        "https://s3-alpha.figma.com/hub/file/1481185752/fa4cd070-6a79-4e1b-b079-8b9b76408595-cover.png"
                },
            ],
        },
    ];
    return (
        <motion.div className="skills-container" id="skills" variants={variants}
            initial="initial"
            ref={ref}
            animate={isInView && "animate"}>
            <div className="skills-wrapper">
                <div className="title">Skills</div>
                <div className="desc">Here are some of the skills I've been working on.</div>
                <div className="skills">
                    {skills.map((skill, index) => (
                        <div className="skill" key={index}>
                            <motion.h2 whileHover={{ color: "rgb(105, 63, 174)" }} className="skill-title">{skill.title}</motion.h2>
                            <div className="skill-list">
                                {skill.skills.map((item, idx) => (
                                    <div className="skill-item" key={idx}>
                                        <img className="skill-image" src={item.image} alt={item.name} />
                                        {item.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Skills;

