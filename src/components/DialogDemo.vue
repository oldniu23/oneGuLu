<template>
    <div>Dialog示例</div>
    <h1>示例1</h1>
    <Button @click="toogle">toggle</Button>
    <Dialog :visible="x"></Dialog>
</template>

<script lang="ts">
import { ref } from 'vue';
import Button from "../lib/Button.vue"
import Dialog from "../lib/Dialog.vue"
export default {
    components: { Button, Dialog },
    setup() {
        const x = ref(false);
        const toogle = () => {
            // 注意这里是用x.value而不是x
            x.value = !x.value;
        }
        return { x, toogle }
    }
}
</script>