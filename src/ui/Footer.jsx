import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaGoogle,
  FaYoutube,
  FaTelegram,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Hobbycue</h4>
          <ul>
            <li>About Us</li>
            <li>Our Services</li>
            <li>Work with Us</li>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>How Do I</h4>
          <ul>
            <li>Sign Up</li>
            <li>Add a Listing</li>
            <li>Claim Listing</li>
            <li>Post a Query</li>
            <li>Add a Blog Post</li>
            <li>Other Queries</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>Listings</li>
            <li>Blog Posts</li>
            <li>Shop / Store</li>
            <li>Community</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Social Media</h4>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaPinterestP />
            <FaGoogle />
            <FaYoutube />
            <FaTelegram />
            <FaEnvelope />
          </div>

          <h4>Invite Friends</h4>
          <div className="invite">
            <input type="email" placeholder="Email ID" />
            <button>Invite</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">© Purple Cues Private Limited</div>
    </footer>
  );
}
