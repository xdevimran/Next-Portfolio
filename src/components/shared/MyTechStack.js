import Image from "next/image";
import React from "react";
import bootstrap from "@/assets/Skills/bootstrap.png";
import css from "@/assets/Skills/css.png";
import html from "@/assets/Skills/html.png";
import javascript from "@/assets/Skills/js.png";
import react from "@/assets/Skills/react.png";
import tailwind from "@/assets/Skills/tailwind.png";
import git from "@/assets/Skills/git.png";
import github from "@/assets/Skills/github.png";
import vscode from "@/assets/Skills/vscode.png";
import figma from "@/assets/Skills/figma.png";
import wp from "@/assets/Skills/wp.png";

export default function MyTechStack() {
  return (
    <div className="container mx-auto py-10">
      <div className="text-center">
        <h1 className=" text-4xl font-bold text-[#42446E]">My Tech Stack</h1>
        <p className="py-6"> Technologies I’ve been working with recently</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10 items-center justify-items-center py-16">
        <Image src={html} alt="techstack" width={100} height={100} />
        <Image src={css} alt="techstack" width={100} height={100} />
        <Image src={javascript} alt="techstack" width={100} height={100} />
        <Image src={react} alt="techstack" width={100} height={100} />
        <Image src={tailwind} alt="techstack" width={100} height={100} />
        <Image src={git} alt="techstack" width={100} height={100} />
        <Image src={github} alt="techstack" width={100} height={100} />
        <Image src={vscode} alt="techstack" width={100} height={100} />
        <Image src={bootstrap} alt="techstack" width={100} height={100} />
        <Image src={figma} alt="techstack" width={70} height={70} />
        <Image src={wp} alt="techstack" width={100} height={100} />
        <Image src={bootstrap} alt="techstack" width={100} height={100} />
      </div>
    </div>
  );
}
