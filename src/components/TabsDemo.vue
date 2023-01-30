<template>
    <h1>Tabs 示例</h1>
    <code-demo :component="Tabs1Demo" />
</template>

<script lang="ts">
import CodeDemo from './CodeDemo.vue'
import Tabs1Demo from './Tabs1Demo.vue'
export default {
    components: { CodeDemo },
    setup() {
        return { Tabs1Demo }
    }
}
</script>