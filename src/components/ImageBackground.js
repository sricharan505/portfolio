import { HiExternalLink } from 'react-icons/hi'
import { SiGithub } from "react-icons/si";

const ImageBackground = ({image,heading,description,github,url}) => {



    return (
      <div id="imgbg" className="border">
        <div id="divheader">
          <span>{heading}</span>
        </div>
        <div id="bgdiv" className="">
          <img src={image} alt="project"></img>
          <div id="desc" className="flex items-center justify-end">
            <span>{description}</span>
          </div>
        </div>
        <div id="divfooter">
          {github && (
            <a href={github} target="_blank" rel="noreferrer">
              <SiGithub />
            </a>
          )}
          {url && (
            <a href={url} target="_blank" rel="noreferrer">
              <HiExternalLink></HiExternalLink>
            </a>
          )}
        </div>
      </div>
    );
}

export default ImageBackground;