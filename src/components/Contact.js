import { email, name } from "../data";
import pfp from "../assets/images/pfp.jpg";

const Contact = () => {
  return (
    <section id="contact" className="d-flex flex-column justify-content-center">
      <div className="container text-center">
        <h2>Contact</h2>
        <hr />
        <div className="row align-items-center">
          <div className="col-lg-6">
            <img src={pfp} alt={name} />
          </div>
          <div className="col-lg-6">
            <h3>{name}</h3>
            <a href={`mailto:${email}`}>
              email: <span>{email}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
