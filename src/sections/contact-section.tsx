import React, { ReactNode } from "react";
import { Separator } from "@/components/ui/separator";
import { IoChatbubblesOutline } from "react-icons/io5";
import {
  FaBehance,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaInstagram,
  FaBlog 
} from "react-icons/fa6";
import { FaMailBulk } from "react-icons/fa";
import { Button, Tooltip } from "@nextui-org/react";
import Link from "next/link";

const tel = "12981847553";

const icons: { title: string; href: string; icon: ReactNode }[] = [
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
  {
    title: "E-mail",
    href: "mailto:892457803@qq.com",
    icon: <FaMailBulk size={20} />,
  },
  // {
  //   title: "LinkedIn",
  //   href: "https://www.linkedin.com/in/gui-bus/",
  //   icon: <FaLinkedinIn size={20} />,
  // },
  // {
  //   title: "Github",
  //   href: "https://github.com/gui-bus",
  //   icon: <FaGithub size={20} />,
  // },
  // {
  //   title: "Behance",
  //   href: "https://www.behance.net/gui-bus",
  //   icon: <FaBehance size={20} />,
  // },
  // {
  //   title: "E-mail",
  //   href: "mailto:guibus.dev@gmail.com",
  //   icon: <FaMailBulk size={20} />,
  // },
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

const ContactSection = ({ id }: { id: string }) => {
  return (
    <section className="relative mx-auto flex h-screen max-h-[42rem] w-full md:max-w-6xl select-none  flex-col items-center justify-center rounded-t-[3rem] bg-stone-100 md:max-h-[32rem]" id={id}>
      <div className="flex w-full max-w-5xl flex-col items-center justify-center gap-4 px-5 text-black md:absolute">
        <div className="mx-auto flex w-full flex-col items-center justify-center gap-8">
          <p className="flex select-none items-center justify-center gap-2 text-3xl font-black uppercase text-black">
            与我联系 <IoChatbubblesOutline />
          </p>
          <Separator className="mt-4 opacity-30" />
          <h2 className="text-light px-5 text-sm">
          无论你是喜欢我的工作，还是有一个项目，一个潜在的合作伙伴关系，或者只是想交换想法，我总是对新的机会持开放态度。 <br /><br /> <span className="font-medium">欢迎与我联系！</span>
          </h2>

          <div className="flex items-center justify-center gap-2">
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

          <h3 className="select-none rounded-bl-3xl rounded-tr-3xl bg-black p-5 text-3xl font-black uppercase text-white">
          让我们创造非凡的东西！
          </h3>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
