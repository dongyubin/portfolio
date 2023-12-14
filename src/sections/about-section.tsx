import Image from "next/image";
import React from "react";

import Profile from "../../public/ProfileSM.png";

const quality: { title: string; text: string }[] = [
  {
    title: "组织",
    text: "全部项目由个人维护.",
  },
  {
    title: "责任",
    text: "完全致力于我的职责，寻求以最好的方式做出贡献.",
  },
  {
    title: "决心",
    text: "专注于学习，寻求不断的职业发展.",
  },
  {
    title: "创造力",
    text: "创造力引导我通过实践和探索找到创新的解决方案。",
  },
];

const AboutSection = ({ id }: { id: string }) => {
  return (
    <section className="mx-auto w-full max-w-[90%] select-none py-10" id={id}>
      <p className="mb-8 select-none text-3xl font-black text-white">
        <span className="text-xl text-lime-500">{`. `}</span>阿斌 / 斌仔
      </p>

      <div className="mx-auto mt-10 flex w-full max-w-5xl flex-col items-center justify-center px-5 md:mt-0">
        <h2 className="w-full rounded-tl-[3rem] rounded-tr-[3rem] bg-white px-8 py-2 text-sm text-black md:max-w-sm">
          Hi！我是 阿斌 / 斌仔
        </h2>
        <div className="flex flex-col rounded-b-3xl border  border-white pb-5 md:rounded-b-[3rem] md:rounded-t-[3rem] md:py-5">
          <div className="flex flex-col items-center justify-center gap-8 px-4 lg:flex-row md:px-8">
            <Image
              src={Profile}
              alt="Profile"
              width={0}
              height={0}
              sizes="100vw"
              className="mx-auto mt-8 flex aspect-square h-auto w-44 items-center justify-center rounded-full object-cover md:mt-0"
            />
            <p className="pb-2 text-sm font-light sm:text-base">
              我是一名95后的软件测试工程师（正在转前端中），折腾的比较多，会的比较杂。<br />
              略懂编程语言：Python、Django、Vue、Html、Css、Js、Android<br />
              各种软件的安装与卸载
               <br />
              <br />{" "}
              <span className="font-medium italic">
              此外，我随时准备迎接新的挑战，让我不断了解最新趋势和市场技术。
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-5 grid w-full max-w-4xl grid-cols-1 gap-4 rounded-md p-4 md:grid-cols-2">
        {quality.map((item, index) => (
          <div
            className="flex w-full flex-col items-start justify-start rounded-md p-4 text-start"
            key={index}
          >
            <h3 className="mb-2 text-xl font-bold italic">
              <span className="text-xl text-lime-500">{`.`}</span>
              {item.title}
            </h3>
            <p className="text-sm font-light">{item.text}</p>
          </div>
        ))}
      </div>

      <p className="select-none text-xl font-black text-white">
        前端 <span className="text-xl text-lime-500">{` . `}</span> 网页设计 <span className="text-xl text-lime-500">{`. `}</span> 软件测试{" "}
        <span className="text-xl text-lime-500">{`. `}</span> 运维部署{" "}
        <span className="text-xl text-lime-500">{`. `}</span> 创造性解决方案{" "}
        <span className="text-xl text-lime-500">{`. `}</span> 后台接口{" "}
      </p>
    </section>
  );
};

export default AboutSection;
