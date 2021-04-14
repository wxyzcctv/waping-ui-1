<template>
  <router-view/>
  <!-- router-view用来表示在App.vue中渲染的组件 -->
</template>

<script lang="ts">
import { provide, ref } from 'vue'
export default {
    name: 'app',
    setup() {
        const asideVisible = ref(false)
        provide('asideVisible',asideVisible)
        // 在父组件中通过provide设置与子组件相互连接的变量，这个变量可以与任何层级的子组件通信
    }
}
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>
