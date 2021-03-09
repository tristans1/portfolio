<template>
<div>
  <div :class="[ 'g-cursor', { 'g-cursor_hover': hover }, {'g-cursor_hide': hideCursor} ]">
    <div :style="cursorCircle" class="g-cursor__circle"></div>
    <div class="g-cursor__point" ref="point" :style="cursorPoint"></div>
  </div>
  <div id="logo">
    <p>FOLIO ©2021</p>
  </div>

  <Menu/>
  <transition
    name="fade"
    mode="out-in"
  >
    <router-view/>
  </transition>
  <Footer style="z-index: 9"/>
</div>
</template>

<script>
import Footer from "../Footer";
import Menu from "../Menu";
export default {
name: "MenuWrapper",
  components: {
    Footer, Menu
  },
  data(){
  return{
    menu: false,
    toggle: false,
    xChild: 0,
    yChild: 0,
    xParent: 0,
    yParent: 0,
    hover: false,
    hideCursor: true}
  },
  methods : {
    flipMenu() {
      this.menu = !this.menu;
      this.toggle = !this.toggle;
    },
    moveCursor(e) {
      this.xChild = e.clientX;
      this.yChild = e.clientY;
      setTimeout(() => {
        this.xParent = e.clientX - 15;
        this.yParent = e.clientY - 15;
      }, 100);
    }
  },
  computed: {
    cursorCircle() {
      return `transform: translateX(${this.xParent}px) translateY(${this.yParent}px) translateZ(0) translate3d(0, 0, 0);`
    },
    cursorPoint() {
      return `transform: translateX(${this.xChild - 3}px) translateY(${this.yChild - 3}px) translateZ(0) translate3d(0, 0, 0);`
    }
  },
  mounted() {
    document.addEventListener("mousemove", this.moveCursor);
    document.addEventListener('mouseleave', e => {
      this.hideCursor = true;
    });
    document.addEventListener('mouseenter', e => {
      this.hideCursor = false;
    });

  }
}
</script>

<style lang="scss" scoped>


/deep/ #cercle{
 border-color: #AAAAAA !important;
}
/deep/ .close-toggle .nav-toggle-bar,
/deep/ .close-toggle .nav-toggle-bar:before ,
/deep/ .close-toggle .nav-toggle-bar:after{
  background:  #AAAAAA!important;
}
/deep/ #networks div a {
  color: #AAAAAA !important;
}
/deep/ #networks a{
  color: #AAAAAA !important;
}

/deep/ #networks a:after {
  background: #AAAAAA !important;
}

//transition router

.fade-enter-active,
.fade-leave-active {
  /*transition-duration: 0.3s;
  transition-property: opacity;*/
  transition-timing-function: ease-in-out;
  transition: opacity 1s, transform 1s;

}

.fade-enter {
  opacity: 0;
  /* transform: translateX(-100vw);*/
}

.fade-leave-active {
  opacity: 0;
  transform: translateY(250vh);
}
//transition à voir pq pas ouf ouf

</style>
