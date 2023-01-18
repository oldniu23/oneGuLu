<template>
    <template v-if="visible">   
        <!-- 遮罩层 -->
        <div class="gulu-dialog-overlay" @click="onClickOverlay" ></div>
        <!-- 内容区域 -->
            <div class="gulu-dialog-wrapper">
                <div class="gulu-dialog">
                <header>标题<span @click="close" class="gulu-dialog-close"></span></header>
                <main>
                    <p>第一行</p>
                    <p>第二行</p>
                    <p>第三行</p>
                </main>
                <footer>
                    <Button @click="cancel">关闭</Button>
                    <Button level="main" @click="ok">确定</Button>
                </footer>
            </div>
        </div>
    </template>
</template>

<script lang="ts">
import func from 'vue-editor-bridge'
import Button from "./Button.vue"
export default {
    props: { 
        visible: {
            type: Boolean,
            default: false
        },
        // 是否点击遮罩层也可以关闭
        closeOnClickOverlay: {
            type: Boolean,
            default: true
        },
        ok: {
            type: Function, 
        },
        cancel: {
            type: Function
        }
    },
    components: { Button },
    setup(props, context) {
        const close = () => {
            context.emit('update:visible', false)
        }
        const onClickOverlay = () => {
            // 如果closeOnclickOverlay是true 那么关闭 否则无响应
            if(props.closeOnClickOverlay) {
                close()
            }
        }
        const ok = () => {
            // 如果点了ok 并且 ok函数的值不为fasle  就关闭
            if(props.ok && props.ok() !== false) {
                close()
            }
        }
        const cancel = ()=> {
            context.emit("cancel")
            close()
        }
        return { close, onClickOverlay, ok, cancel }
    }

}
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;
.gulu-dialog {
    background: white;
    border-radius: $radius;
    box-shadow: 0 0 3px fade-out($color: black, $amount: 0.5);
    min-width: 20em;
    max-width: 90%;
    &-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: fade-out($color: black, $amount: 0.5);
        z-index: 10;
    }
    &-wrapper {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 11;
    }
    >header {
        padding: 12px 16px;
        border-bottom: 1px solid $border-color;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 20px;
    }
    >main {
        padding: 12px 16px;
    }
    >footer {
        border-top: 1px solid $border-color;
        padding: 12px 16px;  
        text-align: right;
    }
    &-close {
        position: relative;
        display: inline-block;
        width: 16px;
        height: 16px;
        cursor: pointer;
        &::before,&::after {
            content: '';
            position: absolute;
            height: 1px;
            background: black;
            width: 100%;
            top: 50%;
            left: 50%;
        }
        &::before {
            transform: translate(-50%, -50%) rotate(-45deg);
        }
        &::after {
            transform: translate(-50%, -50%) rotate(45deg);
        }
    }

}
</style>