<template>
    <div>导航栏 | 
        <router-link to="/">First</router-link> | 
        <router-link to="/second">Second</router-link>
    </div>
  <hr/>
  <router-view/>
  <!-- router-view用来表示在App.vue中渲染的组件 -->
</template>

<script>
export default {
    name: 'app',
}
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>