# Agent Project Infrastructure

本阶段研究一个问题：

> 如何给一个项目和其中的 AI Agent 设计规则、边界、上下文、执行环境和评测标准，让 AI 能稳定、可控、可复盘地工作？

这部分不是“外围文档”，而是 Agent 工程的基础设施。它决定 AI 是否能理解目标、找到上下文、遵守边界、复现任务、接受评测。

## 初步分类

| 分类 | 要解决的问题 | 需要沉淀的能力 |
|---|---|---|
| Project Instructions | AI 进入项目后先读什么？规则如何分层？ | `AGENTS.md` 写法、目录契约、冲突规则、维护方式 |
| Spec | 模糊需求如何变成可执行、可验收的任务？ | 目标/非目标、边界、接口、验收标准 |
| Harness | 如何让 AI 可重复地运行、观察、调试任务？ | 命令、脚本、沙箱、日志、artifact、最小复现环境 |
| Eval | 如何判断 Agent 做对了，而不是看起来做对了？ | task、rubric、trace check、regression、failure cases |
| Tool Boundary | tool、resource、prompt、skill 如何区分？副作用如何控制？ | 权限、审批、审计、side-effect 分级 |
| Context Architecture | 大项目如何让 AI 找到正确上下文？ | repo map、source manifest、文档索引、上下文分层 |

## 关键问题

- `AGENTS.md` 应该写哪些规则，哪些内容不该写进去？
- spec 和 prompt 的边界是什么？
- harness 是脚本、环境，还是一套反馈循环？
- eval 应该评估最终答案，还是同时评估过程和副作用？
- tool 何时需要审批？只读能力是否应该建模成 resource？
- 如何组织项目文档，让 AI 不需要读完整个仓库也能工作？

## 计划产出

当前只做大纲和调研，不提前创建完整模板。

成熟后再沉淀：

- `AGENTS.md` 写作准则
- spec 写作准则
- harness 设计准则
- eval 设计准则
- tool / permission boundary 设计准则
- 一个用于 Agent Grove 自身的最小项目规则体系

## 参考输入

这些资料是输入，不是最终产出：

- [AGENTS.md](https://agents.md/)
- [OpenAI: Harness engineering](https://openai.com/index/harness-engineering/)
- [OpenAI Evals](https://developers.openai.com/api/docs/guides/evals)
- [OpenAI Agent Evals](https://developers.openai.com/api/docs/guides/agent-evals)
- [Anthropic: Building effective agents](https://www.anthropic.com/engineering/building-effective-agents)
- [Anthropic: Demystifying evals for AI agents](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents)
- [MCP Specification](https://modelcontextprotocol.io/specification/draft)

