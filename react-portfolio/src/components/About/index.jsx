import React, { useEffect, useState } from 'react';
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const cvUrl = process.env.PUBLIC_URL + '/MyCv.pdf'; // Rename CV to avoid conflict

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1 className="about">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <h2 className="line">Newly Qualified Front-End Developer</h2>
        <p className="intro">
          <ul>
            <li>Passionate about continuous learning and collaboration in dynamic environments.</li>
            <li>Completed over 200 hours of structured bootcamp training.</li>
            <li>Proficient in JavaScript, Node.js, React.js, CSS, HTML, and Netlify.</li>
            <li>Eager to tackle web development and design challenges.</li>
            <li>Committed to improving user experiences through thoughtful design.</li>
          </ul>
        </p>
        <div className="cv-link">
          <a href={cvUrl} download="MyCV" target="_blank" rel="noopener noreferrer">
            <button className="cv-btn">My CV</button>
          </a>
        </div>
      </div>

      <div className="stage-cube-cont">
        <div className="cubespinner">
          {/* Font awesome icons */}
          <div className="face1">
            <FontAwesomeIcon icon={faAngular} color="#DD0031" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
