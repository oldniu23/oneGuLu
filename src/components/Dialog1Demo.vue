<demo>
常规用法
</demo>
<template>
    <div>
        <Button @click="toggle">打开对话框</Button>
        <Dialog v-model:visible="x" :closeOnClickOverlay="false" 
            :ok="x1" :cancel="x2"    
        >
            <template v-slot:content>
                <strong>hi</strong>
                <div>hi2</div>
            </template>
            <template v-slot:title>
                <strong>加粗的标题</strong>
            </template>
        </Dialog>
   </div>
</template>
<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import {
  ref
} from 'vue'
export default {
  components: {
    Dialog,
    Button
  },
  setup() {
    const x = ref(false)
    const toggle = () => {
      x.value = !x.value
    }
    const x1 = () => {
      return false
    }
    const x2 = () => {}
    return {
      x,
      toggle,
      x1,
      x2
    }
  }
}
</script>