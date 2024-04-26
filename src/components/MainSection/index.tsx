import React from "react";
import './styles.css'
import Image from "next/image";



const MainSection = () => {
  return (
    <section className="flex justify-evenly items-center pt-20 pl-10 pr-10 pb-10 mb-20">
      <div className="content text-black ">
        <p className="scope-one-regular text-3xl">Olá, sou a</p>
        <h1 className="mb-4 text-7xl font-bold work-sans text-[#2C008A]">Celeste Tanaka</h1>
        <h4 className="oxygen-mono text-4xl">&lt;fullstack developer/&gt;</h4>
        <i className="fa-brands fa-github text-5xl mr-3 mt-4"></i>
        <i className="fa-brands fa-linkedin text-5xl ml-2 mt-4"></i>

      </div>
      <Image
      
      src='/me.png'
      height={200}
      width={300}
      alt='Celeste Tanaka'></Image>
    </section>
  );
};

export default MainSection;
