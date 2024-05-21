/* eslint-disable react/prop-types */

import { motion } from 'framer-motion';
import "./title.scss";

const titleVariants = {
    hidden: {
        opacity: 0,
        transition: {
            staggerChildren: 0.1,
        },
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const letterVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.2,
        },
    },
};

const Title = ({ title }) => {
    return (
        <motion.div
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            className="containerTitle"
        >
            {title.split('').map((char, index) => (
                char !== ' ' ? (
                    <motion.span className="title" key={index} variants={letterVariants} style={{ display: 'inline-block' }}>
                        {char}
                    </motion.span>
                ) : (
                    <span key={index} style={{ display: 'inline-block' }}>&nbsp; &nbsp;</span>
                )
            ))}
        </motion.div>
    );
};

export default Title;
