<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const props = defineProps(['total', 'currentPage'])
const emit = defineEmits(['updateParams'])

const limit = ref(5)
const current = ref(props.currentPage || 1)
const handleChangeCurrentPage = (val: number) => {

  current.value = val
  emit('updateParams', { ...props.currentPage, page: val })
}

</script>
<template>
  <el-pagination background layout="prev, pager, next" :total="props.total" v-model:page-size="limit"
    v-model:current-page="current" :pager-count="limit" @current-change="handleChangeCurrentPage" />
</template>