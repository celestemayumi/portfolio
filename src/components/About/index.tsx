import "./styles.css";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 1", "start 0.25"],
  });
  return (
    <>
      <h1
        className="text-4xl text-[#592e6d] font-bold oxygen-mono ml-20"
      >
        &lt;Sobre/&gt;
      </h1>
      <div className="flex items-center justify-evenly p-10">
        <div className="flex flex-col items-center">
          <Image
            className="rounded-full"
            src="/pfp.svg"
            width={300}
            height={300}
            alt="Imagem de perfil"
          />
          <Link href={"mailto:celestetanakaa@gmail.com"}>
            <div className="p-5 mt-5 hover:scale-105 transition-transform">
              <h1 className="text-2xl font-semibold text-black hover:none">
                Entre em contato!
              </h1>
              <div className="w-full h-2 bg-[#592e6d] rounded-full -translate-x-2"></div>
              <div className="w-full h-2 bg-[#51cacc] rounded-full translate-x-2"></div>
            </div>
          </Link>
        </div>
        <div className="w-3/6 text-black border-solid p-10 rounded-xl bg-[#ebebeb]">
          <h1 className="montserrat text-2xl font-bold text-black">
            Quem sou eu?
          </h1>

          <div className="w-1/3 h-1 bg-[#592e6d]  rounded-full"></div>
          <div className="w-1/3 h-1 mb-5 bg-[#51cacc]  rounded-full translate-x-2"></div>
          <motion.p
            style={{ opacity: scrollYProgress }}
            ref={element}
            className="poppins text-lg font-medium leading-7 text-justify"
            id="about"
          >
            Olá! Me chamo Celeste e sou estudante de
            <span className="text-[#c43b67] font-semibold">
              Análise e Desenvolvimento de Sistemas{" "}
            </span>
            na FIAP e dev
            <span className="text-[#c43b67] font-semibold">
              {" "}
              full-stack
            </span>{" "}
            com um toque especial por{" "}
            <span className="text-[#c43b67] font-semibold">front-end</span>.
            Atualmente estou aprendendo mais sobre
            <span className="text-[#c43b67] font-semibold"> back-end</span> e
            <span className="text-[#c43b67] font-semibold">
              {" "}
              ciência de dados
            </span>
            !
            <br />
            <br />
            Fui introduzida a área em 2021 com cursos de
            <span className="text-[#c43b67] font-semibold"> HTML</span>,
            <span className="text-[#c43b67] font-semibold"> CSS</span>,
            <span className="text-[#c43b67] font-semibold"> Javascript</span> e
            <span className="text-[#c43b67] font-semibold"> Vue.js</span> pela
            Udemy em 2021 durante a pandemia. Desde então me apaixonei por
            desenvolvimento e resolvi me aprofundar mais começando minha
            graduação.
            <br />
            <br />
            Busco criar experiências digitais que encantem e inspirem, adoro
            soluções criativas e desafiadoras, sempre busco projetos para me
            manter por dentro das melhores práticas e tecnologias!
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default About;
