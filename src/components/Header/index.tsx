import Link from "next/link";
import Image from "next/image";
import './styles.css'


const Header = () => {
  return (
    <>
      <div className="flex text-black justify-between items-center p-3 fixed bg-[#EEEEEE] w-full border-b border-[#cbcbcb]	 ">
        <Image src="/cat.png" width={70} height={80} alt="gato preto" className="m-2"></Image>
        <nav>
          <ul className="flex montserrat font-extrabold text-lg">
            <li className="px-6 py-3 hover:text-indigo-900">
              <Link href="/">Home</Link>
            </li>
            <li className="px-6 py-3 hover:text-indigo-900">
              <Link href="#about">Sobre mim</Link>
            </li>
            <li className="px-6 py-3 hover:text-indigo-900">
              <Link href="#skills">Skills</Link>
            </li>
            <li className="px-6 py-3 hover:text-indigo-900">
              <Link href="#skills">Projetos</Link>
            </li>
            <li className="px-6 py-3 hover:text-indigo-900">
              <Link href="#skills">Contato</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
