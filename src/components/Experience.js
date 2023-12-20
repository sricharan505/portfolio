import { useGlobalContext } from "./Context";
import experiences from "../Data/experience";
import { useState } from "react";

const Experience = () => {

  const { experienceRef } = useGlobalContext();

  const [selJob, setSelJob] = useState(1);

  //console.log(experiences[selJob]);
  const miltoyear = (milsec) => {
    let years = Math.floor(milsec / (365*24*60*60*1000))
    milsec = milsec % (365*24*60*60*1000)
    let months = Math.floor(milsec / (30 * 24 * 60 * 60 * 1000));
    return ` ${years} ${years > 1 ? "Years" : "Year"} ${months} ${
      months > 1 ? "Months" : "Month"
    } `;
  }

  return (
    <div
      ref={experienceRef}
      id="experience"
      className="container mx-auto my-8 w-full pt-4 pb-4 pl-2 sm:pl-4 pr-2 flex flex-col justify-center"
    >
      <span className="text-5xl text-center pb-10 w-full">Experience</span>

      <br></br>
      <div className="grid grid-cols-3 px-1 py-3 border">
        
        <div className={experiences.length > 1 ? "col-span-3 pl-5" : "col-span-3 pl-10"}>
          <span className="text-xl">{experiences[selJob].company}</span>
          <br></br>
          <span className="text-sm">
            {miltoyear(Date.now() - Date.parse(experiences[selJob].startdate))}
          </span>

          <ul className={experiences[selJob].positions.length <= 1 ? "singleitemlist ml-5" : "positionlines ml-5"}>
            {experiences[selJob].positions.map((pos, index) => {
              return (
                <li key={index}>
                  <span className="text-lg">{pos.designation}</span>
                  <br></br>
                  <span className="pl-7 text-sm">{pos.period}</span>
                </li>
              );
            })}
          </ul>
          <div>
            <ul className="desc ml-9">
              {experiences[selJob].description.map((des, index) => (
                <li key={index}>{des}</li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Experience;
