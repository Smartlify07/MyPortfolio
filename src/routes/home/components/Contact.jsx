import { FaGithub, FaMedium, FaTwitter } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const Contact = () => {
  return (
    <section className="py-10 flex flex-col justify-center w-10/12 min-h-screen">
      <h1 className="text-lg uppercase mb-10">let&apos;s talk 👋</h1>
      <p className="text-2xl mb-10 md:w-10/12 self-center font-medium text-[#222] text-center">
        Looking to boost your brand&apos;s presence on the web? Want to enhance
        your website&apos;s design or drive more traffic? Need a website or web
        app to showcase your brand?
      </p>

      <a
        href="http://t.me/Smartlify"
        className="my-10 text-white text-center text-xl mt-5 font-medium w-[250px] self-center bg-[#080808] py-3 px-3 rounded-md"
      >
        Let&apos;s do it
      </a>

      <h1 className="self-center mb-5 text-2xl">Catch me on</h1>

      <div className="flex self-center items-center gap-10">
        <a target="_blank" href="https://x.com/Smartlify01">
          <FaX className="size-8" />
        </a>
        <a target="_blank" href="https://medium.com/@smartlify09">
          <FaMedium className="size-8" />
        </a>
        <a target="_blank" href="https://github.com/Smartlify07">
          <FaGithub className="size-8" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
