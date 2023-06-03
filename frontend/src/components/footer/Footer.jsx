import React from 'react';
import './footer.css';
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div class="footer-about">
          <h4>About Us<p>-----------------------</p></h4>
          <p><a rel="nofollow" href="http://localhost:3000/about"className="link">About Travelista</a></p>
          
          <p><a className="link" href="http://localhost:3000/contact">Contact Us</a></p>
          <p><a rel="nofollow" href="https://thetravelista.com.au/page/termsandconditions" className="link">Copyright</a></p>
          <p><a rel="nofollow" href="https://thetravelista.net/disclaimer/" className="link">Privacy Policy</a></p>
        </div>

        <div class="footer-resources">
          <h4>Book Your Trip<p>--------------------------------------</p></h4>
          <p><a href="https://www.booking.com/" className="link">Accommodation</a></p>
          <p><a href="https://www.in.cheapflights.com/" className="link">Cheap Flights</a></p>
          <p><a href="https://www.bajajallianz.com/travel-insurance-online.html" className="link">Travel Insurance</a></p>
        </div>

        <div class="footer-section">
          <h4>Books And Courses<p>------------------------------------------------</p></h4>
          <p><a href="https://superstarblogging.nomadicmatt.com/superstar-business-masterclass/" className="link">Blogging Mentorship</a></p>
          <p><a href="https://superstarblogging.nomadicmatt.com/superstar-writing-masterclass/" className="link">Writing Mentorship</a></p>
          <p><a href="https://rememberyourtravels.com/" className="link">My Travel Journal</a></p>
        </div>

        <div className="footer-social">
          <h4>Follow Us<p>-------------------------</p></h4>
          <ul className="social-media">
            <li>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-policy">
          
        </div>
        
      <div className="footer-bottom">
        <p>&copy; Copyright © 2023 · Travelista Travel Site</p>
      </div>
    </footer>
  );
};
