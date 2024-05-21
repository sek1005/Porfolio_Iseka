import { Link } from "react-router-dom";
import "./contact.scss";

function Contact() {
  return (
    <section id="contact" className="containercontact">
      <div className="text">
          <p>Vous souhaitez me contacter</p>
          </div>
          <div>
           <Link to="mailto:sephecya@gmail.com">
          <button> Ecrivez -moi</button>
        </Link>
      </div>
    </section>
  );
}
export default Contact;
