import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Socials from "./components/Socials";

const Home = () => {
  return (
    <main className="flex flex-col font-raleway items-center justify-center  ">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
};

export default Home;
