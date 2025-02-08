import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import "./Testimonial.css";

export default function Testimonials() {
  return (
    <div className="testimonial-container">
      <div className="testimonial-card">
        <h2 className="testimonial-title">Testimonials</h2>

        <div className="quote-icon">
          <FaQuoteLeft
            className="icon"
            style={{
              color: "black",
            }}
          />
        </div>

        <p className="testimonial-text">
          In a fast-growing and ever-changing city like Bangalore, it sometimes
          becomes very difficult to find or connect with like-minded people.
          Websites like hobbycue.com provide a great service that helps me get
          in touch with, communicate, connect, and exchange ideas with other
          dancers. It also offers the extra benefit of finding products and
          services that I can avail, which I can be assured are of great
          quality, as they come recommended by the hobbycue community. To have
          discussions, gain visibility, and explore various hobbies and
          activities in my city—all under one roof—is an excellent idea, and I
          highly recommend it.
        </p>

        <div className="user-info">
          <div className="user-details">
            <h3 className="user-name">Shubha Nagarajan</h3>
            <p className="user-role">Classical Dancer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
