<template>
    <h1>Button示例</h1>
    <code-demo :component="Button1Demo"/>
    <code-demo :component="Button2Demo"/>
    <code-demo :component="Button3Demo" />
    <code-demo :component="Button4Demo" />
    <code-demo :component="Button5Demo" />
</template>
<script lang="ts">
import Button from '../lib/Button.vue'
import CodeDemo from './CodeDemo.vue';
import Button1Demo from './Button1Demo.vue'
import Button2Demo from './Button2Demo.vue'
import Button3Demo from './Button3Demo.vue'
import Button4Demo from './Button4Demo.vue'
import Button5Demo from './Button5Demo.vue'
export default{
    components:{Button, CodeDemo},
    setup(){
        const onClick = ()=>{
            // console.log("hi。。。");
        }
        return {onClick,Button1Demo,Button2Demo,Button3Demo,Button4Demo,Button5Demo}
    }
}
</script>