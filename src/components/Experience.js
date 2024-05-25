import { useGlobalContext } from "./Context";
import { TabView, TabPanel } from 'primereact/tabview';
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

  experiences.map((exp)=>{
    console.log(miltoyear((exp.end_date ? Date.parse(exp.end_date) : Date.now()) - Date.parse(exp.start_date)))
  })

  return (
    <div
      ref={experienceRef}
      id="experience"
      className="container mx-auto my-8 w-full pt-4 pb-4 pl-2 sm:pl-4 pr-2 flex flex-col justify-center"
    >
      <span className="text-5xl text-center pb-10 w-full">Experience</span>

      <br></br>

      <TabView>
        {
          experiences.map((exp)=>{
            return(
              <TabPanel header={exp.s_company}>
                <div className={experiences.length > 1 ? "col-span-3 pl-5" : "col-span-3 pl-10"}>
                  <span className="text-xl font-bold">{exp.company}</span>
                  <br></br>
                  <span className="text-sm">
                    {miltoyear((exp.end_date ? Date.parse(exp.end_date) : Date.now()) - Date.parse(exp.start_date))}
                  </span>
    
                  <ul className={exp.positions.length <= 1 ? "singleitemlist ml-5" : "positionlines ml-5"}>
                    {
                      exp.positions.map((pos, index) => {
                        return (
                          <li key={index}>
                            <span className="text-lg">{pos.designation}</span>
                            <br></br>
                            <span className="pl-7 text-sm">{pos.period}</span>
                          </li>
                        );
                      })
                    }
                  </ul>
                  <div>
                    <span className="font-bold block mb-4">Summary :</span>
                    
                    <div className="h-[40vh] overflow-auto border-t-[1px]">
                      {
                        exp['description'].map((desc)=>{
                          return(
                            <div className="ml-6 mt-4 pb-4 border-b-2 border-dotted">
                              <span><span className="font-bold">Project :</span> {desc['subheading']}</span>
                              <ul className="exp-point-list">
                                {
                                  desc['points'].map((point)=>{
                                    return (
                                      <li>{point}</li>
                                    )
                                  })
                                }
                              </ul>
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                  <div>
                    <ul className="desc ml-9">
                      {/* {experiences[selJob].description.map((des, index) => (
                        <li key={index}>{des}</li>
                      ))} */}
                    </ul>
                  </div>
                </div>
              </TabPanel>
            )
          })
        }
        
      </TabView>
      
    </div>
  );
};

export default Experience;
