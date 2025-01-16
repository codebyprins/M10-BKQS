import '../../App.css';
import './footer.css';
import React from 'react';

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="card">
              <h5>Shop</h5>
              <ul>
                <li><a href="" className="text-white">Projecten</a></li>
              </ul>
            </div>
            <div className="card">
              <h5>Contact</h5>
              <p>Tel: 0612345678</p>
              <p>KVK: 12345678</p>
              <p>BTW: NL123456789B01</p>
            </div>
            <div className="card">
              <form className="Contact-form" action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value="e95cf616-2a31-402e-b258-6fc37e82f0e7" />
                <div>
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div>
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div>
                  <label htmlFor="message">Message:</label>
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
}

export default Footer;

