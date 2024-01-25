import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
  };

  return (
    <div>
      

      <h1 className="form-title">Kontakta oss</h1>

      <form className="form" onSubmit={handleSubmit}>
        <label className="name">
          Namn:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label className="email">
          E-post:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label className="message">
          Meddelande:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </label>

        <button className="send-btn" type="submit" >
          <NavLink to="/confirmed">Skicka</NavLink>
        </button>

      </form>


      <div className="about">
        <h1 className="about-title">Om oss</h1>
        <p className="about-text">
          Vi är en ledande leverantör av elektronik. Vårt uppdrag är att erbjuda
          högkvalitativa, prisvärda produkter som förbättrar och förenklar
          vardagen. Vi är stolta över att erbjuda ett brett sortiment av
          produkter som passar alla behov och budgetar. Vi är engagerade i att
          erbjuda exceptionell kundservice och ett brett sortiment av produkter
          för att möta våra kunders olika behov. Vårt team är dedikerat till att
          ge dig den bästa möjliga upplevelsen när du handlar hos oss. Vi ser
          fram emot att betjäna dig! Grundat 2022, har vi snabbt vuxit och
          blivit ett betrodd namn inom elektronikindustrin. Vi är engagerade i
          att erbjuda exceptionell kundservice och ett brett sortiment av
          produkter för att möta våra kunders olika behov. Vårt team är
          dedikerat till att ge dig den bästa möjliga upplevelsen när du handlar
          hos oss. Vi ser fram emot att betjäna dig!
        </p>
      </div>
      
    </div>

    
  );
}
export default ContactForm;
