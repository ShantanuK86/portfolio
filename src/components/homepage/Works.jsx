import React from 'react';
import projectsData from '/src/data.js'; // Adjust the path as necessary
import Projects from "../ui/Projects";
import Heading from "../ui/Heading";

export default function Works({ forwardedRef }) {
 return (
    <section
      ref={forwardedRef}
      id="works"
      className="nav-change overflow-hidden my-[10%]"
    >
      <Heading title="Projects" />
      <div className="mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12">
        {projectsData.map((project, index) => (
          <div key={index} className={`col-span-1 ${index % 2 === 0 ? 'md:col-span-12' : 'md:col-span-7 md:pt-16'}`}>
            <Projects
              link={project.link}
              img={project.imageSrc}
              alt={`${project.title} mockup`}
              name={project.title}
              type={project.description}
              year={project.year}
              tools={project.tools}
            />
          </div>
        ))}
      </div>
    </section>
 );
}
