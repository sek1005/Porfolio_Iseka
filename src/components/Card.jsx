/* eslint-disable react/no-unescaped-entities */
import photo from "/profil.png";
import "./card.scss";
import { motion, useMotionValue } from "framer-motion";
import cv from "../assets/img/doc/CV SEKA INES ALTERNANCE.pdf";
import framer from "../assets/img/framer-motion.svg";
import { Link } from "react-router-dom";

const Card = () => {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const handleDownload = () => {
    // Crée un lien vers le fichier à télécharger
    const downloadLink = document.createElement("a");
    downloadLink.href = cv;
    downloadLink.setAttribute("download", "CV SEKA INES ALTERNANCE.pdf");

    // Simulation d'un clic sur le lien pour déclencher le téléchargement
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  return (
    <motion.div
      className="portrait"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{ rotateX: rotateX, rotateY: rotateY }}
      onHoverStart={() => {
        rotateX.set(0);
        rotateY.set(0);
      }}
      onHoverEnd={() => {
        rotateX.set(0);
        rotateY.set(0);
      }}
      onMouseMove={(event) => {
        // Calculer la rotation en fonction de la position de la souris
        const rect = event.currentTarget.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const mouseX = event.clientX - rect.left - centerX;
        const mouseY = event.clientY - rect.top - centerY;
        rotateX.set((mouseY / centerY) * 12); // Ajustez la valeur 10 selon votre préférence de sensibilité
        rotateY.set((-mouseX / centerX) * 12); // Ajustez la valeur 10 selon votre préférence de sensibilité
      }}
    >
      <section className="headerTitle">
        <img className="imgPortrait" src={photo} alt="Portrait" />
        <div className="boxbtn">
          <Link to="/about" onClick={(e) => e.stopPropagation()}>
            <button>En savoir plus</button>
          </Link>
          <button className="btn " onClick={handleDownload}>
            Télécharger mon CV
          </button>
        </div>
      </section>
      <section className="title">
        <h1>Ines seka</h1>
        <h2 className="subtitle">Développeuse Javascript</h2>
      </section>
      <h2 className="mt20">Technologies</h2>
      <p className="description">
        Voici une liste des technologies que j'utilise lors de la réalisation de
        mes projets
      </p>
      <section className="skills">
        <article className="type">
          <h3 className="typeTitle">Front-End</h3>
          <div className="line"></div>
          <ul className="logo">
            <li className="containerLogo mb10">
              <i className="fa-brands fa-html5"></i>
              <p>Html</p>
            </li>

            <li className="containerLogo mb10">
              <i className="fa-brands fa-sass"></i>
              <p>Sass</p>
            </li>
            <li className="containerLogo mb10">
              <i className="fa-brands fa-js"></i>
              <p>Javascript</p>
            </li>
            <li className="containerLogo mb10">
              <i className="fa-brands fa-react"></i>
              <p>ReactJs</p>
            </li>
            <li className="containerLogo mb10">
              <i className="fa-brands fa-bootstrap"></i>
              <p>Bootstrap</p>
            </li>
            <li className="containerLogo mb10">
              <img src={framer} alt="" style={{ width: "25px" }} />
              <p>Framer-Motion</p>
            </li>
          </ul>
        </article>
        <article className="type">
          <div className="mb20">
            <h3 className="typeTitle">Back-end</h3>
            <div className="line"></div>
            <ul className="logo">
              <li className="containerLogo">
                <i className="fa-brands fa-node"></i>
                <p>NodeJs</p>
              </li>
              <li className="containerLogo">
                <i className="fa-solid fa-database"></i>
                <p>MySql</p>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="typeTitle">Autre</h3>
            <div className="line"></div>
            <ul className="logo">
              <li className="containerLogo">
                <i className="fa-brands fa-github"></i>
                <p>GitHub</p>
              </li>
            </ul>
          </div>
        </article>
      </section>
    </motion.div>
  );
};
export default Card;
