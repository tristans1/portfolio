<template>
  <div id="about">
    <h1 v-scrollanimation>About<span> me</span></h1>
    <div class="scroll-down">
      <a href="#presentation" v-smooth-scroll>scroll</a>
    </div>

    <div v-scrollanimation id="me">
      <section id="presentation">
        <div v-scrollanimation><img src="https://tristanseclet.com/CVPP3.jpg" alt="Tristan Seclet"></div>
        <div>
          <h2>Hello !</h2>
          <p v-scrollanimation> Je suis Tristan Seclet, étudiant de 19 ans de 2ème année en MMI à l’IUT de
            Belfort-Montbéliard (Métiers du Multimédia et de l'Internet), ainsi qu'en alternance au sein de l'Université
            de Franche-Comté.</p>

          <p v-scrollanimation> Après l'obtention de mon Bac ES en 2019, j'ai poursuivi mes études avec cette formation s'intéressant au
            web et au multimédia.
            Curieux, j'ai acquis beaucoup de compétences diverses dans le domaine du web, que ce soit en design,
            communication web ou audiovisuel, et plus particulièrement le développement web.
          </p>
          <p v-scrollanimation>
            Passionné par le développement web, cet axe de la formation MMI est aujourd'hui mon activité et mon centre
            d'intérêt principale.
            Vous trouverez dans ce site les réalisations et projets web que j'ai réalisé.</p>

          <div v-scrollanimation>
            <a href="https://tristanseclet.com/CV-en-ligne.pdf">
              <h3 class="link" data-content="MON_CV">MON_CV<img class="arrow" src="../assets/svg/external-arrow.svg"
                                                                alt=""></h3>
            </a>
            <!--<a href="mailto:tristanseclet@icloud.com">
              <h3 class="link" data-content="MON_BOOK">MON_BOOK<img class="arrow"
                                                                            src="../assets/svg/external-arrow.svg"
                                                                            alt=""></h3>
            </a>-->

            <a href="mailto:tristanseclet@icloud.com">
              <h3 class="link" data-content="ME_CONTACTER">ME_CONTACTER<img class="arrow"
                                                                            src="../assets/svg/external-arrow.svg"
                                                                            alt=""></h3>
            </a>
          </div>

        </div>
      </section>

      <section id="techno" style="display: block">
        <h2>Tech !</h2>
        <p v-scrollanimation>Retrouver les technologies que j'utilise le plus fréquemment
          <!--RETROUVER LES TECHNOLOGIES QUE J'UTILISE LE PLUS FRÉQUEMMENT--> :</p>
        <div class="container">
          <div v-scrollanimation class="tech"><img src="@/assets/img/icons/html.png" alt="logo HTML5">
            <p>HTML 5</p></div>
          <div v-scrollanimation class="tech"><img src="@/assets/img/icons/css.png" alt="logo CSS3">
            <p>CSS 3</p></div>
          <div v-scrollanimation class="tech"><img src="@/assets/img/icons/javascript.png" alt="logo Javascript">
            <p>JavaScript</p></div>
          <div v-scrollanimation class="tech"><img src="@/assets/img/icons/php.png" alt="logo Php">
            <p>php</p></div>
          <div v-scrollanimation class="tech"><img src="@/assets/img/icons/vue-js.png" alt="logo Vue JS">
            <p>Vue JS</p></div>
          <div v-scrollanimation class="tech"><img src="@/assets/img/icons/bootstrap.png" alt="logo Bootstrap">
            <p>Bootsrap</p></div>
          <div v-scrollanimation class="tech"><img src="@/assets/img/icons/wordpress.png" alt="logo Wordpress">
            <p>Wordpress</p></div>
          <div v-scrollanimation class="tech"><img src="@/assets/img/icons/three-js.png" alt="logo three.js">
            <p>three.js</p></div>
          <div v-scrollanimation class="tech"><img src="@/assets/img/icons/adobe.png" alt="logo Adobe">
            <p>Adobe</p></div>
        </div>

      </section>


    </div>

    <div class="area">
      <ul class="circles">
        <li :style="this.colorCube()"></li>
        <li :style="this.colorCube()"></li>
        <li :style="this.colorCube()"></li>
        <li :style="this.colorCube()"></li>
        <li :style="this.colorCube()"></li>
        <li :style="this.colorCube()"></li>
        <li :style="this.colorCube()"></li>
        <li :style="this.colorCube()"></li>
        <li :style="this.colorCube()"></li>
        <li :style="this.colorCube()"></li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      list: ['a', 'b', 'c'],
      pickedUp: false,
    }
  },
  mounted() {
    window.scrollTo(0, 0)
  },
  methods: {
    colorCube: function () {
      let maCouleur = ['background-color:rgba(255, 140, 26, 0.8)', 'background-color:rgba(56, 56, 56, 0.2)']// 'background-color:rgba(100,149,236,0.6)',
      let random = Math.round(Math.random() * (maCouleur.length - 1))
      return maCouleur[random]
    }
  }
}
</script>

<style lang="scss" scoped>

.scroll-down:after, .scroll-down:before, .scroll-down a {
  border-color: #383838 !important;
  color: #383838 !important;
}
h1 span {
  font-family: 'Playfair Display', serif;
  -webkit-text-stroke: 1px #414141;
  color: rgba(255, 255, 255, 0.1);
}

h1 {
  position: fixed;
  top: 40%;
  transform: translateY(-60%) translateX(-50%);
  left: 50%;
  width: 100%;
  max-width: 100%;
  /* animation: reveal forwards 1.5s ease;*/
  margin-bottom: 0;
  text-align: center;
  padding: 0;
  /*padding-left: 2rem;
  padding-right: 2rem;*/
  font-size: 210px;//170
  font-weight: 400 !important ;
/*  margin-left: 2rem;
  margin-right: 2rem;*/



}

h1 span {
  margin-left: 0 !important;
  animation-delay: .5s !important;

}

h2 {
  position: relative;
  top: 30px;
}

#me {
  position: absolute;
  top: 100vh;
  left: 0;
  right: 0;
  height: auto;
  z-index: 2;
  margin-bottom: 0;
  padding-bottom: 0;
}
h2{
 /* mix-blend-mode: difference;*/

}

#presentation {
  display: flex;
  background-color: /*rgba(150, 150, 150, 0.2);*/
    #eaeaea;
  padding: 3rem;
}

#presentation p {
  margin-top: 1rem;
  position: relative;
  top: -40px;
}

#presentation div:first-child img {
  filter: grayscale(1);
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  max-width: 100%;
}

#presentation div:first-of-type {
  flex-basis: 30%;
}

#presentation div:last-of-type {
  flex-basis: 70%;
  padding-left: 3rem;
  padding-right: 3rem;
}


#presentation > div:nth-child(2) > div {
  display: flex;
  padding: 0;
  margin: 3rem;
}

#presentation > div:nth-child(2) > div > a:nth-child(1) {
  margin-right: 4rem;//auto
}


#techno {
  background: #eaeaea /*#ff8c1a*/;
  padding: 0 2rem 6rem;
}

#techno > p {
  padding-left: 2rem;
  position: relative;
  top: -1rem;
  padding-right: 2rem;
}

.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 60px;
  padding: 0;
}

.tech {
  text-align: center;
  margin: 30px;
  width: 75px;
}

.tech img {
  width: 75px;
  height: 75px;
}

#techno h3 {
  margin-left: 3rem;
  margin-top: 1rem;
}

//ANIMATION DE FOND
.area {
  /* background: rgba(255, 140, 26, 0.5);*/
  background-color: white;
  /*background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);*/
  width: 100%;
  height: 100vh;
  position: fixed; /*absolute*/
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;


}

.circles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
  transform: translateZ(1000px);
}

.circles li {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  /*background: !*rgba(255, 140, 26, 0.6)*!;*/
  animation: animate 25s linear infinite;
  bottom: -150px;
  z-index: -1;

}

.circles li:nth-child(1) {
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}


.circles li:nth-child(2) {
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.circles li:nth-child(3) {
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}

.circles li:nth-child(4) {
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.circles li:nth-child(5) {
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
}

.circles li:nth-child(6) {
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}

.circles li:nth-child(7) {
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
}

.circles li:nth-child(8) {
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 45s;
}

.circles li:nth-child(9) {
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
}

.circles li:nth-child(10) {
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
}

//animationABOUT H3
#presentation > div:nth-child(2) > div {
  position: relative;
}

@keyframes animateWave {
  0% {
    background-position: 0px;
  }
  100% {
    background-position: 200px;
  }
}


@keyframes animate {

  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }

  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }

}

#me.before-enter{
  opacity: 1;
}


*{cursor: auto}

// 2eme partie test
h1 {
  position: absolute;
 /* top: 1%;*/
  /*transform: translateY(-140%) translateX(-50%);//150*/
  left: 50%;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: -40px;
  -webkit-text-stroke-width: 1px;
  /*-webkit-text-stroke-color: #fff;*/
  -webkit-text-stroke-color: #383838;
  color: transparent !important;
  z-index: 3;
  font-size: 250px;
  /*color: #FFFFFF;*/
}
h1 span{
  color: transparent !important;
 /* -webkit-text-stroke-color: #fff;*/
  /*color: #FFFFFF;*/
}

// <3 eme test
#presentation,  #techno {
  padding-left: 15%;
  padding-right: 15%;
}

#presentation div:first-child img{
  max-width: 120%;
}
#presentation{
  /*padding-bottom:  0!important;*/
}

#presentation > div:nth-child(2) > div{
  margin-left: 0;
}

.container {
  /*padding-right: 5rem !important;
  padding-left: 5rem !important;*/
}
//#presentation > div:nth-child(2) > div{
//  position: absolute;
//  left: 15%;
//  margin-left: 0;
//  margin-top: 5rem;
//}



@media screen and (max-width: 768px) {
  h1 {
    font-size: 70px;
  }
  #presentation,
  #techno{
    padding-left: 3rem;
    padding-right: 3rem;
  }
  #presentation div:first-child img {
    max-width: 100%;
  }
  .container{
    /*padding-right: 5rem !important;
   padding-left: 5rem !important;*/
  }
  #presentation div:last-of-type {
    flex-basis: 70%;
    padding-left: 0rem;
    padding-right: 0rem;
  }


}


</style>
