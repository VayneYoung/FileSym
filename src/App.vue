<template>
  <div id="app">
    <el-container>
      <el-aside width="200px"><common-aside></common-aside></el-aside>
      <el-container>
        <el-header><common-header/></el-header>
        <el-main><router-view/></el-main>
      </el-container>
    </el-container>
    <!-- <router-view/> -->
  </div>
</template>

<script>

import CommonAside from './components/CommonAside'
import CommonHeader from './components/CommonHeader'
export default {
  name: 'App',
  components: {
    CommonAside,
    CommonHeader
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
#app{
  height: 100vh;
}
.el-header{
  padding: 0;
}
</style>
