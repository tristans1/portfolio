<template>
  <div id="atlantis">

    <section class="my_project">

      <div id="background"></div>
      <h1 v-scrollanimation>ATLANTIS</h1>

      <div class="scroll-down">
        <a href="#container" v-smooth-scroll>scroll</a>
      </div>

      <div id="container">
        <h2>Atlantis</h2>
        <div>
          <div class="title">
            <h4 v-scrollanimation class="bolder">ATLANTIS, NOT AN ECOLOGIST</h4>
            <a href="https://tristanseclet.com/template-projets1">
              <h3 v-scrollanimation class="link" data-content="VOIR_PROJET">VOIR_PROJET<img class="arrow" src="../../assets/svg/external-arrow.svg" alt=""></h3>
            </a>
          </div>

          <ul v-scrollanimation>
            <li>
              PROJET INDIVIDUEL
            </li>
            <li>
              DEV | HTML CSS JS
            </li>
            <li>
              DATE | 2019
            </li>
          </ul>
        </div>

        <p v-scrollanimation>Aquaman en tant que roi est considéré comme responsable de la pollution des Atlantes. En parallèle avec la
          fiction,
          la pollution des océans par l’homme est un problème urgent. Ce premier site a pour objectif d’alerter les
          jeunes
          utilisateurs sur un problème écologique recént. En plus de parler d’un problème majeur, ce site propose des
          solutions envisageables pour l’utilisateur dans un site web optimisé pour mobile.
        </p>
        <div class="container-img">
          <img src="@/assets/img/room/myroom3d.png" alt="room3D">

        </div>

        <div style="display: flex">
          <div style="display: block ; padding-right: 2rem;">
          <h4 v-scrollanimation>Interface</h4>
          <p v-scrollanimation>C’est la première fois que j’utilise Adobe XD pour le prototypage, ainsi j’ai commencé par dessiner une
            interface simple pour mon projet, cela me donne une idée concrète de l’interface et des possibles défauts
            avant de passer à une maquette complexe. Ce premier site est un site optimisé pour mobile.</p>
          </div>

          <div style="display: block">
          <h4 v-scrollanimation>Développement</h4>
          <p v-scrollanimation>Ce permier projet est aussi ma première expérience dans le développement de site(s) web. Ce projet devait
            nécessairement être développé avec HTML5 et CSS. Curieux et passsionné par ce domaine j’ai appris les bases du
            JavaScript ES5 pour intergrer quelques animations et intercations via des libraires tel que scrollreveal.js pour
            animer la galerie photo.</p>
          </div>
        </div>

        <h4 v-scrollanimation>Bilan & acquisition</h4>
        <p v-scrollanimation>Ce projet fut une révélation pour moi. Apprendre à développer un site web en quasi totale autonomie m’a permis de
          découvrir l’étendue des possibilités qu’offre Internet et le monde du Web et d’apprendre de nouveaux langages. Ce
          projet m’a permis de confirmé en moi cette passion. De plus, il m’a permit d’acquérir des connaissances en
          prototypage, et des langages HTML5, CSS et JS.</p>
        <div class="btn-projets">
          <router-link  to="/motiondesign"> <img src="@/assets/svg/left-arrow.svg"  alt="arrow"></router-link>
          <router-link  to="/scrollandride"><img src="@/assets/svg/right-arrow.svg" alt="arrow"></router-link>

        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
name: "Atlantis",
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
  background: url("../../assets/img/carousel/Mockup-atlantis2.png") 50% 50% no-repeat;
/*  filter: brightness(40%);*/
}

/*
.g-cursor, .g-cursor__circle {
  mix-blend-mode: difference;
  border-color: black;
  background: white;
}
*/// jsp pk mais il faut le comment mais le mettre à savoir pk ???



</style>
