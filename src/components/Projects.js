import { useGlobalContext } from "./Context";
import projects from "../Data/projects";
import ImageBackground from "./ImageBackground";

const Project = () => {
  const {projectsRef} = useGlobalContext();

  return (
    <div>
      <div
        id="projects"
        ref={projectsRef}
        className="container mx-auto py-8 flex flex-col justify-center"
      >
        <span className="text-5xl text-center pb-10">PROJECTS</span>


        <div className="grid grid-cols-1 gap-4 justify-items-center p-2 lg:grid-cols-2 ">
          {projects.map((project) => {
            return (
              <ImageBackground
                key={project.id}
                image={project.media[0]}
                heading={project.name}
                description={project.description}
                github={project.github}
                url={project.url}
              ></ImageBackground>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project