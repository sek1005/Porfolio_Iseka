/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';
import Title from "../components/Title";
import "./about.scss";
import cv from "../assets/img/doc/CV SEKA INES ALTERNANCE.pdf";
import { Helmet } from "react-helmet";

function About() {
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
  const Animation = {
    visible: { y: 0, transition: { duration: 1 } },
    hidden: { y: "100vw" },
  };
  return (
    <>
      <Helmet>
        <title>A propos | Iseka</title>
        <meta name="description" content="A Propos " />
      </Helmet>
      <Title title="A Propos" />
      <section className="sectionAbout">
      <motion.div initial="hidden" animate="visible" variants={Animation}>
        <p>
        Après des années dans le domaine de l'ingénierie agronome, j'ai décidé de me reconvertir en tant que développeuse web. Ce changement découle de ma curiosité naturelle et de mon désir d'approfondir ma compréhension du fonctionnement des technologies numériques. Mes précédentes expériences m'ont permis de développer des compétences en résolution de problèmes et en recherche de solutions, des atouts précieux dans le domaine du développement web.
        </p>
        <p>
          J'allie donc mes capacités techniques et relationnelles pour trouver
          la solution innovante !{" "}
        </p>
        </motion.div> 
      </section>
      <div className="boxbtn">
      <button className="btn " onClick={handleDownload}>
        Télécharger mon CV
      </button>
      </div>
    </>
  );
}
export default About;
