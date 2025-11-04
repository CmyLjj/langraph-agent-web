// Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
// SPDX-License-Identifier: MIT

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { cn } from "~/lib/utils";

export function Welcome({ className }: { className?: string }) {
  const t = useTranslations("chat.welcome");

  return (
    <motion.div
      className={cn("flex flex-col", className)}
      style={{ transition: "all 0.2s ease-out", background: "linear-gradient(134deg, #5ac4ff1f -17.52%, #ae88ff1f 120.48%)", borderRadius: "12px", padding: '12px 0'}}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}>
      <h3 className="mb-2 text-center text-3xl font-medium">👋🏻 您好，我是您的数据运营专家</h3>
      <div className="text-muted-foreground px-4 text-center text-lg">我可以帮您统计数据，根据数据进行主动思考、洞察数据真相、生成数据报告！</div>
    </motion.div>
  );
}
