<template>
  <div>
    <section class="my_project">
      <!--<div :class="[ 'g-cursor', { 'g-cursor_hover': hover }, {'g-cursor_hide': hideCursor} ]">
        <div :style="cursorCircle" class="g-cursor__circle"></div>
        <div class="g-cursor__point" ref="point" :style="cursorPoint"></div>
      </div>-->
      <div id="background"></div>
      <h1 v-scrollanimation>SCROLL <br/>& RIDE</h1>

      <div class="scroll-down">
        <a href="#container" v-smooth-scroll>scroll</a>
      </div>

      <div id="container">
        <h2 class="desktop">Scroll & ride</h2>
        <h2 class="mobil">S&R</h2>
        <div>
          <div class="title">
            <h4 v-scrollanimation class="bolder">SCROLL & RIDE</h4>
            <a href="https://tristanseclet.com/landingpage/">
              <h3 v-scrollanimation class="link" data-content="VOIR_LANDING">VOIR_LANDING<img class="arrow" src="../../assets/svg/external-arrow.svg" alt=""></h3>
            </a>
            <br/>

            <a  href="https://tristanseclet.com/landingpage/">
              <h3 v-scrollanimation  class="link" data-content="VOIR_SITE">VOIR_SITE<img class="arrow"
                                                                                            src="../../assets/svg/external-arrow.svg"
                                                                                            alt=""></h3>
            </a>
          </div>

          <ul v-scrollanimation>
            <li>
              PROJET COLLECTIF
            </li>
            <li>
              DEV | HTML CSS PHP
            </li>
            <li>
              DATE | 2020
            </li>
          </ul>
        </div>

        <p v-scrollanimation>Ce projet se compose de deux sites web : la page promotionnelle ( landing page ) et le site fonctionnel.
          Durant ce projet j’occupais la place de chef de projet et responsable développement.
          Ce projet nommé Scroll & Ride permettra de trouver des endroits spécifiques pour rouler. Scroll & Ride
          concerne un vaste public, les BMX, les skateurs, les trottiriders, les rollers... En résumé les sports de
          glisse. Les utilisateurs de Scroll & Ride pourront également profiter de notre application/site web, afin de
          trouver des événements près de chez eux concernant leurs sports.
        </p>

        <div class="container-img">
          <img v-scrollanimation src="@/assets/img/scrollandride/scrollandride-landing-work.png" alt="scrollandride-landing-work.png">
        </div>


        <h4 v-scrollanimation>Interface</h4>
        <p v-scrollanimation>Malgré mon rôle de développeur j’ai réalisé l’intégralité de la maquette de la page promotionnelle. Je voulais que l’utilisateur soit plongé dans le monde de
          la ride dès l’entrée et émerveillé lors de sa première visite. J’ai intégré un effet de parallaxe
          pour l’image en fond ainsi qu’un effet d’apparition des titres au scroll lors de la navigation, afin
          d’apporter une bonne UX. L’interface se veut sobre et dynamique où l’attention se porte sur le contenu, afin
          de pousser l’utilisateur à s’inscrire.
        </p>

        <p v-scrollanimation>Les deux sites présentant des éléments similaires pour garder une cohérence. L’interface du site est moderne et comprend beaucoup de
          call-to-action afin de pousser l’utilisateur à créer son compte. La page d’accueil est aussi la page où sont
          disposés les spots et skateparks, comprenant une description, une photo et son lieu.</p>

        <h4 v-scrollanimation>Développement</h4>
        <p v-scrollanimation>Pour développer la landing page j’ai donc utiliser l’indispensable HTML et CSS.
          Pour l’apparition des titres et boutons s’inscrire j’ai utiliser la librairie scroll-out.js. Pour créer un
          effet de parallaxe au scroll et gérer la vitesse d’apparition des pages lors du défilement j’ai utilisé la
          librairie rellax.js. Ce projet est le premier projet responsive design.</p>

        <p v-scrollanimation>Sur ce site, les utilisateurs peuvent créer un compte et ajouter un spot/skatepark dans notre base de données. Afin d’intégrer tout cela,
          j’ai écrit des programmes PHP.7 et réalisé notre base de données avec MySQL. Nous avons dû apprendre le PHP en
          cours à distance,  mais grâce à ces quelques acquis nous avons pu créer des formulaires d’inscription et de connexion fonctionnels, ainsi qu’un formulaire d’ajout de skatepark.</p>

        <h4 v-scrollanimation>Bilan & acquisition</h4>
        <p v-scrollanimation>Les 75% du projet se sont fait à distance en raison des conditions sanitaires liées au COVID-19. Ceci n’a pas
          simplifié la réalisation des deux sites distincts, mais m’a appris à gérer une équipe et un projet à distance.
          De plus, cela m’a appris à travailler en autonomie et à devenir plus autodidacte. De plus ce projet comporte
          pour la première un langage serveur (PHP) lié à une base de données, j’ai donc appris les bases des langages
          PHP et MySQL. Ce premier projet collectif m’a montré la difficulté de travailler en équipe mais aussi ses bons
          cotés et ce fut une expérience plus que sympathique.
        </p>


        <div class="btn-projets">
          <router-link to="/atlantis"> <img src="@/assets/svg/left-arrow.svg"  alt="arrow"></router-link>
          <router-link to="/timburton"><img src="@/assets/svg/right-arrow.svg" alt="arrow"></router-link>
        </div>
      </div>
    </section>


  </div>
</template>

<script>
export default {
name: "ScrollAndRide",
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
h2.mobil{
  display: none;
}

.scroll-down a, .scroll-down::after, .scroll-down::before {
  color: white;
  border-color: #fff;
}

#background {
  background: url("../../assets/img/carousel/Mockup-scrollandride2.png") 50% 50% no-repeat;
}


.link {
  margin-bottom: 1rem;
}

#container > div:nth-child(3) > div > a:nth-child(4) > h3{
  margin-bottom: 3rem;
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
