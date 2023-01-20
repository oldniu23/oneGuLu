<template>
<div class="gulu-tabs">
    <div class="gulu-tabs-nav">
        <div class="gulu-tabs-nav-item" :class="{selected: title===selected}" 
            v-for="(title, index) in titles" :key="index" @click="select(title)">{{title}}</div>
        </div>
    <div class="gulu-tabs-content">
        <!-- component标签 在此的作用类似插槽 -->
        <component class="gulu-tabs-content-item"  :class="{selected: c.props.title === selected}"
            v-for="(c, index) in defaults" :is="c" :key="index"></component>
            <component class="gulu-tabs-content-item" :is="current" />
            <component class="gulu-tabs-content-item" v-for="(c,index) in defaults" :is="c" :key="index" />
    </div>
</div>
</template>

<script>
import { computed } from 'vue';
import Tab from "../lib/Tab.vue"
export default {
    props: {
        selected: {
            type: String,
        }
    },
    components: { Tab },
    setup(props, context) {
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
            console.log("computed》》》》");
            return defaults.filter((tag) => {
                return tag.props.title === props.selected
            })[0]
        })
        // 拿到tab标签的title
        const titles = defaults.map((tag) => {
            return tag.props.title
        })
        const select = (title) => {
            context.emit('update:selected',title)
        }


        return { defaults, titles, select, current }
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
    }
    &-content {
        padding: 8px 0;
        &-item {
            display: none;
            &.selected {
                display: block;
            }
        }
    }
}
</style>