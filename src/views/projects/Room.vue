<template>
  <div id="atlantis">

    <section class="my_project">

      <div id="background">
        <video playsinline autoplay muted loop>
          <source src="../../assets/videos/3D-overlay.mp4" type="video/mp4">
        </video>
      </div>
      <h1 v-scrollanimation>ROOM 3D</h1>

      <div class="scroll-down">
        <a href="#container" v-smooth-scroll>scroll</a>
      </div>

      <div id="container">
        <h2>Room 3D</h2>
        <div>
          <div class="title">
            <h4 v-scrollanimation class="bolder">My room in 3D</h4>
            <!--            <a href="https://tristanseclet.com/template-projets1">-->
            <!--              <h3 v-scrollanimation class="link" data-content="VIEW_PROJECT">PROJET°<img class="arrow" src="../../assets/svg/external-arrow.svg" alt=""></h3>-->
            <!--            </a>-->
          </div>

          <ul v-scrollanimation>
            <li>
              PROJET COLLECTIF
            </li>
            <li>
              SOFT | BLENDER
            </li>
            <li>
              DATE | 2021
            </li>
          </ul>
        </div>

        <p v-scrollanimation>
          Le projet consite à développer notre bureau de rêve en 3D et de l'intégrer dans un projet three.js afin de
          pouvoir animer des éléments et visiter virtuellement ce bureau. La pièce met en place une petite intrigue où
          l'utilisateur doit trouver le code de notre coffre-fort et ainsi accéder à son trésor..
        </p>

        <div v-scrollanimation class="container-img">
          <img src="@/assets/img/room/myroom3d.png" alt="room3D">
        </div>

        <div class="flex container-img">
          <img v-scrollanimation class="flex-b" src="@/assets/img/room/desktop.png" alt="">
          <img v-scrollanimation class="flex-b" src="@/assets/img/room/monitor.png" alt="">
        </div>

        <div style="display: flex">
          <div class="block" style=" padding-right: 2rem;">
            <h4 v-scrollanimation>Modélisation</h4>
            <p v-scrollanimation>Nous avons modélisé les objets de notre pièce avec le logiciel Blender.
              De mon côté j'ai réalisé dans l'intégralité le bureau, les moniteurs, le clavier ainsi que la souris et
              son tapis.</p></div>
          <div class="block">

            <h4 v-scrollanimation>Développement</h4>
            <p v-scrollanimation>Ce projet m'a fait découvrir WebGL ainsi que three.js. Concernant le développement,
              nous avons intégré des animations au click du clavier de l'utilisateur, ainsi que l'animation d'un
              coffre-fort. Le but est de créer une petite intrigue permettant à l'utilisateur de trouver le mot de
              passe et ainsi d'accéder au trésor!</p>
          </div>
        </div>


        <h4 v-scrollanimation>Bilan & acquisition</h4>
        <p v-scrollanimation>J'ai acquis de nouvelles compétences concernant la 3D, puisque je n'avais jamais fait
          de modélisation auparavant. De plus cela m'a permis de découvrir three.js et la façon dont intégrer de la 3d
          dans un site web. Cela est très intéressant et j'y ai pris beaucoup de plaisir.</p>
        <div class="btn-projets">
          <router-link to="/motiondesign"><img src="@/assets/svg/left-arrow.svg" alt="arrow"></router-link>
          <router-link to="/atlantis"><img src="@/assets/svg/right-arrow.svg" alt="arrow"></router-link>

        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: "Room",
  data() {
    return {
      menu: false,
      toggle: false,
      xChild: 0,
      yChild: 0,
      xParent: 0,
      yParent: 0,
      hover: false,
      hideCursor: true
    }
  },
  methods: {
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
    window.scrollTo(0, 0)
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

/*h3{
  font-family: 'Open Sans', sans-serif;
  font-weight: bolder;
  font-size: 25px;
  margin-bottom: 3rem;
}*/

#background {
  //background: url("../../assets/img/carousel/Mockup-atlantis2.png") 50% 50% no-repeat;
  /*  filter: brightness(40%);*/
}

#background video {
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -100;
  transform: translateX(-50%) translateY(-50%);
  background-size: cover;
}

video {
  width: 100%;
  text-align: center;

}

/*
.g-cursor, .g-cursor__circle {
  mix-blend-mode: difference;
  border-color: black;
  background: white;
}
*/
// jsp pk mais il faut le comment mais le mettre à savoir pk ???

.flex {
  display: flex !important;
}


</style>
