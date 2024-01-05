<script lang="ts" setup>

import ListProduct from './ListProduct.vue';
import SideBar from './SideBar.vue';


</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-main>
        <div>
          <ListProduct />
        </div>
      </el-main>
      <el-aside width="400px">
        <SideBar />
      </el-aside>
    </el-container>
  </div>
</template>