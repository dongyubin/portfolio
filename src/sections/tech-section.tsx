import Image from "next/image";
import React from "react";

import { Tooltip } from "@nextui-org/react";
import { Separator } from "@/components/ui/separator";

const icons: { name: string; src: string }[] = [
  
  // {
  //   name: "TypeScript",
  //   src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/Typescript.svg",
  // },
  // {
  //   name: "React",
  //   src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/React.svg",
  // },
  // {
  //   name: "Vite",
  //   src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/Vite.svg",
  // },
  // {
  //   name: "NextJS",
  //   src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/NextJS.svg",
  // },
  // {
  //   name: "Node.js",
  //   src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/NodeJS.svg",
  // },
  // {
  //   name: "Prisma",
  //   src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/PrismaORM.svg",
  // },
  // {
  //   name: "PostgreSQL",
  //   src: "https://raw.githubusercontent.com/gui-bus/TechIcons/24f9a20420b3a7c5ba7bd7b629a2f9e1912db0e2/Light/PostgreSQL.svg",
  // },
  // {
  //   name: "Supabase",
  //   src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/Supabase.svg",
  // },
  // {
  //   name: "Firebase",
  //   src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/Firebase.svg",
  // },
  // {
  //   name: "Axios",
  //   src: "https://raw.githubusercontent.com/gui-bus/TechIcons/24f9a20420b3a7c5ba7bd7b629a2f9e1912db0e2/Light/Axios.svg",
  // },
  // {
  //   name: "Express.js",
  //   src: "https://raw.githubusercontent.com/gui-bus/TechIcons/24f9a20420b3a7c5ba7bd7b629a2f9e1912db0e2/Light/ExpressJS.svg",
  // },
  // {
  //   name: "NextUI",
  //   src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/NextUI.svg",
  // },
  // {
  //   name: "ShadCN/UI",
  //   src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/ShadCNUI.svg",
  // },
  // {
  //   name: "Tailwind CSS",
  //   src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/TailwindCSS.svg",
  // },
  {
    name: "Html",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/HTML.svg",
  },
  {
    name: "Bootstrap",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/Bootstrap.svg",
  },
  {
    name: "CSS",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/24f9a20420b3a7c5ba7bd7b629a2f9e1912db0e2/Light/CSS3.svg",
  },
  {
    name: "JavaScript",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/Javascript.svg",
  },
  {
    name: "Python",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/Python.svg",
  },
  {
    name: "Django",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/Django.svg",
  },
  {
    name: "Vercel",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/Vercel.svg",
  },
  {
    name: "GIT",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/GIT.svg",
  },
  {
    name: "Vue",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/Vue.svg",
  },
  {
    name: "Linux",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/Linux.svg",
  },
  {
    name: "MySQL",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/MySQL.svg",
  },
  {
    name: "Wordpress",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/Wordpress.svg",
  },
  // {
  //   name: "React Native",
  //   src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/React%20Native.svg",
  // },
  // {
  //   name: "Expo",
  //   src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/Expo.svg",
  // },
];

const TechSection = ({ id }: { id: string }) => {
  return (
    <section className="relative mx-auto flex h-screen max-h-[43rem] w-full max-w-6xl select-none  flex-col items-center justify-center rounded-[3rem] bg-stone-100 md:max-h-[33rem]" id={id}>
      <div className="flex w-full max-w-5xl flex-col items-center justify-center gap-4 px-5 text-black md:absolute">
        <div className="mx-auto w-full">
          <p className="mb-8 select-none text-3xl font-black text-black">
            <span className="text-xl text-lime-500">{`. `}</span>技术
          </p>
          <h2 className="text-light px-5 text-sm">
          以下是我接触过并经常在个人项目中使用的技术列表。
          </h2>
          <Separator className="mt-4 opacity-30" />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {icons.map((icon, index) => (
            <Tooltip
              content={<p className="text-tiny">{icon.name}</p>}
              key={index}
              placement="bottom"
              color="foreground"
              delay={0}
              closeDelay={0}
            >
              <Image
                src={icon.src}
                alt={icon.name}
                width={0}
                height={0}
                sizes="100vw"
                className="h-16 w-16 cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 xl:h-20 xl:w-20"
              />
            </Tooltip>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSection;
