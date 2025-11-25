import React from 'react'
import SkillCard from '../components/SkillCard';

const skillItem = [
  {
    imgSrc: "/assets/logos/html5.svg",
    label: "Html5",
    desc: "Front End tool",
  },
    {
    imgSrc: "/assets/logos/css3.svg",
    label: "Css3",
    desc: "User Interface",
  },
    {
    imgSrc: "/assets/logos/javascript.svg",
    label: "Javascript",
    desc: "Logic",
  },  {
    imgSrc: "/assets/logos/react.svg",
    label: "React",
    desc: "Libraray",
  },
    {
    imgSrc: "/assets/logos/tailwindcss.svg",
    label: "Tailwindcss",
    desc: "User Interface",
  },
     {
    imgSrc: "/assets/logos/wordpress.svg",
    label: "Wordpress",
    desc: "Autonation tool",
  },
    {
    imgSrc: "/assets/logos/git.svg",
    label: "git",
    desc: "Control Version",
  },  {
    imgSrc: "/assets/logos/figma.svg",
    label: "Figma",
    desc: "UI/UX",
  },
   {
    imgSrc: "/assets/logos/mongodb.svg",
    label: "MonogoDB",
    desc: "Database",
  },
    {
    imgSrc: "/assets/logos/sass.svg",
    label: "Sass",
       desc: "User Interface",
  },
    {
    imgSrc: "/assets/logos/Framer.svg",
    label: "Framer motion",
    desc: "Animation library",
  },  
  {
    imgSrc: "/assets/logos/threejs.svg",
    label: "ThreeJs",
    desc: "3D graphics library",
  },

];

const Skills = () => {
  return (
    <section className="Skills c-space section-spacing" id="skills">
      <div className="relative c-space ">
        <h2 className="text-heading">More about Skills</h2>

<div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] c-space section-spacing ">
  {skillItem.map(({ imgSrc, label, desc }, key) => (
    <SkillCard
      key={key}
      imgSrc={imgSrc}
      label={label}
      desc={desc}
    />
  ))}
</div>

      </div>
    </section>
  );
};

export default Skills;
