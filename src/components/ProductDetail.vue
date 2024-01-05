<script lang="ts" setup>
import postType from '@/stores/post/post.type';
import { watchEffect, computed, onUpdated, ref, onMounted, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

const route = useRoute()
const store = useStore()
const getPostId = postType.Get.post
const postId = route.params?.id
const dataCate = ref([])
const res = computed(() => store.state.post?.dataPost)
console.log(res.value);

onMounted(async () => {
  await store.dispatch(getPostId, { id: postId })


})
</script>
<template>
  <div className="w-full h-full flex gap-4 mt-7">
    <div className="w-3/5 bg-[#fff] border rounded-md border-[#dedede]">
      <div class="block text-center">
        <el-carousel height="250px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small justify-center" text="2xl">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div>

      </div>
    </div>
  </div>
</template>