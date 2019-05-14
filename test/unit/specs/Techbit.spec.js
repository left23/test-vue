import Vue from 'vue'
import Techbit from '@/components/Techbit'

describe('Techbit.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Techbit)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })
})
