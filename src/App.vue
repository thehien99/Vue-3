<script setup lang="ts">
import "../src/assets/index.css"
import { RouterView } from 'vue-router'
import { AxiosConfigurationHelper } from "./utils/axios-config";
import axios from "axios";


const axiosConfig: AxiosConfigurationHelper = new AxiosConfigurationHelper()
axios.interceptors.response.use(
  response => {
    return axiosConfig.axiosResponseHandler(response)
  },
  error => {
    return Promise.reject(axiosConfig.axiosNotFoundResponseHandler(error))
  }
)

</script>

<template>
  <el-config-provider>
    <div class="common-layout">
      <el-container>
        <el-header>
          <Header />
        </el-header>
        <el-main>
          <RouterView />
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </div>

  </el-config-provider>
</template>


