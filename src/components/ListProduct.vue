<script lang="ts" setup>
import { computed, onBeforeUpdate, onMounted, onUpdated, reactive, ref, watch, watchEffect } from 'vue';
import postType from '@/stores/post/post.type';
import { useStore } from 'vuex';
import ItemList from './ItemList.vue';
import { useRoute, useRouter } from 'vue-router';
import Pagination from './Pagination.vue';

const props = defineProps(['cate'])
console.log(props);

const currentPage = ref()

const postTypes = postType.Get.post
const store = useStore()

const route = useRoute()
const router = useRouter()

const data = computed(() => store.state.post.dataPost?.rows)
const totalPage = computed(() => store.state.post?.dataPost?.count)

const updateParam = async (e: any) => {
  currentPage.value = e.page
}

// onMounted(async () => {

//   await store.dispatch(postTypes, currentPage.value)
// })

watchEffect(async () => {
  router.push({ name: route.name, query: { page: currentPage.value } })
  await store.dispatch(postTypes, currentPage.value)
})

</script>
<template>
  <h1></h1>
  <div v-for="items in data" :key="items?.id">
    <ItemList :post="items" />
  </div>
  <div>
    <Pagination :total="totalPage" :currentPage="currentPage" @updateParams="updateParam" />
  </div>
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