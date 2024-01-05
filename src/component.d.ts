import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    ElConfigProvider: (typeof import('element-plus/es'))['ElConfigProvider']
    Header: (typeof import('./components/Header.vue'))['default']
    Content: (typeof import('./components/Content.vue'))['default']
  }
}
