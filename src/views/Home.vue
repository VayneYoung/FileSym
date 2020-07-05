<template>
  <div>welcome home page</div>
</template>

<script>
export default {
  mounted () {
    this.$http.get('/home/getData').then(res => {
      console.log(res)
    })
  }
}
</script>

<style>

</style>
