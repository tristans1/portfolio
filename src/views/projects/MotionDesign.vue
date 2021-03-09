<template>
  <div id="motion-snk">

    <section class="my_project">

      <div id="background">
        <video playsinline autoplay muted loop>
          <source src="../../assets/videos/trailer-snk-projet2.mp4" type="video/mp4">
        </video>
      </div>
      <h1 v-scrollanimation>MOTION SNK</h1>

      <div class="scroll-down">
        <a href="#container" v-smooth-scroll>scroll</a>
      </div>

      <div id="container">
        <h2>Motion SNK</h2>
        <div>
          <div class="title">
            <h4 v-scrollanimation class="bolder">Motion design SNK</h4>
          </div>

          <ul v-scrollanimation>
            <li>
              PROJET INDIVIDUEL
            </li>
            <li>
              OUTILS | AFTER EFFECT
            </li>
            <li>
              DATE | 2020
            </li>
          </ul>
        </div>
        <div>
          <div>
            <img v-scrollanimation class="snk"
                 src="@/assets/img/motion/affiche-snk-s4.jpg"
                 alt="season finale">
          </div>


          <div>
            <p v-scrollanimation>
              Shingeki no Kyojin ou L'Attaque des Titans est un manga japonais de Hajime Isayama. Adapté en animé depuis
              2013, la série et le manga ont connu un succès mondial et est considéré déjà comme un chef-d'oeuvre. À la
              suite de 3 saisons sorties entre 2013 et 2019, la saison finale a été annoncée pour le 6 décembre 2020.
              Pour marquer cet événement, j'ai voulu recréer une vidéo de 3 minutes mettant en scène le point
              culminant du premier épisode.
            </p>
            <h4 v-scrollanimation>Intrigue</h4>
            <blockquote v-scrollanimation>"Eren, Mikasa et Armin regardent la main du Titan Colossal. ... Mikasa et Eren parlant à Hannes.
              Loin de là, le jeune Eren Jäger, âgé de dix ans se réveille en sursaut suite à un rêve prémonitoire où il voit des
              flashs de titans envahissant la ville et sa mère mourir. Sa sœur adoptive Mikasa Ackerman est penchée
              sur lui."
            </blockquote>
            <p v-scrollanimation>J'ai voulu recréer cette scène terrifiant où Eren découvre pour la première fois un titan.
              Une scène marquante dans le récit et dans l'adaptation animé. </p>

            <h4 v-scrollanimation>Outils</h4>
            <p v-scrollanimation>Pour réaliser cette vidéo j'ai utilisé le logiciel Adobe After Effect. Les différentes compositions
              varient entre scènes tirées de l'épisode n°1 de l'adaptation animée, ainsi que des planches du manga.
              L'objectif de cette création est de reproduire la terreur face aux titans, en jouant avec l'animation
              d'épisodes et du manga.</p>

            <h4 v-scrollanimation>Bilan & acquisition</h4>
            <p v-scrollanimation>Ce projet m'a permis d'approfondir mes connaissances du logiciel Adobe After Effect, tout en libérant ma
              créativité. De plus j'ai acquis quelques nouvelles compétences dans la mise en place d'effets spéciaux simples.</p>
          </div>
        </div>

        <div v-scrollanimation class="container-img">
          <img src="@/assets/img/motion/motion-aftereffect.png" alt="">

        </div>


        <div v-scrollanimation class="video">
          <video controls src="../../assets/videos/Seclet_Tristan_Motion_SNK.mp4"></video>
        </div>


        <div class="btn-projets">
          <router-link to="/timburton">    <img src="@/assets/svg/left-arrow.svg"  alt="arrow"></router-link>
          <router-link to="/room"><img src="@/assets/svg/right-arrow.svg" alt="arrow"></router-link>

        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: "MotionDesign",
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
.scroll-down a, .scroll-down::after, .scroll-down::before {
  color: white;
  border-color: #fff;
}

/*h3{
  font-family: 'Open Sans', sans-serif;
  font-weight: bolder;
  font-size: 25px;
  margin-bottom: 3rem;
}*/
.title {
  margin-bottom: 7rem;
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

h1 {
  mix-blend-mode: difference;
}

.video {
  width: 100%;
  justify-content: center;
  margin-top: 5rem;
}

video {
  width: 100%;
  text-align: center;

}

blockquote {
  font-style: italic;
}

#container div:nth-child(3) {
  display: flex;
}

#container div:nth-child(3) div:nth-child(1) {
  flex-basis: 35%;
}

#container div:nth-child(3) div:nth-child(2) {
  flex-basis: 65%;
  display: block;
  padding-left: 2rem;
}

#container > div:nth-child(3) > div:nth-child(1) > img {
  max-width: 100%;
  margin-bottom: 3rem;
}

#container > div:nth-child(3) > div:nth-child(2) {

}

/*
.g-cursor, .g-cursor__circle {
  mix-blend-mode: difference;
  border-color: black;
  background: white;
}
*/
// jsp pk mais il faut le comment mais le mettre à savoir pk ???
.container-img {
  max-width: 100%;
  width: 100%;
}

.container-img img {
  max-width: 100%;
}

</style>
