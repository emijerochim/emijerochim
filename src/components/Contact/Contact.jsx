import "./contact.scss";

function Contact(props) {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h3 className="contact-title">Construyamos algo juntos</h3>
        <p>¿Tenés un proyecto?</p>
        <p>
          Llená el formulario y te cuento cómo te puedo ayudar a hacerlo realidad.
        </p>
        <button type="button" onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfvut0LL6N5LN4IYh3fARGsu18EqBx0Cws2co81Ve7kYudrbg/viewform')}>CONTACTO</button>
      </div>
    </section>
  );
}

export default Contact;
