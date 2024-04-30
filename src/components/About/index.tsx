import './styles.css'
import Image from 'next/image';

const About = () => {
  return (
    <>
    <h1 className='text-4xl text-[#2C008A] font-bold oxygen-mono ml-20'>&lt;Sobre/&gt;</h1>
      <div className="box flex items-center justify-evenly p-10" id="about">
        <div className="flex justify-center">
          <Image
          className='border-solid	border-2 rounded-full border-black m-6'
          src='/pfp.svg'
          width={300}
          height={300}
          alt='Imagem de perfil'
          />
        </div>
      <div className="w-3/6 text-black border-solid	border p-10 border-black rounded-lg shadow-[11px_11px_rgba(0,0,0,1)]">
        <h1 className="montserrat text-xl font-bold mb-5 text-[#2C008A]" >Quem sou eu?</h1>
        <p className="poppins text-lg font-medium leading-7">
          Meu nome é Celeste e estou me formando em Análise e Desenvolvimento de
          Sistemas na FIAP! Sou desenvolvedora full-stack com paixão por
          front-end e interesse nas áreas de Data science, IA e Machine
          Learning. Adoro soluções criativas e desafiadoras, sempre busco fazer
          projetos para me manter por dentro das melhores práticas e
          tecnologias!
        </p>
      </div>
      </div>
    </>
  );
};

export default About;
