import projects from "../../data/projects.json";
import Image from "next/image";

const Projects = () => {
  return (
    <>
      <div id="projects" className="mt-10">
        <h1 className="text-4xl text-[#592e6d] font-bold oxygen-mono ml-20">
          &lt;Projetos/&gt;
        </h1>
        <div className="flex flex-col items-center">
          {projects.map((project, id) => (
            <div
              className="my-5 border border-[#bdbdbd] rounded-xl flex w-2/3 p-10 items-center"
              key={id}
            >
              <div className="w-2/3">
                <Image
                  src={project.imgSrc}
                  width={1920}
                  height={100}
                  alt="Icone do projeto"
                ></Image>
              </div>
              <div className="ml-10 montserrat w-1/3">
                <h1 className="font-bold text-2xl text-[#592e6d]">
                  {project.title}
                </h1>
                <p className="text-justify">{project.desc}</p>
                <div className="flex flex-wrap">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="mr-2 my-1 px-3 py-1 rounded-full bg-[#51cacc]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
