<template>
    <!-- 遮罩层 -->
    <div class="dialog-overlay"></div>
    <!-- 内容区域 -->
    <div class="dialog-wrapper">
        <header>标题</header>
        <main>
            <p>第一行</p>
            <p>第二行</p>
        </main>
        <footer>
            <Button>关闭</Button>
            <Button>确定</Button>
        </footer>
    </div>
</template>

<script lang="ts">
import Button from "./Button.vue"
export default {
    components: { Button }
}
</script>