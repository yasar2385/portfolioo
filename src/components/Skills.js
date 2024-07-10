import React from 'react';
import MultiCarousel from './MultiCarousel';
import react from '../icons/react.png'
import angular from '../icons/angular-400.png'
import python from '../icons/python_400.png'
import java from '../icons/java-400.png'
import css from '../icons/css_480.png'
import html from '../icons/html_400.png'
import node from '../icons/nodejs.png'
import ps from '../icons/powershell-400.png'

export const scrollToSection = (id) => {
    console.log("scrollToSection");
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

const SkillIcon = ({ name, icon, style }) => (
  <div className="skill-icon">
    <img src={icon} alt={name} style={style} />
    <p>{name}</p>
  </div>
);

const Skills = () => {
  const skillItems = [   
    <SkillIcon name="React" style={{ height: 400, width: 400 }} icon={react} />,
    <SkillIcon name="Angular" icon={angular} />,
    <SkillIcon name="NodeJS" icon={node} style={{ height: 400, width: 400 }} />,
    <SkillIcon name="Java" icon={java}  />,
    <SkillIcon name="Python" icon={python} />,
    <SkillIcon name="Powershell" icon={ps} />,
    <SkillIcon name="HTML" icon={html}  />,
    <SkillIcon name="CSS" icon={css} style={{ height: 400, width: 400 }} />,    
    // Add more skills as needed
  ];

  return (
    <section className="skills" id="skills">
      <h2 className=''>My Skills</h2>
      <MultiCarousel items={skillItems} itemsPerSlide={2} />
      <button onClick={() => scrollToSection('hero')}>Goto Top</button>
      <button onClick={() => scrollToSection('contact')} className='' style={{marginLeft:'2rem'}}>Goto Next</button>
    </section>
  );
};

export default Skills;