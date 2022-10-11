import { useEffect, useState } from "react";
import { useGlobalContext } from "./Context";
import contacts from "../Data/contact";

const Contact = () => {
  const { contactRef } = useGlobalContext();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent,setSent] = useState(false);
  const [errormsg, setErrormsg] = useState("");

  const url =
    "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfZ5T1lUSlfa0pgp4paaoQCdRhNTi-A89oC8VcJ0NctLV8f5g/formResponse";

  const submitForm = (e) => {
    e.preventDefault();
    if( email==="" || message==="")
    {
      setErrormsg("Enter the required fields");
    }
    else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)))
    {
      setErrormsg("Enter a proper Email Address");
    }
    else if( message.length < 2)
    {
      setErrormsg("Aleast send a Hi :)");
    }
    else
    {

      let temp = `${url}?entry.138584493=${email}&entry.254726291=${message}`;
  
      fetch(temp, {
        mode: "no-cors",
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
        .then((response) => {
          setSent(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  // console.log(
  //   /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
  // );

  useEffect(()=>{
    if(errormsg==="")
    {
      return;
    }
    const errorinterval = setInterval(() => setErrormsg(""),5000);
    
    return () => clearInterval(errorinterval);
  },[errormsg]);

  return (
    <>
      <div
        id="contact"
        ref={contactRef}
        className="container mx-auto my-8 w-full pt-4 pb-4 pl-2 sm:pl-4 pr-2"
      >
        <div className="text-5xl text-center pb-10">Contact</div>
        {/* grid grid-cols-1 sm:grid-cols-3 sm:auto-cols-max */}
        <div className="sm:flex justify-center justify-items-center">
          <div className="sm:w-96 max-w-md p-3">
            {sent ? (
              <div className="w-full h-full flex justify-center justify-items-center items-center ">
                <svg
                  width="100px"
                  height="100px"
                  className="sent"
                  viewBox="0 -3.5 170 170"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="circle"
                    d="M142.196 30.4125C142.586 30.0637 142.897 29.6356 143.109 29.1567C143.32 28.6778 143.427 28.1592 143.422 27.6357C143.417 27.1122 143.3 26.5959 143.079 26.1213C142.858 25.6467 142.538 25.2248 142.141 24.8838C141.722 24.5249 141.307 24.1678 140.895 23.8127C137.751 21.1093 134.5 18.3102 131.1 15.9225C105.123 -2.36044 78.1316 -2.4633 50.8803 7.23287C26.2068 16.0055 10.3619 33.5563 3.77909 59.3882C-3.56415 88.249 2.86618 113.71 22.9048 135.073C23.4261 135.625 23.9582 136.177 24.4895 136.704C35.2539 147.469 48.6614 154.115 59.2847 158.739C63.8445 160.731 87.2404 163.149 93.5707 162.206C131.19 156.588 155.946 135.37 164.569 99.8725C166.215 92.9194 167.035 85.7962 167.011 78.6508C166.974 71.1466 165.712 63.6988 163.275 56.6012C163.097 56.0703 162.805 55.5851 162.418 55.1805C162.031 54.7759 161.56 54.4618 161.037 54.2606C160.515 54.0595 159.954 53.9764 159.396 54.0171C158.838 54.0579 158.295 54.2216 157.808 54.4965L157.706 54.5547C156.931 54.9984 156.336 55.7005 156.027 56.5381C155.717 57.3757 155.712 58.2954 156.012 59.1364C158.212 65.2371 159.334 71.674 159.327 78.1592C159.251 85.9394 158.198 93.6792 156.192 101.197C150.248 122.8 136.038 138.545 112.75 149.315C89.0741 160.65 55.1215 149.19 46.0879 143.226C36.1031 136.4 27.3663 127.908 20.2596 118.121C9.11418 102.34 6.61369 79.6587 12.6028 58.9229C15.4055 49.3489 20.3036 40.5185 26.9421 33.0722C33.5806 25.6259 41.793 19.7503 50.9838 15.8714C74.8941 5.93474 98.8852 4.18192 122.285 19.0635C125.422 21.061 133.422 27.3424 137.465 30.5501C138.143 31.0882 138.99 31.3691 139.855 31.3432C140.721 31.3172 141.549 30.986 142.194 30.4082L142.196 30.4125Z"
                  />
                  <path
                    id="tick"
                    d="M74.6287 104.313C76.2312 102.79 77.1115 102.019 77.9173 101.177C103.753 74.1855 132.047 49.8851 160.508 25.7727C161.584 24.8619 162.685 23.7 163.958 23.3737C165.493 22.9815 167.996 23.4326 168.682 24.2661C169.133 24.8821 169.418 25.6035 169.509 26.3612C169.601 27.1189 169.496 27.8875 169.206 28.5932C168.537 30.3474 166.907 31.8498 165.429 33.1629C156.607 41.0019 147.538 48.5708 138.872 56.5716C120.756 73.3024 102.756 90.1576 84.8704 107.137C77.0334 114.561 74.0173 114.862 66.8059 106.929C62.0589 101.705 47.7328 84.0973 43.3455 78.5495C42.7256 77.6872 42.1735 76.7781 41.6941 75.8305C40.7045 74.0756 40.0576 72.1419 42.0246 70.7814C44.2158 69.2662 45.7707 70.8473 47.0696 72.4937C48.384 74.1607 49.5048 75.9916 50.9121 77.5713C55.2811 82.4737 69.908 99.1421 74.6287 104.313Z"
                  />
                </svg>
                <br></br>
                <span id="tq_msg">Thank you for the Message!</span>
              </div>
            ) : (
              <form
                action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfZ5T1lUSlfa0pgp4paaoQCdRhNTi-A89oC8VcJ0NctLV8f5g/formResponse"
                method="post"
                className="sm:pr-2"
              >
                <label htmlFor="email">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium ">
                    Email
                  </span>
                  <input
                    type="text"
                    name="entry.138584493"
                    className="text-black mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder="Your Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </label>

                <br></br>

                <label htmlFor="message">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium ">
                    Message
                  </span>
                  <textarea
                    type="text"
                    name="entry.254726291"
                    className="text-black h-48 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 w-full rounded-md sm:text-sm "
                    placeholder="A Message For Me!"
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </label>

                <br></br>
                <br></br>

                <button
                  type="submit"
                  onClick={submitForm}
                  className="border rounded-md px-5 py-2 "
                >
                  Send
                </button>
                <br></br>
                {errormsg ? <label className="text-red-700">{errormsg}</label> : <br></br>}
              </form>
            )}
          </div>

          {/* <div className="w-0.5 border contacts_center"></div> */}

          <div className="hidden px-8 py-8 sm:flex">
            <hr className="vert_hr" />
          </div>

          <div className="max-w-sm flex flex-col justify-center justify-items-center content-center ">
            {contacts.map((contact) => {
              return (
                <button key={contact.id} className="p-1 m-1">
                  <a href={contact.link} target="_blank" rel="noreferrer">
                    <span className="flex justify-center justify-items-center ">
                      <span className="flex items-center content-center pr-2">
                        {contact.name}
                      </span>
                      {contact.icon}
                    </span>
                  </a>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

// onClick = { submitForm };

export default Contact;
