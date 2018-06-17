'use strict';

const root = Vue.component('modal-slider', {
  template: '#modal-slider-template',
  data() {
    return {
      scrollY: 0
    }
  },
  methods: {
    closeModal() {
      this.scrollY = window.scrollY
      this.$emit('close-modal', this.scrollY)
    }
  },
  mounted() {
    document.addEventListener('keydown', e => {
      if(e.keyCode == 27) this.closeModal()
    })
  }
})

const modal = Vue.component('root', {
  template: '#root-template',
  data() {
    return {
      list: [],
      scrollY: 0
    }
  },
  created() {
    fetch('assets/data/data.json')
      .then(res => res.json())
      .then(data => this.list.push(...data))
  },
  methods: {
    openModal() {
      this.scrollY = window.scrollY
      this.$emit('open-modal', this.scrollY)
    }
  }
})

const screens = [
  {
    name: 'root',
    component: {
      template: root
    }
  }
]

new Vue({
  el: '#app',
  data: {
    // showModal: false,
    list: [],
    rootScrollY: 0,
    modalScrollY: 0,
    currentComp: 'root'
  },
  methods: {
    openModal(rootScrollY) {
      this.currentComp = 'modal-slider'
      this.rootScrollY = rootScrollY
      // this.showModal = true
      window.scroll(0, this.modalScrollY)
    },
    closeModal(modalScrollY) {
      this.currentComp = 'root'
      this.modalScrollY = modalScrollY
      // this.showModal = false
      // window.scroll(0, this.rootScrollY)
      // Bug with ScrollY. Returns the absolute height of the page.
      setTimeout(() => window.scroll(0, this.rootScrollY), 0)
    }
  }
})
