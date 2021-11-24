<template>
  <div>
    <h2>Sales overview</h2>
    <section1/>
    <section2 />
  </div>
</template>

<script>
import Section1 from "./overview/Section1.vue";
import Section2 from "./overview/Section2.vue";
export default {
  name: "SalesOverview",
  components: {Section2, Section1}
}
</script>

<style scoped>

</style>
