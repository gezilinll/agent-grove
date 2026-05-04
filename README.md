# Agent Grove

[中文说明](README.zh-CN.md)

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
| Agent Project Infrastructure | How do we define rules, context, boundaries, harnesses, and evals so AI agents can work reliably in a project? |
| Agent Core | How should agent loops, state, planning, execution, reflection, and handoff be designed? |
| Context Engineering | How should agents retrieve, select, compress, and update context? |
| Tools and MCP | How should tools, resources, prompts, skills, permissions, and side effects be modeled? |
| Memory | How should short-term state, long-term memory, user models, and skill memory be separated? |
| RAG and Knowledge | How should document parsing, chunking, retrieval, reranking, grounding, and permission filtering work? |
| Evals and Observability | How do we prove agent behavior is reliable and trace failures? |
| Coding Agents | How do agents understand codebases, edit code, run tests, and collaborate with reviewers? |
| Personal Agents | How do long-running assistants handle channels, memory, automation, and safety? |
| Model Gateway and Serving | How should model routing, fallback, cost, rate limits, caching, and serving be handled? |

## Current Stage

The first stage focuses on **Agent Project Infrastructure**:

- project-level instructions such as `AGENTS.md`
- specs for intent, scope, and acceptance criteria
- harnesses for repeatable execution
- evals for behavior and regression checks
- tool and permission boundaries
- source/context organization for agent-readable projects

See: [Agent Project Infrastructure](docs/agent-project-infrastructure.md)

The first Agent Grove agent is tentatively named **Arbor**. At this stage, Arbor is not a general-purpose assistant; it is a working agent for maintaining the research process, evidence, case studies, and future examples.

## Repository Policy

- Directory names, file names, code identifiers, and config keys use English.
- Main explanations are Chinese-first during the study phase.
- New directories are created only when there is real content to place in them.
- References are kept close to the distilled document they support.
