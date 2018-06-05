<template>
  <transition name="modal">
    <div class="modal-mask" v-show="show">
      <div class="modal-container" @click.stop>

        <modal :show="show" @close="close">
          <div class="modal_root">

            <div class="modal_slider_root">
              <div class="modal_left">
                <div class="modal_arrow_left">
                  <div class="arrow_sym">❮</div>
                </div>
              </div>
        
              <div class="modal_centre">
                <div class="modal_header_cont">
                  <div class="modal_header_text">{{ test }}</div>
                  <div class="modal_close" @click="close">✖︎</div>
                </div>
                
                <div class="modal_image">
                  <div class="modal_hold_img">
                    <img class="test_img" src="https://cdnb.artstation.com/p/assets/images/images/009/516/777/large/simon-goinard-dune-bene-2.jpg?1520304335">
                  </div>
                </div>
              </div>
        
              <div class="modal_right">
                <div class="modal_arrow_right">
                  <div class="arrow_sym">❯</div>
                </div>
              </div>
            </div>
        
            <div class="modal_side_root">
              <div class="modal_side_fixed">
                <div class="modal_close modal_side_close" @click="close">︎︎✖︎</div>
                <div class="modal_side_header_cont">
                  <div class="modal_side_title">
                    <!-- <h3> -->
                      Главная страница
                    <!-- </h3> -->
                  </div>
                  <div class="modal_side_desc">
                    <p>
                      Собственно, с нее начался сайт, это был самый первый концепт. Жмешь на кнопку и получаешь аниме для просмотра. Можно выставлять фильтры по жанру, году и оценке на MyAnimeList. <br><br>Задумывался как учебный проект, чтобы набить руку в дизайне и веб-разработке.
                    </p>
                  </div>
                </div>
              </div>
              
            </div>
        
          </div>
        </modal>

      </div>
    </div>
  </transition>
</template>
<script>
export default {
<!-- Vue.component('NewModal', { -->
  template: '#slider-modal-template',
  props: {
    show: false,
    test: 'alksdjlakjsdlkasj'
  },
  data: {
    // test: 'ajsdkjasd'
  },
  methods: {
    close: function() {
      this.$emit('close')
      document.querySelector('#ROOT').classList.remove('display-none')
    },
  },
  mounted: function() {
    document.addEventListener('keydown', e => {
      if(this.show && e.keyCode == 27) {
        this.close()
      }
    })
  }
<!-- }) -->
}
</script>