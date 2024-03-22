import React, { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

// Import your images

import projectImage1 from "../../assets/images/project1.png";
import projectImage2 from "../../assets/images/project2.png";
import projectImage3 from "../../assets/images/project3.png";
import projectImage4 from "../../assets/images/project4.png";

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [portfolio, setPortfolio] = useState([]); // State to hold project data

    useEffect(() => {
        // Simulated project data
        const projectData = [
            {
                name: "Project 1",
                description: "Created a portfolio layout using the Bootstrap CSS framework",
                image: projectImage1,
                url: "https://ruslena.github.io/Bootstrap-Portfolio/"
            },
            {
                name: "Project 2",
                description: "Сity weather forecast for 5 days",
                image: projectImage2,
                url: " https://ruslena.github.io/City-Weather/"
            },
            {
                name: "Project 3",
                description: "A command-line app for generating an HTML webpage",
                image: projectImage3,
                url: "https://github.com/RusLena/TeamGen-OOP.git"
            },
            {
                name: "Project 4",
                description: "A team-based project to collaboratively develop an interactive frontend application",
                image: projectImage4,
                url: " https://ruslena.github.io/meow-finder/"
            },
           
        ];

        setPortfolio(projectData);

        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    }, []);

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className="image-box" key={idx}>
                                <img
                                    src={port.image}
                                    className="portfolio-image"
                                    alt={port.name} />
                                <div className="content">
                                    <p className="title">{port.name}</p>
                                    <h4 className="description">{port.description}</h4>
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.url)}
                                    >View</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }

    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                <div>{renderPortfolio(portfolio)}</div>
            </div>

        </>
    );
}

export default Portfolio;