<template>
  <div class="loading">
    <div>
      <h2>Loading</h2>
      <h2>Welcome</h2>
      <div class="container-span">
      <span>.</span>
      <span>.</span>
      <span>.</span>
      <span>.</span>
      <span>.</span>
      </div>
  </div>

  </div>
</template>

<script>
export default {
  name: "Loading"
}
</script>

<style  lang="scss" scoped>



@keyframes backward{
  0%{z-index: 10000;
    transform: translateY(0%);
    height: 100vh;
    width: 100vw;
    opacity: 1;
  }
  70% {
    transform: translateY(0%);

  }
  99%{
    opacity: 1;
  }
  100%{
    opacity: 1;
    z-index: -100;
    transform: translateY(-200%);//100

  }
}

.loading{
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100%;
  animation: backward 4s  ;
  background-color: #FFFFFF;
  opacity: 1;
  transform: translateY(-200%);//100
}

.loading > div{
  text-align: center;
}


 h2{
  position: absolute;
  top: 45%;
  transform: translateY(-55%) translateX(-50%);
  left: 50%;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: -40px;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #383838;
  color: transparent !important;
  z-index: 3;
  font-size: 250px;
}
h2{
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #FFFFFF !important;
}
h2:nth-child(1){
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #383838 !important;
  opacity: .4;
}


span{
  font-size: 5rem;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #383838;
  opacity: .4;
  color: transparent !important;
  z-index: 3;
  display: inline-block;
  position: relative;
}

span{
  animation: spacing 1s ease-in-out infinite;
}

span:nth-child(3) {
  animation-delay: .1s;
}

span:nth-child(2) {
  animation-delay: .2s;
}
span:first-of-type {
  animation-delay: .2s;
}
//1er

#app > div > div.loading > div > div > span:nth-child(1){
  animation-delay: .5s;
}
//2eme

#app > div > div.loading > div > div > span:nth-child(2){
  animation-delay: .4s;
}
//3eme
#app > div > div.loading > div > div > span:nth-child(3){
  animation-delay: .3s;
}
//4eme

#app > div > div.loading > div > div > span:nth-child(4){
  animation-delay: .2s;
}
//5eme

#app > div > div.loading > div > div > span:nth-child(5){
  animation-delay: .1s;
}
.loading::after{
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 0%;
  background-color: #383838;
  transform-origin : top;
  /*transition: width 0.25s ease;*/
  z-index: -1;
  animation: backgroundFade 4s ease-in-out forwards;
}
.container-span{
  position: absolute;
  top: 55%;
  height: fit-content;
  left: 50%;
  transform: translateX(-50%);
}
@keyframes backgroundFade {
  0% {
    height: 0;
  }
  60% {
    height: 0;
  }
  70% {
    height: 100%;
  }
  100% {
    height: 100%;
  }
}
@keyframes spacing {
  0%{
    transform: translateY(0px);
  }
  50%{
    transform: translateY(15px);
  }
  60%{
    transform: translateY(15px);
  }
  100%{
    transform: translateY(0px);
  }
}


@media screen  and (max-width: 768px){
  h2{
    font-size: 70px;
    top: 40%;
  }
  .container-span {
    position: absolute;
    top: 52%;
    height: fit-content;
    left: 50%;
    transform: translateX(-48%);
  }

}
@media (min-width: 769px) and (max-width: 1200px ) {
  h2 {
    font-size: 150px;
    top: 40%;
  }
  .container-span {
    position: absolute;
    top: 52%;
    height: fit-content;
    left: 50%;
    transform: translateX(-48%);
  }

}
</style>
