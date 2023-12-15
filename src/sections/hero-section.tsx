"use client";
import { Button } from "@nextui-org/react";
import React, { ReactNode } from "react";
import Link from "next/link";

import { FaBehance, FaLinkedinIn, FaGithub, FaWhatsapp, FaInstagram,FaBlog } from "react-icons/fa6";
import { FaMailBulk } from "react-icons/fa";

import { Tooltip } from "@nextui-org/react";
import Image from "next/image";
import bg from '../../public/bg.jpg';

const tel = "12981847553";

const icons: { title: string; href: string; icon: ReactNode }[] = [
  // {
  //   title: "LinkedIn",
  //   href: "https://www.linkedin.com/in/gui-bus/",
  //   icon: <FaLinkedinIn size={20} />,
  // },
  {
    title: "Blog",
    href: "https://www.wangdu.site/",
    icon: <FaBlog size={20} />,
  },
  {
    title: "Github",
    href: "https://github.com/dongyubin",
    icon: <FaGithub size={20} />,
  },
  // {
  //   title: "Behance",
  //   href: "https://www.behance.net/gui-bus",
  //   icon: <FaBehance size={20} />,
  // },
  {
    title: "E-mail",
    href: "mailto:892457803@qq.com",
    icon: <FaMailBulk size={20} />,
  },
  // {
  //   title: "WhatsApp",
  //   href: `https://wa.me/${tel}?text=${encodeURI(
  //     "Olá, vim do seu portfólio e gostaria de tirar uma dúvida.",
  //   )}`,
  //   icon: <FaWhatsapp size={20} />,
  // },
  // {
  //   title: "Instagram",
  //   href: "https://www.instagram.com/guibus_dev/",
  //   icon: <FaInstagram size={20} />,
  // },
  
];

const HeroSection = ({ id }: { id: string }) => {
  return (
    <section className="w-full max-w-[90%] h-screen max-h-[43rem] select-none" id={id}>
      {/* <video autoPlay muted loop className="pt-10 sm:pt-0">
        <source src="/videos/tech.mp4" type="video/mp4"></source>
      </video> */}
      <Image
          src={bg}
          alt='背景'
          width={0}
          height={0}
          sizes="100vw"
          className="pt-10 sm:pt-0"
          draggable={false}
        />

      <div className="mt-10 flex items-center justify-center sm:inset-0 sm:mt-0 md:absolute">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <h2 className="px-5 text-center text-3xl md:text-4xl font-black text-white">
            {/* Desenvolvedor Frontend & UI/UX Designer */}
            欢迎来到 文武科技社
          </h2>
          <h3 className="mx-auto mt-5 flex w-full max-w-[90%] md:max-w-2xl text-center font-light">
          欢迎来到文武科技社的引导页面！这里是您了解文武科技社旗下所有作品的最佳去处。每个作品都独具特色，无论是创新的科技产品、引人入胜的文学作品，还是令人心驰神往的艺术创作，我们都带着独特的风格和激情倾注其中。让我们一起深入了解这些令人惊叹的作品，探索它们背后的故事和灵感吧！
          </h3>

          <div className="mt-5 flex items-center justify-center gap-2">
            {icons.map((icon, index) => (
              <Tooltip
                content={<p className="text-tiny">{icon.title}</p>}
                key={index}
                placement="bottom"
                color="foreground"
                delay={0}
                closeDelay={0}
              >
                <Link href={icon.href} target="_blank">
                  <Button
                    variant="shadow"
                    isIconOnly
                    size="lg"
                    startContent={icon.icon}
                    className="transition-all duration-300 ease-in-out hover:text-lime-400"
                  />
                </Link>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
