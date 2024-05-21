/* eslint-disable react/prop-types */
import "./cardprojet.scss";
import { motion } from 'framer-motion';
import { useState } from "react";
import { Link } from 'react-router-dom';

function Cardprojet ({ img, video, title, stack, link, git, description }) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleCardClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <motion.div
            className="container_Projet"
            onClick={handleCardClick}
            initial={{ rotateY: 0 }}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div

                style={{ display: isFlipped ? 'none' : 'flex' }}
                className="cardFront"
                
            >
                {img && <img src={img} alt={title} />}
                {video && (
                    <video id="video" autoPlay loop muted >                                 
                        <source src={video} type="video/mp4" />
                    </video>
                )}
                <h2 className=" sm:text-sm lg:text-2xl mt20 mb10">{title}</h2>
            </motion.div>
            <motion.div

                initial={{ opacity: 0 }}
                animate={{ opacity: isFlipped ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                style={{ display: isFlipped ? 'flex' : 'none' }}
                className="cardBack" >
                <div>


                </div>
                <p className="description">{description}</p>
                <div className="line"></div>
                <p> Technologies utilisées</p>
                <ul className="stack">
                    {stack.map((oneStack, index) => (
                        <li key={index}>{oneStack},</li>
                    ))}
                </ul>
                <div className="links">
                    <Link target="_blank" to={git}>
                        <button>
                            <i className="fa-brands fa-github"></i>
                            GitHub
                        </button>
                    </Link>
                    {link && (
                        <Link target="_blank" to={link}>
                            <button>
                                <i className="fa-solid fa-link"></i> Lien
                            </button>
                        </Link>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
}

export default Cardprojet;
