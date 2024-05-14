import projects from "../../data/projects.json";
import Image from "next/image";
import { useScroll, motion } from "framer-motion";
import { useRef } from "react";

const Projects = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["1 5", "0.1 1"]
  })
  return (
    <>
      <div id="projects" className="mt-10">
        <h1 className="text-4xl text-[#592e6d] font-bold oxygen-mono ml-20 mb-16">
          &lt;Projetos/&gt;
        </h1>
        <div className="flex flex-col items-center">
          {projects.map((project, id) => (
            <motion.div
              ref={ref}
              style={{
                scale: scrollYProgress,
                opacity: scrollYProgress
              }}
              className="my-5 rounded-xl flex w-2/3 p-10 items-center bg-[#ebebeb] relative overflow-hidden"
              key={id}
            >
              <div className="ml-10 montserrat w-1/3">
                <h1 className="font-bold text-3xl text-[#592e6d] mb-3">
                  {project.title}
                </h1>
                <p className="text-justify">{project.desc}</p>
                <div className="flex flex-wrap mt-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="mr-1 my-1 px-3 py-1 rounded-full bg-[#51cacc]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="w-2/3">
                <Image
                  src={project.imgSrc}
                  width={1920}
                  height={100}
                  alt="Icone do projeto"
                  className="absolute top-20 -right-40 w-[41rem] rounded-lg shadow-2xl shadow-[#616161] hover:-translate-x-3 hover:translate-y-3 hover:-rotate-2 transition"
                ></Image>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
