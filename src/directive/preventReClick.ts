// 按钮防抖
export default (app) => {
  app.directive('preventReClick', {
    mounted(el, binding) {
      el.addEventListener('click', () => {
        if (!el.disabled) {
          el.disabled = true
          setTimeout(() => {
            el.disabled = false
          }, binding.value || 1000)
        }
      })
    }
  })
}
