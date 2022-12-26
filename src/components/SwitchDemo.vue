<template>
    <div>
        <button><span></span></button>
    </div>
</template>
<script>
import Switch from '../lib/Switch.vue'
export default {
    components: {Switch},
}
</script>

<style lang="scss" scoped>
    $h: 22px;
    $h2: $h - 4px;
    button{
        height: $h;
        width: $h*2;
        border: none;
        background: blue;
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
    }
    // hover 白球往右
    button:hover > span {
        left: calc(100% - #{$h2} - 2px);
    }
</style>