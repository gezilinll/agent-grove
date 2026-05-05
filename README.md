# Agent Grove

[中文说明](README.zh-CN.md) · [Documentation site](https://gezilinll.github.io/agent-grove/) · [中文文档站](https://gezilinll.github.io/agent-grove/zh/)

**Agent Grove** is an open-source study and practice project for distilling modern AI agent engineering into concise knowledge, diagrams, minimal examples, and eventually a usable agent system.

This is not a link collection. References, open-source projects, and experiments are inputs. The output should be distilled engineering knowledge.

## What We Want to Build

- A clear knowledge framework for AI agent engineering.
- Source-grounded case studies of real agent systems.
- Minimal examples that demonstrate one concept at a time.
- A small agent system that grows from the knowledge we validate.

## Knowledge Framework Draft

| Area | Core Question |
|---|---|
| Agent-Ready Engineering Infrastructure | How do we engineer project context, intent, execution, verification, governance, and feedback so coding agents can work reliably? |
| Agent Core | How should agent loops, state, planning, execution, reflection, and handoff be designed? |
| Context Engineering | How should agents retrieve, select, compress, and update context? |
| Tools and MCP | How should tools, resources, prompts, skills, permissions, and side effects be modeled? |
| Memory | How should short-term state, long-term memory, user models, and skill memory be separated? |
| RAG and Knowledge | How should document parsing, chunking, retrieval, reranking, grounding, and permission filtering work? |
| Evals and Observability | How do we prove agent behavior is reliable and trace failures? |
| Coding Agents | How do agents understand codebases, edit code, run tests, and collaborate with reviewers? |
| Personal Agents | How do long-running assistants handle channels, memory, automation, and safety? |
| Model Gateway and Serving | How should model routing, fallback, cost, rate limits, caching, and serving be handled? |

## Documentation Site

The documentation site is built with VitePress and deployed with GitHub Pages.

```bash
npm run docs:dev
npm run docs:build
```

English pages live under `docs/`. Chinese pages live under `docs/zh/`.

The first Agent Grove agent is named **Arbor**. Arbor is not a helper for writing articles or maintaining the research workflow; it is a lightweight learning version of OpenClaw for practicing agent engineering infrastructure in real code.

## Repository Policy

- Directory names, file names, code identifiers, and config keys use English.
- Main explanations are Chinese-first during the study phase.
- New directories are created only when there is real content to place in them.
- References are kept close to the distilled document they support.
