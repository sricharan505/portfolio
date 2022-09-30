import { useGlobalContext } from "./Context";

const Experience = () => {

  const { experienceRef } = useGlobalContext();

  return (
    <div ref={experienceRef} id="experience" className="container">
      <span className="text-5xl text-center pb-10">Experience</span>
    </div>
  );
};

export default Experience;
