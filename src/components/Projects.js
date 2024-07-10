import React from 'react';

const Projects = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if(element) element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="projects" className="hero-section">
            <div className="hero-content">
                <h1>Hi, I'm Yasar Arabath A.</h1>
                <p>Senior Software Engineer & Web Developer</p>
                <button onClick={() => scrollToSection('hero')}>View My Work</button>
            </div>
        </section>
    );
};

export default Projects;