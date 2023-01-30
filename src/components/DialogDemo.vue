<template>
    <h1>Dialog示例</h1>
    <code-demo :component="Dialog1Demo" />
    <code-demo :component="Dialog2Demo" />
</template>

<script lang="ts">
import CodeDemo from './CodeDemo.vue';
import Dialog1Demo from "../components/Dialog1Demo.vue"
import Dialog2Demo from "../components/Dialog2Demo.vue"
export default {
  components: { CodeDemo },
    setup() {
        return { Dialog1Demo, Dialog2Demo }
    }
}
</script>