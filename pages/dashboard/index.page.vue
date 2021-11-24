<template>
  <div class="dashboard-wrapper">
    <div class="sidebar">
      <div class="brand">
        <img src="./assets/vue-js-48.png" alt="vue js"
             width="16" height="16"
        >
        <div>FakeBook</div>
      </div>
      <div class="routes">
        <div v-for="route in routes">
          <router-link :to="{name:route.name ? route.name : route.defaultName }">
            {{ route.label || route.name }}
          </router-link>
        </div>
      </div>
    </div>
    <div class="view">
     <router-view v-slot="{ Component }">
        <Suspense>
          <component :is="Component"/>
        </Suspense>
      </router-view>
    </div>
  </div>
</template>

<script setup>
import {reactive} from 'vue'
import {routes} from "./routes.js";

const state = reactive({count: 0})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700;900&display=swap');

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.dashboard-wrapper {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 180px;
  background: rgb(45, 59, 63);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: start;
  align-items: start;
  padding: 2rem 1.5rem;
}

.sidebar .brand {
  display: flex;
  gap: .5rem;
  color: rgb(129, 199, 132);
  font-weight: bold;

  margin-bottom: 1rem;
}

.sidebar .routes {
  width: 100%;
}

.sidebar .routes > div {
  text-align: left;
  margin-bottom: .5rem;
  background: rgba(255, 255, 255, 0.05);
  width: 100%;
  padding: .25rem .5rem;
  border-radius: .5rem;
  transition: all ease 360ms;
}

.routes a {
  text-decoration: none;
  color: white;
  font-size: 14px;
}

.routes a.router-link-active {
  font-weight: bold;
  font-size: 1rem;
}


.view{
  padding: 1rem;
}
</style>
