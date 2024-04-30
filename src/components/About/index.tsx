import "./styles.css";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <>
      <h1 className="text-4xl text-[#592e6d] font-bold oxygen-mono ml-20">
        &lt;Sobre/&gt;
      </h1>
      <div className="box flex items-center justify-evenly p-10" id="about">
        <div className="flex flex-col items-center">
          <Image
            className="rounded-xl"
            src="/pfp.svg"
            width={300}
            height={300}
            alt="Imagem de perfil"
          />
          <Link href={"mailto:celestetanakaa@gmail.com"} className="inline-block">
            <div className="p-5 hover:scale-105 transition-transform">
              <h1 className="text-lg font-semibold text-black hover:none">Entre em contato!</h1>
              <div className="w-full h-2 bg-[#592e6d]  rounded-full -translate-x-2"></div>
              <div className="w-full h-2 bg-[#51cacc]  rounded-full translate-x-2"></div>
            </div>
          </Link>
        </div>
        <div className="w-3/6 text-black border-solid	border p-10 border-[#bdbdbd] rounded-xl ">
          <h1 className="montserrat text-2xl font-bold mb-5 text-[#51cacc] ">
            Quem sou eu?
          </h1>
          <p className="poppins text-lg font-medium leading-7">
            Olá! Me chamo Celeste e sou estudante de <span className="text-[#cb6869]">Análise e Desenvolvimento de Sistemas</span> na FIAP e dev
            <span className="text-[#cb6869]"> full-stack</span> com um toque
            especial por <span className="text-[#cb6869]">front-end</span>.
            Atualmente estou aprendendo mais sobre
            <span className="text-[#cb6869]"> back-end</span> e
            <span className="text-[#cb6869]"> ciência de dados</span>!
            <br />
            <br />
            Fui introduzida a área em 2021 com cursos de <span className="text-[#cb6869]">HTML</span>, <span className="text-[#cb6869]">CSS</span>, <span className="text-[#cb6869]">Javascript</span> e
            <span className="text-[#cb6869]"> Vue.js</span> pela Udemy em 2021 durante a pandemia. Desde então me
            apaixonei por desenvolvimento e resolvi me aprofundar mais começando
            minha graduação.
            <br />
            <br />
            Busco criar experiências digitais que encantem e inspirem, adoro
            soluções criativas e desafiadoras, sempre busco projetos para me
            manter por dentro das melhores práticas e tecnologias!
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
