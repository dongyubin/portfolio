import React from "react";
import { Separator } from "@/components/ui/separator";
import ImageLeft from "./projects/imageLeft";
import ImageRight from "./projects/imageRight";
import wwkjg from '../../public/wwkjg.png';
import wwkjs from '../../public/wwkjs.webp';
import wwkjzy from '../../public/wwkjzy.png';
import wwwxpb from '../../public/wwwxpb.png';
import douban from '../../public/douban.webp';
import kxsw from '../../public/kxsw.png';

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
        imageUrl={wwkjg}
        title="文武科技柜"
        subtitle="文武科技社的后花园"
        description="文武科技柜是由WordPress为基础搭建的博客系统。主要收录内容：各平台软件（Web、iOS、Android、Windows、Mac、Nas）、实用教程、偶尔会发点碎碎念。"
        link="https://www.wangdu.site/"
        linkRepo="https://www.wangdu.site/"
        id="wwkjg"
      />
      <Separator className="my-5" />
      <ImageRight
        imageUrl={wwkjs}
        title="文武科技社"
        subtitle="一个有科技感的个人博客"
        description="文武科技社是由 Hexo+Butterfly 主题构建，运行在 Vercel，也算是我的第二个个人博客。主要收录内容：黑苹果安装、资源分享、软件测试教学。"
        link="https://blog.wangdu.site/"
        linkRepo="https://blog.wangdu.site/"
        id="wwkjs"
      />
      <Separator className="my-5" />
      <ImageLeft
        imageUrl={wwkjzy}
        title="文武科技资源"
        subtitle="一个虚拟产品发卡平台"
        description="文武科技资源是由 独角数卡 构建。主要售卖内容：苹果软件、ChatGPT账号、黑苹果资源、软件资源...支付方式：微信、支付宝。"
        link="https://fk.wwkejishe.top/"
        linkRepo="https://fk.wwkejishe.top/"
        id="wwkjzy"
      />
      <Separator className="my-5" />
      <ImageRight
        imageUrl={wwwxpb}
        title="文武微信排版"
        subtitle="一个基于 mdnice 二开的微信排版工具"
        description="文武微信排版是在 mdnice 的基础上，增加了文字时间统计、链接转二维码和加粗Plus等功能。"
        link="https://md.wangdu.site/"
        linkRepo="https://www.wangdu.site/software/tools/1281.html"
        id="wwwxpb"
      />
      <Separator className="my-5" />
      <ImageLeft
        imageUrl={douban}
        title="豆瓣已看电影展示"
        subtitle="使用了 豆瓣书影音同步 GitHub Action 来抓取的 JSON 数据，用于博客展示"
        description="豆瓣已看电影展示主要是基于 GitHub Action 来抓取的 JSON 数据，并将图片爬取下来，以防失效。（已稳定运行 6 个月）"
        link="https://dban.vercel.app/"
        linkRepo="https://github.com/dongyubin/douban"
        id="douban"
      />
       <Separator className="my-5" />
      <ImageRight
        imageUrl={kxsw}
        title="网上学科"
        subtitle="一个教人如何上网的仓库"
        description="网上学科主要收录一些上网软件和J场。"
        link="https://github.com/dongyubin/Free-AppleId-Serve"
        linkRepo="https://github.com/dongyubin/Free-AppleId-Serve"
        id="kxsw"
      />
    </section>
  );
};

export default ProjectSection;
