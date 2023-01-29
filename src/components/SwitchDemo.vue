<template>
    <div>
        <h1>Switch 组件示例</h1>
        <CodeDemo :component="Switch1Demo" />
        <CodeDemo :component="Switch2Demo" />
    </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import CodeDemo from './CodeDemo.vue'
import Switch1Demo from './Switch1Demo.vue'
import Switch2Demo from './Switch2Demo.vue'


export default {
    components: {CodeDemo},
    setup(){
        const bool = ref(false)
        return { bool, Switch1Demo, Switch2Demo }
    }
}
</script>
