// 多个侧边栏方式sidebar写成对象
export default {
    // 当用户访问时guide显示此侧边栏
    // 在 `guide` 目录下。
    "/guide/": [
        {
            text: "介绍",
            collapsible: true,
            items: [
                { text: "什么是 VitePress？", link: "/guide/什么是 VitePress？" },
                { text: "配置和部署", link: "/guide/配置和部署" }
            ]
        },
        {
            text: "写作",
            collapsible: true,
            items: [
                { text: "markdown扩展", link: "/guide/markdown扩展" },
                {
                    text: "在 Markdown 中使用 Vue",
                    link: "/guide/在 Markdown 中使用 Vue"
                },
                { text: "API 参考", link: "/guide/API 参考" },
            ]
        }
    ],
    // 当用户访问时config显示此侧边栏
    "/config/": [
        {
            text: "配置",
            collapsible: true,
            items: [{ text: "介绍", link: "/config/介绍" }]
        }
    ]
}