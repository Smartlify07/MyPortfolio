const Hero = () => {
  return (
    <section className="flex flex-col min-h-screen items-center justify-center  w-10/12">
      <header className=" w-full flex flex-col gap-3">
        <h1 className=" text-4xl lg:text-6xl font-medium">
          Hi, I&apos;m Obinna
        </h1>

        <h1 className="font-bold text-6xl  lg:text-8xl mb-5 ">
          Frontend Developer <span className="text-green-800">{"</>"}</span>
        </h1>
      </header>

      <p className="text-xl text-green-800  w-full   ">
        I build intuitive and seamless user interfaces and user experience on
        the web.
      </p>
    </section>
  );
};

export default Hero;
