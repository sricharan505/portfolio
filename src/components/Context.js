import { createContext, useContext, useState, useRef } from "react";

const AppContext = createContext();
export const ContextProvider = ({children}) => {
  //Navbar
  const [hamclick, setHamclick] = useState(false);

  const menuclick = () => {
    setHamclick((prevState)=> !prevState);
  };

  const scrollitems = (ref) => {

    document
      .querySelector("body")
      .scrollTo({
        behavior: "smooth",
        top:
          ref.current.getBoundingClientRect().top -
          document.getElementById("root").getBoundingClientRect().top
      });

    

    // window.scrollTo({
    //   behavior: "smooth",
    //   top:
    //     document.querySelector("#skills").getBoundingClientRect().top -
    //     document.body.getBoundingClientRect().top
    // });
    
    // if (ref && ref.current) 
    // {
    //   ref.current.scrollIntoView({
    //     behavior: "smooth",
    //     block: "start",
    //     inline: "start",
    //   });
    // }
  };

  //Homepage
  const homepageRef = useRef(null);

  //Projects
  const projectsRef = useRef(null);

  //Skills
  const skillsRef = useRef(null);

  //Experience
  const experienceRef = useRef(null);

  //Contact
  const contactRef = useRef(null);

  //context export
  const exportcontext = {
    //Navabar
    hamclick,
    menuclick,
    scrollitems,

    //Homepage
    homepageRef,

    //Projects
    projectsRef,

    //Skills
    skillsRef,

    //Experience
    experienceRef,

    //Contact
    contactRef,
  };

  return (
    <AppContext.Provider value={exportcontext}>{children}</AppContext.Provider>
  );
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}
