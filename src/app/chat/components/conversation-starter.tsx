// Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
// SPDX-License-Identifier: MIT

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { cn } from "~/lib/utils";

import { Welcome } from "./welcome";

export function ConversationStarter({
  className,
  onSend,
}: {
  className?: string;
  onSend?: (message: string) => void;
}) {
  const t = useTranslations("chat");
  // const questions = t.raw("conversationStarters") as string[];
  const questions = [
    {
      text: "今年第一季度的医保基金使用金额趋势分析",
      img: '/images/line.png'
    },
    {
      text: "今年第三季度的医保基金使用金额是否存在异常？",
      img: '/images/columnar.png'
    },
    {
      text: "分析去年住院人次数的趋势？",
      img: '/images/pie1.png'
    },
    {
      text: "最近一年的职工医保使用金额是多少？",
      img: '/images/pie2.png'
    },
  ]

  return (
    <div className={cn("flex flex-col", className)}>
      <div className="pointer-events-none w-full">
        <Welcome className="pointer-events-auto w-[100%] mb-15" />
      </div>
      <ul className="flex flex-wrap justify-between">
        {questions.map((question, index) => (
          <motion.li
            key={index}
            className="flex flex-col shrink-0 mb-4 p-2 active:scale-105 rounded-2xl border transition-all duration-300 hover:opacity-100 hover:shadow-md cursor-pointer opacity-75"
            style={{ transition: "all 0.2s ease-out", width: '49%' }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.2,
              delay: index * 0.1 + 0.5,
              ease: "easeOut",
            }}
            onClick={() => {
              onSend?.(question.text)
            }}>
            <div className="bg-card text-muted-foreground px-4 py-4">
              {question.text}
            </div>
            <img src={question.img} alt="" />
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
