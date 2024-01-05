import ContentVue from '@/components/Content.vue'
import ProductDetailVue from '@/components/ProductDetail.vue'
import RentalVue from '@/components/Rental.vue'
import { PATH, ROUTER_NAME } from '@/constants/router-constanst'
import component from 'element-plus/es/components/tree-select/src/tree-select-option.mjs'

const routers = [
  {
    name: ROUTER_NAME.home,
    path: PATH.home,
    component: ContentVue
  },
  {
    name: ROUTER_NAME.CTCH,
    path: PATH.CTCH,
    component: RentalVue
  },
  {
    name: ROUTER_NAME.CTMB,
    path: PATH.CTMB,
    component: RentalVue
  },
  {
    name: ROUTER_NAME.CTN,
    path: PATH.CTN,
    component: RentalVue
  },
  {
    name: ROUTER_NAME.CTPT,
    path: PATH.CTPT,
    component: RentalVue
  },
  {
    name: ROUTER_NAME.Produce_Detail,
    path: PATH.Produce_Detail,
    component: ProductDetailVue
  }
]
export default [...routers]
