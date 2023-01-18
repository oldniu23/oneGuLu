<template>
    <div>Dialog示例</div>
    <h1>示例1</h1>
    <Button @click="toogle">toggle</Button>
    <Dialog v-model:visible="x" :closeOnClickOverlay="false" 
        :ok="x1" :cancel="x2"    
    >
    <div>第一行</div>
    <div>第二行</div>
    <div>第三行</div>
    </Dialog>
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
        const x1 = () => {
            return false
        }
        const x2 = () => {
            console.log("cancel...........");
            
        }
        return { x, toogle, x1, x2 }
    }
}
</script>