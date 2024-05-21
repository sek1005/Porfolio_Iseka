
import Card from "../components/Card";
import Projects from "../components/Projects";
import Title from "../components/Title";
// import Card from "../components/Card";
import  './home.scss';
import { Helmet } from "react-helmet";

const Home= () => {
    return (
        <>
            <Helmet>
                <title>Accueil | ISeka</title>
                <meta name="description" content="Accueil du site Iseka" />
            </Helmet>
            <section className=" d-flex align-items-center justify-content-evenly">
                <article>
                    <Title title="Bienvenue" />
                    < Card/>
                    <Title title="Mes projets" />
                    <Projects />
                </article>
            </section>
        </>

    );
};
export default Home;