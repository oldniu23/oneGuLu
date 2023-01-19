<template>
    <div>
        <div v-for="(title, index) in titles" :key="index">{{title}}</div>
        <!-- component标签 在此的作用类似插槽 -->
        <component v-for="(c, index) in defaults" :is="c" :key="index"></component>
    </div>
</template>

<script>
import Tab from "../lib/Tab.vue"
export default {
    components: { Tab },
    setup(props, context) {
        // console.log(context.slots.default(),"11");
        const defaults = context.slots.default();
        console.log(defaults,">>>>");
        defaults.forEach((tag => {
            // 防御性编程 防止tabs内出现tab以外的标签
            if(tag.type !== Tab) {
                throw new Error('Tabs的子标签必须是Tab')
            }
        }))
        // 拿到tab标签的title
        const titles = defaults.map((tag) => {
            return tag.props.title
        })
        return { defaults, titles }
    }
}
</script>