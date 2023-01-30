<template>
    <div>
        <h1>Switch 组件示例</h1>
        <CodeDemo :component="Switch1Demo" />
        <CodeDemo :component="Switch2Demo" />
    </div>
</template>

<script lang="ts">
import Switch1Demo from './Switch1Demo.vue'
import Switch2Demo from './Switch2Demo.vue'
import CodeDemo from './CodeDemo.vue'


export default {
    components: {CodeDemo},
    setup(){
        return { Switch1Demo, Switch2Demo }
    }
}
</script>
