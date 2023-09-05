import React from "react";
import "./Home.css"; // Import your CSS file
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();

  const redirectToAbout = () => {
    navigate("/about"); // Redirect to the About page
  };

  return (
    <div className="home-container">
      <h1 className="header">Welcome to SkyDrive Innovations</h1>
      <p className="subheader">
        Revolutionizing Transportation Beyond Earth's Limits
      </p>

      <div className="content">
        <p>
          At SkyDrive Innovations, we are pioneers in the world of interstellar
          travel. Our mission is to turn your wildest dreams of exploring space
          into a reality, and we're doing it in style with our cutting-edge
          SpaceDrive vehicles.
        </p>

        <p>
          Imagine cruising the galaxies, gliding through asteroid fields, and
          soaring above distant planets, all from the comfort of your own
          spacecraft. Our state-of-the-art SpaceDrive cars make it possible.
        </p>

        <p>
          Key Features of our SpaceDrive cars:
          <ul>
            <li>Advanced Anti-Gravity Propulsion System</li>
            <li>Zero-Gravity Cabin Experience</li>
            <li>Interstellar Navigation Technology</li>
            <li>Luxurious Space Lounge Interior</li>
            <li>Customizable Celestial Routes</li>
          </ul>
        </p>

        <p>
          Whether you're a space enthusiast, an explorer at heart, or simply
          seeking the ultimate adventure, SkyDrive Innovations has a SpaceDrive
          just for you. Discover the endless possibilities of space travel and
          take the leap into the cosmos with us.
        </p>

        <button
          className="cta-button"
          onClick={redirectToAbout}
        >
          Contact Our Sales
        </button>
      </div>
    </div>
  );
};
