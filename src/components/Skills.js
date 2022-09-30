import { useState } from "react";
import { useGlobalContext } from "./Context";
import skillsdata from "../Data/skills";


const Skills = () => {
    
  const { skillsRef } = useGlobalContext();

  return (
    <div>
      <div
        id="skills"
        ref={skillsRef}
        className=" container mx-auto my-8 w-full pt-4 pb-4 pl-4 pr-2  sm:flex sm:flex-row sm:justify-between"
      >
        <div className="w-100 sm:w-1/3 grid grid-cols-1 place-content-center ">
          <span className="text-5xl text-center pb-10">SKILLS</span>
        </div>

        <div className="sm:w-2/3 grid grid-cols-3 justify-items-center items-center gap-x-4 gap-y-8">
          {skillsdata.map((skill) => {
            return (
              <div key={skill.id} id={skill.id}>
                {skill.icon}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;