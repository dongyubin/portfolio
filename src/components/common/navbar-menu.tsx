"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

import Code from "../../../public/code.webp";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "文武科技柜",
    href: "/#wwkjg",
    description: "文武科技柜是一个拥有各平台软件、教程的平台.",
  },
  {
    title: "文武科技社",
    href: "/#wwkjs",
    description: "文武科技社是一个拥有黑苹果教程、软件测试的纯静态个人博客.",
  },
  {
    title: "文武科技资源",
    href: "/#wwkjzy",
    description: "一个虚拟产品发卡平台.",
  },
  {
    title: "文武微信排版",
    href: "/#wwwxpb",
    description:
      "一个基于 mdnice 二开的微信排版工具.",
  },
  {
    title: "豆瓣已看电影展示",
    href: "/#douban",
    description: "使用 GitHub Action 来抓取豆瓣已看数据.",
  },
  {
    title: "网上学科",
    href: "/#kxsw",
    description: "一个教人如何上网的仓库.",
  },
];

const landings: { title: string; href: string; description: string }[] = [
  {
    title: "Thiago Mecânico",
    href: "/#Thiago-mecanico",
    description: "Landing Page para um instrutor e mecânico de bicicletas.",
  },
  {
    title: "Geoway",
    href: "/#Geoway",
    description:
      "Landing Page para um app fictício de rotas para trilhas e viagens.",
  },
];

export function Navmenu() {
  return (
    <NavigationMenu className="bg-transparent">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
          关于
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-row-reverse items-center justify-between gap-4 p-4 md:w-[400px] lg:w-[500px]">
              <div className="w-1/3">
                <Image
                  src={Code}
                  alt="Code"
                  className="h-full w-full rounded-3xl"
                />
              </div>
              <div className="flex w-2/3 flex-col text-center">
                <ListItem
                  href="/#About"
                  title="阿斌"
                  className="whitespace-pre-wrap"
                >
                  了解更多关于代码背后的人的信息.
                </ListItem>
                <ListItem
                  href="/#Tech"
                  title="技术"
                  className="whitespace-pre-wrap"
                >
                  浏览渗透到我日常生活中的技术.
                </ListItem>
                <ListItem
                  href="/#Projects"
                  title="项目"
                  className="whitespace-pre-wrap"
                >
                  探索代表我旅程的精选项目.
                </ListItem>
              </div>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
            系统
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  className="text-center"
                >
                  <span className="whitespace-pre-wrap">
                    {component.description}
                  </span>
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
          登录页
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {landings.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  className="text-center"
                >
                  <span className="whitespace-pre-wrap">
                    {component.description}
                  </span>
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
        <NavigationMenuItem>
          <Link href="/#Contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contato
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
