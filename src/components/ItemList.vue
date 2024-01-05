<script lang="ts" setup>
import { ROUTER_NAME } from '@/constants/router-constanst';
import { formatVietnameseToString } from '../utils/formatRouter'
const props = defineProps(["post"])

const image = (JSON.parse(props?.post?.images?.image)[0]);
const description = (JSON.parse(props?.post?.description));
</script>
<template>
  <el-row :gutter="20" class="flex justify-around p-5">
    <el-col :span="8">
      <div class="grid-content ep-bg-purple">
        <img :src="image" alt="Hinh" class="w-[255px] h-[250px] object-cover">
      </div>
    </el-col>
    <el-col :span="16">
      <div class="grid-content ep-bg-purple">
        <router-link
          :to="`${ROUTER_NAME.Produce_Detail}/${formatVietnameseToString(props.post?.title?.replaceAll('/', ''))}/${props.post?.id}`"
          class="font-bold text-lg text-red-700">{{
            props?.post?.title
          }}</router-link>
        <div class="flex flex-col mt-3">
          <span>{{ props?.post?.address }}</span>
          <span class="mt-4 text text-neutral-500">{{ description.toString() }}</span>
        </div>
        <div class="flex justify-between mt-3 font-bold">
          <div>
            <h1>Giá: {{ props?.post?.attributes?.price }}</h1>
            <h1>Diện Tích: {{ props?.post?.attributes?.acreage }}</h1>
          </div>
          <div>
            <h1>Liên hệ: {{ props?.post?.sellers?.phone }}</h1>
            <a :href="`https://zalo.me/${props?.post?.sellers?.zalo}`" target="_blank" class="bg-blue-500 "> Nhắn
              ZaLo</a>
          </div>
        </div>
      </div>

    </el-col>
  </el-row>
</template>

<style>
.text {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 25px;
  -webkit-line-clamp: 3;
  height: 75px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
</style>