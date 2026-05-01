# Agent Grove 协作规则

本文件是 Agent Grove 的项目规则入口，供 AI coding agent 和人类贡献者共同使用。

## 项目定位

Agent Grove 通过研究真实系统和权威资料，沉淀 AI Agent 工程化知识，并在验证后逐步构建可用的 Agent 系统。

当前阶段只做一件事：研究 **Agent Project Infrastructure**，也就是项目规则、spec、harness、eval、工具边界和上下文组织。

## 语言与命名

- 目录名、文件名、代码标识符使用英文。
- 学习阶段的主要说明文档使用中文。
- `README.md` 是英文首页，`README.zh-CN.md` 是中文说明。
- 英文术语保留原词，例如 spec、harness、eval、trace、tool、skill、MCP。

## 当前结构

- `README.md` / `README.zh-CN.md`：项目首页。
- `docs/agent-project-infrastructure.md`：第一阶段研究大纲。
- `AGENTS.md`：本协作规则。

暂不提前创建 examples、case-studies、agents、specs、evals、harnesses 等目录；等内容成熟后再创建。

## 写作原则

- 少写背景，多写结论。
- 少堆链接，多做消化。
- 每篇文档只解决一个明确问题。
- 参考资料应服务于文档结论，不单独堆成资料列表。
- 没有实践或源码依据时，明确标注为草案或假设。

## 工作边界

- 不提交 API key、token、私有日志、个人聊天记录。
- 不 vendor 大型第三方项目。
- 不盲目复刻 OpenClaw、Hermes Agent、Dify 等上游项目。
- 如果新增目录或模板，必须有对应的真实内容或即将执行的任务支撑。

