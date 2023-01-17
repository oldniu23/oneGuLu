<template>
        <button class="gulu-button"
            :class="`theme-${theme}`">
            <slot />
        </button>      
</template>
<script lang="ts">
export default {
    props:{
        theme:{
            type: String,
            default: "button"
        }
    }
}
</script>

<style lang="scss" >
div {
    $h: 32px;
    $border-color: #d9d9d9;
    $color: #333;
    $blue: #40a9ff;
    $radius: 4px;

    .gulu-button {
        box-sizing: border-box;
        height: $h;
        padding: 0 12px;
        cursor: pointer;

        display: inline-flex;
        justify-content: center;
        align-items: center;
        white-space: nowrap;
        background: white;
        color: $color;
        border: 1px solid $border-color;
        border-radius: $radius;
        box-shadow: 0 1px 0 fade-out($color: #000000, $amount: 0.95);
        margin-right: 8px;
        
        &:focus {
            color: $blue;
            outline: none;
            border-color: $blue
        };

    }
}
</style>