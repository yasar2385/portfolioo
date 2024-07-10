import React from 'react';


const About = () => {
    const scrollToSection = (id) => {
        console.log("scrollToSection");
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };
    const downloadResume = () => {
        // Replace with actual resume download logic
        window.location.href = 'resume.pdf';
    };

    return (
        <section id="about" className="about-section">
            <h2>About Me</h2>
            <p>I am a Senior Software Engineer with extensive experience in web development and automation using technologies like React, Angular, PowerShell, and Python.</p>
            <button onClick={downloadResume} style={{ marginLeft: '2rem' }}>Download Resume</button>
            <button onClick={() => scrollToSection('hero')} style={{ marginLeft: '2rem' }}>Goto Top</button>
            <button onClick={() => scrollToSection('skills')} className='' style={{ marginLeft: '2rem' }}>Goto Next</button>
        </section>
    );
};

export default About;
