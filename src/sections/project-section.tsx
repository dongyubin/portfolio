import React from "react";
import { Separator } from "@/components/ui/separator";
import ImageLeft from "./projects/imageLeft";
import ImageRight from "./projects/imageRight";
import DesktopHome from "../../public/desktop_home_dark_02.png";

const ProjectSection = ({ id }: { id: string }) => {
  return (
    <section className="mx-auto w-full max-w-[90%] select-none py-10" id={id}>
      <div className="mx-auto w-full">
        <p className="mb-8 select-none text-3xl font-black text-white">
          <span className="text-xl text-lime-500">{`. `}</span>项目
        </p>
        <h2 className="text-light px-5 text-sm">
        探索一系列代表我旅程的项目。
        </h2>
      </div>
      <ImageLeft
        imageUrl={DesktopHome}
        title="文武科技柜"
        subtitle="文武科技社的后花园"
        description="文武科技柜是由WordPress为基础搭建的博客系统，里面主要收录了Web、iOS、Android、Windows、Mac、Nas软件，实用教程，偶尔会发点碎碎念。"
        link="https://gamtech.vercel.app/"
        linkRepo="#"
        id="Gamtech"
      />
      <Separator className="my-5" />
      <ImageRight
        imageUrl="https://github.com/gui-bus/Hotefy/blob/main/github/desktop/desktop_home_dark.png?raw=true"
        title="Hotefy"
        subtitle="O seu portal para viagens inesquecíveis!"
        description="O Hotefy é uma plataforma de reservas de viagens desenvolvido com React, Typescript, Next.js, NextUI, ShadCN/UI, Tailwind CSS, Prisma, Supabase e Vercel. O projeto conta com opçoes de viagens para todos os gostos, venha encontrar o refúgio perfeito e realizar os seus sonhos!"
        link="https://hotefy.vercel.app/"
        linkRepo="https://github.com/gui-bus/Hotefy"
        id="Hotefy"
      />
      <Separator className="my-5" />
      <ImageLeft
        imageUrl="https://github.com/gui-bus/Drivex/blob/main/Github/DriveX/Images/MacbookAir-1.png?raw=true"
        title="DriveX"
        subtitle="Experiência automotiva em um novo patamar!"
        description="A DriveX é uma página web de compra e venda de veículos desenvolvido com Vite, React, TypeScript, Firebase e Tailwind CSS. O projeto conta com um sistema de autenticação com Firebase para gerenciar o login e registro de usuários, bem como um banco de dados Firestore para armazenar informações sobre veículos e usuários. Além disso, o projeto oferece a possibilidade de entrar em contato com os vendedores via WhatsApp."
        link="https://drivex-cars.vercel.app/"
        linkRepo="https://github.com/gui-bus/DriveX"
        id="DriveX"
      />
      <Separator className="my-5" />
      <ImageRight
        imageUrl="https://github.com/gui-bus/Cinedex/blob/main/github/desktop_home_light.png?raw=true"
        title="Cinedex"
        subtitle="Seu catálogo definitivo de filmes e series!"
        description="A Cinedex é uma plataforma online de catálogo de filmes, desenvolvido com React, Typescript, Next.js, NextUI, Tailwind CSS e Vercel. O projeto conta com uma ampla gama de opções de filmes separados por categorias e gêneros para explorar!"
        link="https://cinedex.vercel.app/discover/now_playing"
        linkRepo="https://github.com/gui-bus/Cinedex"
        id="Cinedex"
      />
      <Separator className="my-5" />
      <ImageLeft
        imageUrl="https://github.com/gui-bus/oPedalCafe/blob/main/github/desktop_login.png?raw=true"
        title="O Pedal Café"
        subtitle="Gerenciamento eficiente para o seu negócio!"
        description="O projeto do Pedal Café é um sistema completo com Frontend, Backend e Mobile de administração de pedidos de uma cafeteria. O projeto conta com diversas funcionalidades para facilitar a administração e execução dos pedidos, proporcionando um gerenciamento de produtos e pedidos de uma forma poderosa e eficiente!"
        link="https://o-pedal-cafe.vercel.app/"
        linkRepo="https://github.com/gui-bus/oPedalCafe"
        id="oPedalCafe"
      />
       <Separator className="my-5" />
      <ImageRight
        imageUrl="https://github.com/gui-bus/Geoway/blob/main/Github/desktop_7.png?raw=true"
        title="Geoway"
        subtitle="Mapeando aventuras!"
        description="A Geoway é uma Landing Page para um app fictício de rotas para trilhas e viagens desenvolvido com React, Typescript, Next.js, ShadCN/UI, Tailwind CSS e Vercel. O projeto conta com diversas informações sobre o aplicativo, como seu funcionamento e funcionalidades."
        link="https://geoway.vercel.app/"
        linkRepo="https://github.com/gui-bus/Geoway"
        id="Geoway"
      />
    </section>
  );
};

export default ProjectSection;
