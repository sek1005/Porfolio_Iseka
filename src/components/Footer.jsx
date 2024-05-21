import "./footer.scss";
import { Link } from "react-router-dom";
function Footer () {
    return (
        <footer className="footer">
            <p className="'name'">©2024 Ines SEKA</p>

            <nav>
                <ul className={`d-flex`}>
                    <li className="mx20">
                        <Link target="_blank" to="http://www.linkedin.com/in/ines-sek">
                            <i className="fa-brands fa-linkedin i"></i>
                        </Link>
                    </li>

                    <li className="mx20">
                        <Link to="mailto:sephecya@gmail.com">
                            <i className="fa-solid fa-envelope"></i>
                        </Link>
                    </li>

                    <li className="mx20">
                        <Link target="_blank" to="https://github.com/sek1005">
                            <i className="fa-brands fa-github"></i>
                        </Link>
                    </li>

                </ul>
            </nav>
            <p className="mentions">Mentions légales</p>

        </footer>
    );
}
export default Footer;