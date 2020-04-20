<template>
  <el-row :gutter="20" class="header-row">
    <el-col :span="4" :offset="3">
      <router-link to="/">
        <img class="header_logo" src="@/assets/home/header_logo.png" alt="">
      </router-link>
    </el-col>
    <el-col :span="7" :offset="3">
      <el-menu :default-active="activeIndex" class="el-menu-demo header-col" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1" class="header-word">
          <router-link class="header-word-router" to="/">
            首页
          </router-link>
        </el-menu-item>
        <el-menu-item index="2" class="header-word">
          <router-link class="header-word-router" to="/user">
            我的资料
          </router-link>
        </el-menu-item>
        <el-menu-item index="3" class="header-word">
          <router-link class="header-word-router" to="/space">
            我的空间
          </router-link>
        </el-menu-item>
        <el-menu-item index="4" class="header-word">
          <router-link class="header-word-router" to="/account">
            我的账户
          </router-link>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'UserHeader'
}
</script>

<style>
  .header-row{
    border-bottom: solid 1px #e6e6e6;
    position: relative;
    width: 100%;
  }
    .header_logo{
      height: 60px;
    }
    .header-col{
      border-bottom: solid 0px #fff;
    }
      .header-word{
        font-size: 16px;
      }
        .el-menu.el-menu--horizontal{
          border-bottom: solid 0px #fff;
        }
          .header-word-router{
            text-decoration: none;
          }
</style>
