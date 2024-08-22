const About = () => {
  return (
    <section className="py-20 h-screen flex flex-col justify-center w-10/12   font-raleway">
      <h1 className="text-lg font-normal mb-5 text-[#333] uppercase">
        About me
      </h1>

      <p className="text-3xl tracking-wide mb-5 lg:w-9/12 text-[#08080b] font-normal">
        I focus on driving business growth by creating user interfaces that not
        only attract more traffic to your site but also provide a lasting,
        satisfying experience for users.
      </p>

      <p className="text-2xl tracking-tight lg:w-10/12 mb-5  text-[#070707] font-normal">
        I build tailored solutions for{" "}
        <span className="text-green-800 font-medium">small businesses</span> and
        <span className="text-green-800 font-medium"> individuals</span> aiming
        to elevate their brand and increase their brand&apos;s{" "}
        <span className="text-green-800 font-medium">visibility</span> on the
        web.
      </p>

      <button className="bg-[#080808] rounded-md py-4 px-3 w-[200px] self-start text-[#fdfdfd] font-medium">
        Let&apos; talk!
      </button>
    </section>
  );
};

export default About;
