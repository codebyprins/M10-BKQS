import React from "react";
import './Footer.css';
import '../../App.css';

function Footer () {
  return (
    <>
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4 card">
            <h5>F.A.Q.</h5>
            <ul>
              <li><a href="#about" className="text-white">Over ons</a></li>
              <li><a href="#info" className="text-white">Algemene informatie</a></li>
              <li><a href="#shipping" className="text-white">Verzending en retour</a></li>
            </ul>
          </div>
          <div className="col-md-4 card">
            <h5>Shop</h5>
            <ul>
              <li><a href="#projects" className="text-white">Projecten</a></li>
            </ul>
          </div>
          <div className="col-md-4 card">
            <h5>Contact</h5>
            <p>Tel: 0612345678</p>
            <p>KVK: 12345678</p>
            <p>BTW: NL123456789B01</p>
          </div>
          <div className="col-md-4 card">
          <form class="Contact-form" action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value="e95cf616-2a31-402e-b258-6fc37e82f0e7"/>
                
                <div>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required/>
                </div>

                <div>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required/>
                </div>

                <div>
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                </div>

                <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer
