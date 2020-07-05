<template>
  <div id="header">
      <div id="l-content">
        <el-button id="el-btn" type="primary" icon="el-icon-menu" size="small"></el-button>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">文件管理系统</el-breadcrumb-item>
            <el-breadcrumb-item>{{this.$store.state.currentMenu}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div id="r-content">
        <el-dropdown trigger="click" size="small">
            <span class="el-dropdown-link">
                {{this.$store.state.userName}}
                <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-notebook-2">个人信息</el-dropdown-item>
                <el-dropdown-item icon="el-icon-switch-button">退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#header{
    background: #000;
    color: #fff;
    line-height: 60px;
    height: 60px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
}
#l-content{
    display: flex;
    align-items: center;
}
#el-btn{
    margin-right: 20px;
}
</style>
