import skills from "../../data/skills.json";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (id: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * id,
    },
  }),
};

const Skills = () => {
  return (
    <>
      <div id="skills" className="mt-10 text-black">
        <h1 className="text-4xl text-[#592e6d] font-bold oxygen-mono ml-20">
          &lt;Skills/&gt;
        </h1>
        <div className="flex flex-row mt-5 p-10">
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, id) => {
              return (
                <motion.div
                  className="skill flex flex-col items-center gap-3"
                  key={id}
                  variants={fadeVariants}
                  initial="initial"
                  whileInView="animate"
                  custom={id}
                >
                  <div className="bg-[#dcdcdc] rounded-full flex items-center justify-center m-3 p-3 w-28 h-28 hover:scale-110 transition-transform">
                    <Image
                      src={skill.imgSrc}
                      width={60}
                      height={50}
                      alt="Icone da tecnologia"
                    ></Image>
                  </div>
                  <p className="font-bold tracking-wide">{skill.title}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
