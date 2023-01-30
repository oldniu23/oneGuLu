<demo>
支持size
</demo>
<template>
    <div>
        <div>
            <Button size="small">小小小</Button>
            <Button>普普普</Button>
            <Button size="big">大大大</Button>
        </div>
        <div>
            <Button size="small" theme="text">小小小</Button>
            <Button theme="text">普普普</Button>
            <Button size="big" theme="text">大大大</Button>
        </div>
        <div>
            <Button size="small" theme="link">小小小</Button>
            <Button theme="link">普普普</Button>
            <Button size="big" theme="link">大大大</Button>
        </div>
    </div>
</template>
<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: {
    Button
  }
}
</script>