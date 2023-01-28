// @ts-nocheck
import path from 'path'
import fs from 'fs'
import { marked } from 'marked'

const mdToJs = str => {
    const content = JSON.stringify(marked(str))
    return `export default ${content}`
}

export function md() {
    return {
        configureServer: [ // 用于开发
            async ({ app }) => {
                app.use(async (ctx, next) => { 
                    if (ctx.path.endsWith('.md')) {
                        // 如果路径以md结尾  就把它变成js
                        ctx.type = 'js'
                        const filePath = path.join(process.cwd(), ctx.path)
                        // js的内容就是把markdown变成js(浏览器只支持js)
                        ctx.body = mdToJs(fs.readFileSync(filePath).toString())
                    } else {
                        await next()
                    }
                })
            },
        ],
        transforms: [{  // 插件
            // 把md文件编译成js代码
            test: context => context.path.endsWith('.md'),
            transform: ({ code }) => mdToJs(code)
        }]
    }
}