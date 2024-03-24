import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "MCArcUnion",
    description: "这里是 Hottampist 的 Minecraft 版本库的文档站",
    lastUpdated: true,
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        search: {
            provider: 'local',
            options: {
                translations: {
                    button: {
                        buttonText: "搜索文档",
                        buttonAriaLabel: "搜索文档",
                    },
                    modal: {
                        noResultsText: "无法找到此内容",
                        resetButtonTitle: "清除查询条件",
                        footer: {
                            selectText: '选择',
                            navigateText: '切换',
                            closeText: '关闭',
                        },
                    },
                }
            }

        },
        nav: [
            {text: '主页', link: '/'},
            {text: '文档', link: '/version'}
        ],

        sidebar: [
            {
                text: '文档目录',
                items: [
                    {text: '版本库文档', link: '/version'},
                    {text: '概念', link: '/concepts'},
                    {text: '存档 GitHub 仓库', link: '/archive-github-repo'},
                    {text: '存档 Android 版', link: '/archive-android'},
                    {text: '破解 Android 版验证', link: '/crack-android'},
                ]
            }
        ],

        docFooter: {
            prev: '上一篇',
            next: '下一篇'
        },
        outline: {
            label: '目录'
        },

        socialLinks: [
            {icon: 'github', link: 'https://github.com/MCArcUnion/MCArcUnion.github.io'}
        ]
    }
})
