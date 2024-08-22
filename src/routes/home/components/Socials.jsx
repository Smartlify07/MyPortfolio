import { FaX } from "react-icons/fa6";

const Socials = () => {
  return (
    <section className="flex py-20 min-h-screen justify-center flex-col items-center w-10/12">
      <h1 className="text-lg uppercase font-normal self-start mb-5">
        Catch me On
      </h1>

      <div className="flex items-center gap-5">
        <a
          className="text-xl font-medium text-black"
          href="https://x.com/Smartlify01"
        >
          <FaX size={7} className="inline" /> Twitter
        </a>
      </div>
    </section>
  );
};

export default Socials;
