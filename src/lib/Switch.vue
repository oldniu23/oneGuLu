<template>
    <div>
       <button @click="toggle" :class="{checked: value}"><span></span></button>
    </div>
</template>

<script lang="ts">

export default {
    props: {
        value: Boolean
    },
    setup(props,context){
        // props-value 用于控制class(checked) toggle用于切换props的value
        const toggle = ()=>{
            context.emit('update:value',!props.value)
            // console.log(props.value,"????");
        }
        return {toggle}
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
        background: #bfbfbf;
        border-radius: $h/2;
        position: relative;

        > span{
            position: absolute;
            top: 2px;
            left: 2px;
            height: $h2;
            width: $h2;
            background: white;
            border-radius: $h2/2;
            transition: all 250ms;
        }
        // checked 白球往右 背景变蓝
        &.checked {
            background: #1890ff;
            > span {
                left: calc(100% - #{$h2} - 2px);
            }
        }
        &:active{
            >span{width: $h2+4px;}
        }
        &.checked:active{
            >span{width: $h2+4px;margin-left: -4px;}
        }
    }


</style>