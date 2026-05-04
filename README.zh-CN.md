# Agent Grove

[English](README.md)

**Agent Grove** 是一个 AI Agent 工程化学习与实践项目：通过研究真实系统、吸收权威资料、构建最小实践，把现代 Agent 工程沉淀为简洁的知识框架、架构图、案例研究和可运行样例，并最终长出一个可用的 Agent 系统。

这不是资料导航。参考资料、开源项目和实验过程只是输入；仓库的产出应该是我们消化后的工程知识。

## 我们要做什么

- 建立一套清晰的 Agent 工程知识框架。
- 基于真实项目写出有源码依据的 case studies。
- 为关键知识点提供最小 examples。
- 在验证过的知识之上，逐步构建 Agent Grove 自身系统。

## 知识框架草案

| 大类 | 核心问题 |
|---|---|
| Agent Project Infrastructure | 如何给项目和 Agent 定义规则、上下文、边界、harness、eval，让 AI 能稳定工作？ |
| Agent Core | Agent Loop、状态、规划、执行、反思、handoff 如何设计？ |
| Context Engineering | Agent 如何获取、选择、压缩和更新上下文？ |
| Tools and MCP | tool、resource、prompt、skill、权限和副作用如何建模？ |
| Memory | 短期状态、长期记忆、用户画像、技能记忆如何区分？ |
| RAG and Knowledge | 文档解析、chunk、检索、rerank、引用溯源、权限过滤如何落地？ |
| Evals and Observability | 如何证明 Agent 行为可靠，并追踪失败路径？ |
| Coding Agents | Agent 如何理解代码仓库、修改代码、运行测试、协作 review？ |
| Personal Agents | 长期个人助理如何处理多渠道、记忆、自动化和安全？ |
| Model Gateway and Serving | 多模型路由、fallback、成本、限流、缓存、推理服务如何设计？ |

## 当前阶段

第一阶段只聚焦 **Agent Project Infrastructure**：

- `AGENTS.md` 这类项目规则入口
- 描述目标、边界和验收标准的 spec
- 让任务可复现执行的 harness
- 判断行为可靠性的 eval
- tool / permission / side effect 边界
- 让 AI 快速理解项目的上下文组织方式

大纲见：[Agent Project Infrastructure](docs/agent-project-infrastructure.md)

Agent Grove 未来会逐步长出自己的 Agent。第一个 Agent 暂定名为 **Arbor**：它现阶段不是全能助理，而是帮助维护研究流程、整理证据、检查文档依据、沉淀案例和推动 examples 的工作型 Agent。

## 仓库原则

- 目录名、文件名、代码标识符使用英文。
- 学习阶段的主要说明文档使用中文。
- 只有当内容成熟时才创建目录和模板。
- 参考资料就近附在被它支撑的沉淀文档里，不单独堆成资料目录。
