<template>
  <h1>Sales Page</h1>
  <div class="nested-routes">
    <router-link v-for="route in salesChildRoutes"
                 :to="{name:route.name}" >
      {{route.label || route.name}}
    </router-link>
  </div>
  <div>
    <router-view v-slot="{ Component }">
      <Suspense>
        <component :is="Component"/>
      </Suspense>
    </router-view>
  </div>
</template>

<script>
import {routes} from "../routes.js";
export default {
  name: "Sales",
  computed: {
    salesChildRoutes() {
      const sales = routes.find(it => it.path.endsWith('/sales'));
      return sales && sales.children ? sales.children : [];
    }
  }
}
</script>

<style scoped>
.nested-routes{
  padding: 1rem;
  display: flex;
  gap: 1rem;
}
.nested-routes a{
  text-decoration: none;
}
.nested-routes a.router-link-exact-active{
  font-weight: bold;
}
</style>
