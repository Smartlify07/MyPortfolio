import { motion } from "framer-motion";
const Hero = () => {
  const headerText = "Hi, I'm Obinna";
  return (
    <section className="flex flex-col min-h-screen items-center justify-center  w-10/12">
      <header className=" w-full flex flex-col gap-3">
        <div className="flex items-center">
          {headerText.split("").map((item, index) => (
            <motion.span
              className="text-4xl lg:text-6xl font-medium inline"
              initial={{ opacity: 0, y: 2 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                delay: index * 0.2,
              }}
              key={index}
            >
              {item === " " ? "\u00A0" : item}{" "}
            </motion.span>
          ))}
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 3 }}
          className="font-bold text-6xl  lg:text-8xl mb-5 "
        >
          Frontend Developer <span className="text-green-800">{"</>"}</span>
        </motion.h1>
      </header>

      <p className="text-xl text-green-800  w-full   ">
        I build intuitive and seamless user interfaces and user experience on
        the web.
      </p>
    </section>
  );
};

export default Hero;
