<template>
  <div id="timburton">

    <section class="my_project">

      <div id="background"></div>
      <h1 v-scrollanimation>TIM BURTON</h1>

      <div class="scroll-down">
        <a href="#container" v-smooth-scroll>scroll</a>
      </div>

      <div id="container">
        <h2>Tim Burton</h2>
        <div>
          <div class="title">
            <h4 v-scrollanimation class="bolder">Tim Burton, Rêveur dans l'horreur</h4>
            <a href="https://tristanseclet.com/timburton">
              <h3 v-scrollanimation class="link" data-content="VOIR_PROJET">VOIR_PROJET<img class="arrow"
                                                                          src="../../assets/svg/external-arrow.svg"
                                                                          alt=""></h3>
            </a>
          </div>

          <ul v-scrollanimation>
            <li>
              PROJET INDIVIDUEL
            </li>
            <li>
              DEV | VUE.JS BOOTSTRAP
            </li>
            <li>
              DATE | 2021
            </li>
          </ul>
        </div>

        <p v-scrollanimation>Pour terminer en beauté le troisième semestre, nous devions mettre en place un site sur un réalisateur ou une
          réalisatrice de cinéma en s’inspirant de son univers cinématographique en seulement deux journée (8h-18h par
          jour ). Ce projet comprend la réalisation d’une maquette et du site HTML/CSS lors du premier jour, et d’une
          application VueJS en utilisant des flux de données lors de la seconde journée de travail.
        </p>



        <h4 v-scrollanimation>Interface</h4>
        <p v-scrollanimation>Pour l’interface j’ai choisi d’avoir un menu fixe. Sur la version Desktop ce dernier sera une navbar
          classique et pour mobile un menu hamburger. Je souhaitais avoir une interface simple et fonctionnelle, et
          maximiser l’UX pour ce site. Afin de faciliter la recherche j’ai ajouté une barre de recherche et j’ai intégré
          les films et courts-métrages de façon que se soit lisible sur bureau et mobile.

          Le pied de page regroupe les sources et les informations complémentaires concernant le projet, tout en restant
          en cohérence avec mon harmonie colorée. Mon objectif sur cette interface était de la rendre la plus simple
          pour l’utilisateur, même lors d’un ajout de contenu avec le formulaire.
        </p>
        <div v-scrollanimation class="container-img flex">
          <img src="@/assets/img/timburton/prototype.png" alt="maquette-timburton">
        </div>

        <h4 v-scrollanimation>Développement</h4>
        <p v-scrollanimation>C’est la seconde fois que j’utilise le framework VueJs pour un projet web, ainsi ce projet est un moyen pour
          faire un point sur mes acquis concernant ce framework. N’ayant eu qu’un jour pour intégrer le site avec VueJs,
          ce projet m’a permis de développer mes connaissances et d’acquérir une meilleure méthodologie. Grâce à ce
          projet je maîtrise un peu plus VueJS qu’auparavant. En addition avec Vue j’ai utilisé BootstrapVue pour le
          placement et le responsive design. Même si ce choix n’est pas le meilleur puisque j’importe une librairie
          entière pour une seule utilisation, Bootstrap m’a permis d’intégrer la maquette rapidement.</p>


        <h4 v-scrollanimation>Bilan & acquisition</h4>
        <p v-scrollanimation>Ce projet s’étant déroulé sur deux journées, il m’a permis d’apprendre à travailler sous pression avec des
          deadlines très courtes et impossibles à dépasser. Je suis content du résultat j’ai pu effectuer tout ce que je
          souhaitais durant ces 2 jours. De plus, j’ai du apprendre a créer une maquette simple et rapide et intégrer
          des flux json au sein mon projet.</p>


        <div class="btn-projets">
          <router-link to="/scrollandride"><img src="@/assets/svg/left-arrow.svg" alt="arrow"></router-link>
          <router-link to="/motiondesign"><img src="@/assets/svg/right-arrow.svg" alt="arrow"></router-link>

        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: "TimBurton",
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

#background {
  background: url("../../assets/img/carousel/Mockup-timburton3.png") 50% 50% no-repeat;
  /*  filter: brightness(40%);*/
}

/*
.g-cursor, .g-cursor__circle {
  mix-blend-mode: difference;
  border-color: black;
  background: white;
}
*/
// jsp pk mais il faut le comment mais le mettre à savoir pk ???


</style>
