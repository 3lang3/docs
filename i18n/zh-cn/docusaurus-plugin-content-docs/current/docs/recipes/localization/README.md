---
sidebar_position: 7
---

# 🌐 本地化

:::caution
本页面只是一个临时方案。因为不是理想方案，过程经过了大幅简化。我们正在为后续版本开发一个简易的本地化方式。敬请期待。
:::

1. 配置一个 Logto 开发环境。
2. 向 `packages/phrases/src/types.ts` 的 `enum Language` 中添加你的语言代码。
3. 使用小写的语言代码创建一个 `.ts` 文件（例如 `packages/phrases/src/locales/fr.ts`），并模仿 `zh-cn.ts` 的内容。
4. 添加你的 locale 至 `packages/phrases/src/index.ts` 里的 `const resource`。
5. 构建 Logto 并尝试。
