import { Link } from "react-router-dom";
import { projects } from "../../../data/project";
import { FaGithub, FaRegEye } from "react-icons/fa";
const Projects = () => {
  return (
    <section className="py-20 min-h-screen  flex flex-col items-center w-10/12">
      <h1 className="text-lg font-normal mb-8 self-start uppercase ">
        Projects
      </h1>

      <div className="flex w-full  flex-col gap-6">
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

const Project = ({
  title,
  description,
  languages,
  frameworks,
  inProgress,
  otherTools,
  displayImage,
  githubLink,
  siteLink,
}) => {
  return (
    <div className="flex flex-col justify-around gap-10 py-6 border w-full items-center lg:flex-row">
      <div className="w-full lg:w-6/12  rounded-md ">
        <img
          src={displayImage}
          className="w-full transition-all hover:scale-105"
          alt=""
        />
      </div>

      <div className="flex flex-col gap-3 w-10/12 lg:w-6/12">
        <h1 className="text-xl font-medium">{title}</h1>
        <p className="text-base text-gray-500 lg:w-10/12">{description}</p>

        <div className="flex items-center gap-3 mb-3">
          {otherTools.map((tool) => (
            <p
              key={tool}
              className="bg-green-100  py-2 px-2 rounded-sm text-base font-normal"
            >
              {tool}
            </p>
          ))}

          {frameworks.map((framework) => (
            <p
              key={framework}
              className="bg-green-100  py-2 px-2 rounded-sm text-base font-normal"
            >
              {framework}
            </p>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link to={siteLink}>
            <FaRegEye className="size-8" />
          </Link>

          <Link to={githubLink}>
            <FaGithub className="size-8" />
          </Link>
        </div>

        {inProgress && <p className="text-lg font-medium">WIP 🚧</p>}
      </div>
    </div>
  );
};

export default Projects;
