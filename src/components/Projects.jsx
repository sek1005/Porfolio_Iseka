import "./projects.scss";
import { motion } from "framer-motion";
import iri from "../assets/img/iri.png";
import advent from "../assets/img/advent.png";
import neomuse from "../assets/video/Neo muse.mp4";

import Cardprojet from "./Cardprojet";
function Projects() {
  const animation = {
      visible: { y: 0, opacity: 1,transition: { duration: 1 } },
      hidden: { y: "100vh", opacity: 0 },
    };

  const projects = [
    {
      video: neomuse,
      title: "NEOmuse",
      git: "https://github.com/sek1005/NEOMUSE",
      link: "https://tella.video/neo-muse-7d2a",
      description:
        "Galerie d’Art NeoMuse avec présentations d'œuvres, d'artistes et une interface administrateur",
      stack: ["React","CSS3","Express","MySql"],
    },
    {
      img: advent,
      title: "Advent-calendar",
      git: "https://github.com/LucieMena/Hackathon-advent-calendar",
      description:
        "Activités familiales pour occuper les temps libres pendant les fêtes entre noël et le nouvel an",
      stack: ["ReactJS", "HTML5", "CSS3", "Git"],
    },
    {
      img: iri,
      title: "IRIYAJO",
      git: "https://github.com/WildCodeSchool/0923-paris-js-p2-apiAnime",
      description:
        "Plateforme qui classe et répertorie des séries animées en se servant de l'API REST Jikan",
      stack: ["HTML5", "CSS3", " ReactJS", " Git"],
    },
  ];
  return (
    <>
      <motion.div
        className="projects"
        initial="hidden"
        animate="visible"
        variants={animation}
      >
        {projects.map((project, index) => (
          <Cardprojet
            key={index}
            video={project.video}
            img={project.img}
            title={project.title}
            git={project.git}
            link={project.link}
            description={project.description}
            stack={project.stack}
            animation={project.animation}
          />
        ))}
      </motion.div>
    </>
  );
}

export default Projects;
