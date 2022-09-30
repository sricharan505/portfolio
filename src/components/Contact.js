import { useGlobalContext } from "./Context";

const Contact = () => {

  const { contactRef } = useGlobalContext();

  return (
    <>
      <div id="contact" ref={contactRef} className="container py-5">
        <span className="text-5xl text-center pb-10">Contact</span>
      </div>
    </>
  );
};

export default Contact;
