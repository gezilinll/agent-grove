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

## 研究任务清单

### 资料阅读

- AGENTS.md：确认项目规则入口应该包含什么、不包含什么。
- OpenAI Harness Engineering：确认 harness 是否应被理解为脚本、环境，还是反馈循环。
- OpenAI / Anthropic Evals：确认 Agent eval 应该覆盖最终结果、执行过程、工具调用和副作用中的哪些部分。
- Anthropic Building Effective Agents：确认 workflow、agent、tool use 的复杂度边界。
- MCP Specification：确认 tool、resource、prompt 的职责边界。

### 项目观察

- OpenClaw、Hermes Agent：观察个人 Agent 如何组织 instructions、tools、memory、安全边界。
- OpenHands、SWE-agent、Aider：观察 coding agent 如何使用 repo context、harness、测试和 patch loop。
- Langfuse、OpenAI Evals、Ragas：观察 eval、trace、dataset、rubric 如何产品化。
- Dify、LangGraph：观察 workflow / graph / spec-like 配置如何表达任务边界。

### 验证目标

- 验证当前 6 类分类是否成立。
- 判断是否需要拆分或合并分类，例如 Context Architecture 是否应拆成 Repository Knowledge 和 Runtime Context。
- 提炼第一篇正式文章的结构，不急于写结论。

## 源码阅读位置

第三方项目统一克隆到仓库内的 `external/` 目录：

```text
external/
  openclaw/
  hermes-agent/
  openhands/
  swe-agent/
  aider/
  langfuse/
  ragas/
  dify/
  langgraph/
```

`external/` 已在 `.gitignore` 中忽略。这样做的原因：

- 方便在同一个工作区内阅读和引用路径。
- 不把大型第三方仓库提交进 Agent Grove。
- 后续如果需要固定分析对象，再在文档中记录具体 commit SHA。
- 只有当某个第三方项目变成 Agent Grove 的稳定构建依赖时，才重新考虑 submodule。

## Arbor 当前职责

Agent Grove 的第一个 Agent 暂定名为 **Arbor**。现阶段 Arbor 的目标不是成为全能助理，而是服务这个研究项目：

- 维护研究任务清单。
- 帮助记录资料阅读结论。
- 辅助定位案例项目中的关键源码。
- 检查文档结论是否有来源或案例支撑。
- 将成熟结论转化为简洁的知识文档和 examples。

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
