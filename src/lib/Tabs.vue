<template>
<div class="gulu-tabs">
    <div class="gulu-tabs-nav" ref="container">
        <!-- el => {if (el) navItems[index] = el } 
        如果当前元素(指el el可起其他名字)存在 就让navItems的第index个等于el -->
        <div class="gulu-tabs-nav-item" :class="{selected: title===selected}" 
            v-for="(title, index) in titles" :key="index" @click="select(title)"
            :ref="el => {if (el) navItems[index] = el }">{{title}}
        </div>
        <!-- 蓝色下划线 -->
        <div class="gulu-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="gulu-tabs-content">
        <!-- component标签 在此的作用类似插槽 -->
            <component class="gulu-tabs-content-item" :is="current" :key="current.props.title" />
    </div>
</div>
</template>

<script lang="ts">
import { computed, ref, onMounted, onUpdated } from 'vue';
import Tab from "../lib/Tab.vue"
export default {
    props: {
        selected: {
            type: String,
        }
    },
    components: { Tab },
    setup(props, context) {
        // 所有标签
        const navItems = ref< HTMLDivElement[] >([])
        // 蓝色下划线标签 用于下面获取下划线宽度
        const indicator = ref< HTMLDivElement >(null)
        // 
        const container = ref< HTMLDivElement >(null)

        const x = () => {
            // ...打印对象值  console.log({...navItems.value});
            // 获取所有标签值
            const divs = navItems.value
            // 找到class有selected的div(也就是当前选中的div)  拿到数组第1项
            const result = divs.filter(div => div.classList.contains('selected') )[0]
            // 获取当前选中的div标签宽度
            const {width} = result.getBoundingClientRect()
            // 给蓝色下划线赋予被选中的div的宽度
            indicator.value.style.width = width + 'px'
            // 获取container的左坐标 获取当前选中的div的左坐标
            const { left: left1 } = container.value.getBoundingClientRect()
            const { left: left2 } = result.getBoundingClientRect()
            // console.log(left1,left2,"?????>>>");
            const left = left2 - left1
            indicator.value.style.left = left + 'px'
        }
        // onMounted只在第一次渲染执行
        onMounted(x) 
        onUpdated(x)
        // console.log(context.slots.default(),"11");
        const defaults = context.slots.default();
        // console.log(defaults,">>>>");
        defaults.forEach((tag => {
            // 防御性编程 防止tabs内出现tab以外的标签
            if(tag.type !== Tab) {
                throw new Error('Tabs的子标签必须是Tab')
            }
        }))

        const current = computed(() => {
            // console.log("computed》》》》");
            return defaults.filter((tag) => {
                return tag.props.title === props.selected
            })[0]
        })
        // 拿到tab标签的title
        const titles = defaults.map((tag) => {
            return tag.props.title
        })
        const select = (title:string) => {
            context.emit('update:selected',title)
        }
        return { defaults, titles, select, current, navItems, indicator, container }
    }
}
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.gulu-tabs {
    &-nav {
        display: flex;
        color: $color;
        border-bottom: 1px solid $border-color;
        position: relative;
        &-item {
            padding: 8px 0;
            margin: 0 16px;
            cursor: pointer;
            &:first-child {
                margin-left: 0;
            }
            &.selected {
                color: $blue;
            }
        }
        &-indicator {
            position: absolute;
            height: 3px;
            background: $blue;
            left: 0;
            bottom: -1px;
            width: 100px;
            transition: all 250ms;
        }
    }
    &-content {
        padding: 8px 0;
    }
}
</style>