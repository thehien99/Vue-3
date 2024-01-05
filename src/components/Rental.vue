<script  lang="ts" setup>
import { useStore } from 'vuex';
import ListProduct from './ListProduct.vue';
import { useRoute } from 'vue-router';
import { computed, ref, watchEffect } from 'vue';
import { formatVietnameseToString } from '@/utils/formatRouter';

const data = ref('')
const cateCurrent = ref({})
const store = useStore()
const route = useRoute()
const cate = computed(() => store.state?.post?.data)

watchEffect(() => {
  const state = cate.value?.find((item: any) => `/${formatVietnameseToString(item?.value)}` === route.path)
  cateCurrent.value = state
  if (cateCurrent.value) data.value = cateCurrent.value?.code

})
</script>
<template>
  <div>
    <ListProduct :cate="data" />
  </div>
</template>