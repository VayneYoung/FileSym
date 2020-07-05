<template>
  <el-menu
      router
      id="el-menu"
      default-active="/"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item @click="changeCurrentMenu(item)" :index="item.path" v-for="item in noChildren" :key="item.path">
        <i :class="'el-icon-'+item.icon"></i>
        <span slot="title">{{item.labal}}</span>
      </el-menu-item>
      <el-submenu index="1" v-for="(item,index) in hasChildren" :key="index">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{item.labal}}</span>
        </template>
        <el-menu-item-group v-for="subItem in item.children" :key="subItem.path">
          <el-menu-item :index="subItem.path" @click="changeCurrentMenu(subItem)">
              <i :class="'el-icon-'+subItem.icon"></i>
              <span slot="title">{{subItem.labal}}</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
</template>

<script>
export default {
  computed: {
    noChildren () {
      return this.asideMenu.filter(item => !item.children)
    },
    hasChildren () {
      return this.asideMenu.filter(item => item.children)
    }
  },
  data: () => {
    return {
      asideMenu: [{
        path: '/',
        labal: '首页',
        icon: 's-home'
      }, {
        path: '/file',
        labal: '文件管理',
        icon: 'notebook-1'
      }, {
        path: '/user',
        labal: '用户管理',
        icon: 'user'
      }, {
        labal: '其他',
        icon: 'menu',
        children: [{
          path: '/page1',
          labal: '页面1',
          icon: 's-flag'
        }, {
          path: '/page2',
          labal: '页面2',
          icon: 's-flag'
        }]
      }]
    }
  },
  methods: {
    changeCurrentMenu (item) {
      this.$store.commit('changeMenu', item.labal)
    }
  }
}
</script>

<style scoped>
#el-menu{
    height: 100vh;
    border: none;
}
</style>
