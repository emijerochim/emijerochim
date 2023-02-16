import "./contact.scss";
import SocialMedia from "../SocialMedia/SocialMedia";

function Contact(props) {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h3 className="contact-title">I'm open to work</h3>
        <p>
          I'm looking for new opportunities to work on new projects, helping and
          learning from a proactive team.
        </p>
        <p>
          If you're interested in working with me don't hesitate to contact me
        </p>
        <SocialMedia />
      </div>
    </section>
  );
}

export default Contact;
