'use client'

import Image from "next/image";
import MainSection from "@/components/MainSection";
import Header from "@/components/Header";
import About from "@/components/About";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#EEEEEE]">
      <Header/>
      <MainSection/>
      <div className="box flex">
        <About></About>
        <Skills></Skills>
      </div>
    </main>
  );
}
