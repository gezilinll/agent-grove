import { defineConfig } from 'vitepress'

const base = process.env.VITEPRESS_BASE ?? '/agent-grove/'

export default defineConfig({
  base,
  title: 'Agent Grove',
  description: 'A concise knowledge base for AI agent engineering.',
  appearance: false,
  cleanUrls: true,
  lastUpdated: true,
  metaChunk: true,
  head: [
    ['meta', { name: 'theme-color', content: '#17643a' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Agent Grove' }],
    [
      'meta',
      {
        property: 'og:description',
        content:
          'Distilled knowledge, case studies, and minimal examples for AI agent engineering.'
      }
    ]
  ],
  themeConfig: {
    logo: undefined,
    search: {
      provider: 'local'
    }
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      title: 'Agent Grove',
      description: 'A concise knowledge base for AI agent engineering.',
      themeConfig: {
        nav: [
          { text: 'Docs', link: '/' },
          { text: '中文', link: '/zh/' },
          { text: 'GitHub', link: 'https://github.com/gezilinll/agent-grove' }
        ],
        sidebar: {
          '/': [
            {
              text: 'Start Here',
              items: [
                { text: 'Overview', link: '/' }
              ]
            }
          ]
        },
        outline: {
          level: [2, 3],
          label: 'On this page'
        },
        editLink: {
          pattern: 'https://github.com/gezilinll/agent-grove/edit/main/docs/:path',
          text: 'Edit this page on GitHub'
        },
        docFooter: {
          prev: 'Previous page',
          next: 'Next page'
        },
        footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2026 Agent Grove contributors'
        }
      }
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'Agent Grove',
      description: 'AI Agent 工程化知识库。',
      themeConfig: {
        nav: [
          { text: '文档', link: '/zh/' },
          { text: 'English', link: '/' },
          { text: 'GitHub', link: 'https://github.com/gezilinll/agent-grove' }
        ],
        sidebar: {
          '/zh/': [
            {
              text: '开始阅读',
              items: [
                { text: '概览', link: '/zh/' }
              ]
            }
          ]
        },
        outline: {
          level: [2, 3],
          label: '本页目录'
        },
        editLink: {
          pattern: 'https://github.com/gezilinll/agent-grove/edit/main/docs/:path',
          text: '在 GitHub 上编辑此页'
        },
        docFooter: {
          prev: '上一页',
          next: '下一页'
        },
        footer: {
          message: '基于 MIT License 发布。',
          copyright: 'Copyright © 2026 Agent Grove contributors'
        }
      }
    }
  }
})
