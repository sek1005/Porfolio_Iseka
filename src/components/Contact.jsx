import { Link } from "react-router-dom";
import "./contact.scss";

function Contact() {
  return (
    <section id="contact" className="containercontact">
      <div>
        <Link to="mailto:sephecya@gmail.com">
          <button>CONTACTEZ -MOI</button>
        </Link>
      </div>
    </section>
  );
}
export default Contact;
