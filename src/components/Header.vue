<script lang="ts" setup>
import { ROUTER_NAME } from '@/constants/router-constanst';
import postType from '@/stores/post/post.type';
import { formatVietnameseToString } from '@/utils/formatRouter';
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';

const getCategory = postType.Get.category
const store = useStore()
const data = ref([])
onMounted(async () => {
  const res = await store.dispatch(getCategory)
  data.value = res

})

</script>
<template>
  <div class="w-full h-[50px] mt-[12px] bg-blue-500">
    <ul class="flex justify-center items-center leading-[50px] text-white font-bold ">
      <router-link to="/" class="me-4 font-bold">Trang Chủ</router-link>
      <li class="me-4 hover:bg-red-200" v-for="items in data" :key="items?.id">
        <router-link :to="`${formatVietnameseToString(items?.value)}`">
          {{ items?.value }}
        </router-link>
      </li>
    </ul>
  </div>
</template>