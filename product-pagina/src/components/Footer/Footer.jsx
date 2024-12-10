import React from "react";
import './Footer.css'; // Vergeet niet de CSS toe te voegen voor extra styling

const Footer = () => {
  return (
    <footer className="footer bg-primary text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>F.A.Q.</h5>
            <ul>
              <li><a href="#about" className="text-white">Over ons</a></li>
              <li><a href="#info" className="text-white">Algemene informatie</a></li>
              <li><a href="#shipping" className="text-white">Verzending en retour</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Shop</h5>
            <ul>
              <li><a href="#projects" className="text-white">Projecten</a></li>
            </ul>
          </div>
          <div className="col-md-4 contact-info">
            <h5>Contact</h5>
            <p>Tel: 0612345678</p>
            <p>Email: <a href="mailto:example@email.com" className="text-white">example@email.com</a></p>
            <p>KVK: 12345678</p>
            <p>BTW: NL123456789B01</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
