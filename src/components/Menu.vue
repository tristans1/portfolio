<template>
  <div style="position: fixed; z-index: 10; " id="monMenu">

    <div id="cercle" style="position: fixed; z-index: 10;" v-bind:class="[menu ? 'open-toggle' : 'close-toggle']">
      <div style="position: fixed" id="nav-toggle"
           v-on:click=" flipMenu">
        <div class="nav-toggle-bar"></div>
      </div>
    </div>


    <nav class="menu" v-bind:class="[menu ? 'open-menu' : 'close-menu']">
      <ul>
        <li  v-on:click="flipMenu">
          <router-link to="/" class=" letter-spaced " >HOME</router-link>
        </li>
        <li  v-on:click="flipMenu">
          <router-link to="/work" class="letter-spaced " >WORK</router-link>
        </li>
        <li  v-on:click="flipMenu">
          <router-link to="/about" class="letter-spaced ">ABOUT</router-link>
        </li>
        <li  class="menu-networks">
          <a href="https://www.linkedin.com/in/tristan-seclet-4066a71a2/"><img width="25px" src="@/assets/img/linkedin.png" alt="LinkedIn"></a>
          <a href="https://github.com/tristans1"><img width="25px" src="@/assets/img/github.png" alt="GitHub"></a>
          <a href="https://www.instagram.com/tristan_sclt1/"><img width="25px"
                          src="@/assets/img/instagram.png"
                          alt="Instagram"></a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      menu: false,
      toggle: false
    }
  },
  methods: {
    flipMenu() {
      this.menu = !this.menu;
      this.toggle = !this.toggle;
    }
  }
}
</script>

<style lang="scss" scoped>
/*menu*/

.close-menu {
  position: fixed;
  z-index: 1;
  top: 0;
  background: rgba(70, 70, 70, 0.3);
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  visibility: visible;
  overflow: hidden;
  transform: translateX(100vw);
  transition: all .4s ease-in-out;
}

.open-menu {
  position: fixed;
  pointer-events: auto;
  visibility: visible;
  transform: translateX(0);
  overflow: hidden;
  z-index: 1;
  top: 0;
  background: /*rgba(255, 140, 26, 0.95)*/ rgba(56,56,56,0.95);
  left: 70%;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .4s ease-in-out;
  /*border-radius: 5% 0 0 5% ;*/
}

.menu > ul > li {
  text-align: center;
  margin-top: 20%;
  margin-bottom: 20%;
}

.open-menu {
  overflow: hidden;
}

/*#nav-toggle {
  z-index: 2;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 20px;
  right: 28px;
  display: flex;
  align-items: center;
  justify-content: center;

}*/
#cercle {
  //border-radius: 50%;
  //width: 50px;
  width: 70px;
  height: 50px;
  top: 15px;
  //right: 18px;
  right: 0;
  border-radius: 0;

}

#cercle.close-toggle {
  border: 1px solid #383838;
  border-right: none;
  transition: .3s all ease;
}

#cercle.open-toggle {
  border: 1px solid #fff !important;
  /*border-right: none;*/
  transition: .3s all ease;
  border-radius: 50%;
  width: 50px;
  right: 18px;
}

#nav-toggle {
  z-index: 2;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 25px;
  right: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#nav-toggle .nav-toggle-bar,
#nav-toggle .nav-toggle-bar::before,
#nav-toggle .nav-toggle-bar::after {
  content: '';
  background: #383838;
  width: 100%;
  height: 2px;
  position: absolute;
  right: 0;
}

.nav-toggle-bar::before {
  top: -8px
}

.nav-toggle-bar::after {
  top: 8px
}

/*animation croix*/
.open-toggle #nav-toggle .nav-toggle-bar {
  transform: rotate(135deg);
  background: #fff;
  transition: all .4s ease;
}

.open-toggle #nav-toggle .nav-toggle-bar::before,
.open-toggle #nav-toggle .nav-toggle-bar::after {
  background: #fff;
  transform: rotate(90deg);
  top: 0;
  transition: all .4s ease;
}

.open-toggle #nav-toggle .nav-toggle-bar::before,
.open-toggle #nav-toggle .nav-toggle-bar::after {
  top: 0;
  transition: all .4s ease;
}

.close-toggle #nav-toggle .nav-toggle-bar,
.close-toggle #nav-toggle .nav-toggle-bar:before,
.close-toggle #nav-toggle .nav-toggle-bar:after {
  content: '';
  background: #383838;
  width: 100%;
  height: 2px;
  position: absolute;
  left: 0;
  transition: all .4s ease;

}

ul > li > a.letter-spaced {
  color: #ffffff;
}


.menu-networks a {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.menu-networks {
  position: relative;
  top: 240px;
}


</style>
