// Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
// SPDX-License-Identifier: MIT

import { GithubFilled } from "@ant-design/icons";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from 'next-intl';

import { AuroraText } from "~/components/magicui/aurora-text";
import { Button } from "~/components/ui/button";
import { env } from "~/env";

export function Jumbotron() {
  const t = useTranslations('hero');
  const tCommon = useTranslations('common');

  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center">
      <div className="fixed inset-0 z-0 overflow-hidden">
        <Image
          src="/images/bg.png"
          alt="Background"
          fill
          priority
          className="object-cover w-full h-full"
          sizes="100vw"
          quality={100} />
        {/*<div className="absolute inset-0 bg-black/30" />*/}
      </div>
      <div className="relative z-10 w-full max-w-lg rounded-2xl p-10 md:p-12" style={{position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '5%'}}>
        <h1 className="text-left text-4xl font-extrabold text-slate-800 md:text-5xl">
          让 数 据
          <div className="relative whitespace-nowrap text-3xl mt-2">
            告 诉 你 真 相
            {/*<span className="absolute bottom-[-10px] left-0 h-[3px] w-full bg-blue-500" />*/}
          </div>
        </h1>
        <p className="mt-5 text-left text-base leading-relaxed text-gray-500 md:text-lg">
          ChangJi Data Agent，一个基于前沿语言模型构建的行业级运营专家，让数据学会思考和说话的Data Agent智能体。你可以通过自然语言与数据进行实时对话，数据不仅可以给您想要的，还会帮助您挖掘数据形成的原因及趋势分析等。
        </p>
        <div className="mt-12 flex">
          <Button
            className="w-full rounded-lg bg-blue-600 px-8 py-6 text-lg text-white hover:bg-blue-700"
            size="lg"
            asChild>
            <Link
              target={env.NEXT_PUBLIC_STATIC_WEBSITE_ONLY ? "_blank" : undefined}
              href={env.NEXT_PUBLIC_STATIC_WEBSITE_ONLY ? "https://github.com/bytedance/deer-flow" : "/chat"}>
              立即使用
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
