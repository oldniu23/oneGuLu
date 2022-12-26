<template>
    <div>
       <button @click="toggle" :class="{checked}"><span></span></button>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
    setup(){
        // 常量x 用于控制class(checked) toggle用于切换x的value
        const checked = ref(false)
        const toggle = ()=>{
            checked.value = !checked.value
        }
        return {checked,toggle}
    }
}
</script>

<style lang="scss" scoped>
    $h: 22px;
    $h2: $h - 4px;
    button{
        height: $h;
        width: $h*2;
        border: none;
        background: grey;
        border-radius: $h/2;
        position: relative;
    }
    span{
        position: absolute;
        top: 2px;
        left: 2px;
        height: $h2;
        width: $h2;
        background: white;
        border-radius: $h2/2;
        transition: left 250ms;
    }
    // checked 白球往右 背景变蓝
    button.checked {
        background: blue;
    }
    button.checked > span {
        left: calc(100% - #{$h2} - 2px);
    }
    
</style>