<template>
  <div>
    <h1>SPA</h1>
    <p>client only page</p>
    <div class="counter" >
      <button @click="counter++">
        Counter: {{counter}}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "index.page",
  data() {
    return {
      counter: 1,
    }
  }
}
</script>

<style scoped>

</style>
