import Link from "next/link";
import Image from "next/image";
import { useEffect } from 'react';
import './styles.css'


const Header = () => {

    //useEffect(() => {
    //    const smooth = () =>{
    //        const target = document.querySelector("#about") as HTMLElement;
    //        window.scrollTo({
    //            top: target.offsetTop,
    //            behavior: "smooth"
    //        });
    //    };
//
  //      const links = document.querySelectorAll('a[href^="#"]');
    //    links.forEach(link => {
      //      link.addEventListener("click", smooth);
        //})
//
  //      return () => {
    //        links.forEach(link => {
      //        link.removeEventListener('click', smooth);
          //  });
        //  };
    //})

  return (
    <>
      <div className="flex text-black justify-between items-center p-3">
        <Image src="/cat.png" width={80} height={100} alt="gato preto" className="m-2"></Image>
        <nav>
          <ul className="flex montserrat font-extrabold text-lg">
            <li className="px-6 py-4 hover:text-indigo-900">
              <Link href="/">Home</Link>
            </li>
            <li className="px-6 py-4 hover:text-indigo-900">
              <Link href="#about">Sobre mim</Link>
            </li>
            <li className="px-6 py-4 hover:text-indigo-900">
              <Link href="#skills">Skills</Link>
            </li>
            <li className="px-6 py-4 hover:text-indigo-900">
              <Link href="#skills">Projetos</Link>
            </li>
            <li className="px-6 py-4 hover:text-indigo-900">
              <Link href="#skills">Contato</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
