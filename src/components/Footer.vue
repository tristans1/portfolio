<template>
  <div id="networks">
      <a class="letter-spaced" href="https://www.linkedin.com/in/tristan-seclet-4066a71a2/">LINKEDIN</a>
      <a class="letter-spaced" href="https://github.com/tristans1">GITHUB</a>
      <a class="letter-spaced" href="https://www.instagram.com/tristan_sclt1/">INSTAGRAM</a>
      <a class="letter-spaced" href="mailto:tristanseclet@icloud.com">MY EMAIL</a>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="scss" scoped>
#networks {
  display: flex;
  padding-right: 2rem;
  padding-left: 2rem;
  position: fixed;
  bottom: 2rem;
  left: 0;
  right: 0;
/*  align-items: start;*/
}

#networks > div:first-of-type {
  /*display: flex;*/
}

#networks > div:last-child {
  margin-left: auto;
/*  height: fit-content;*/
}

#networks  a {
  font-size: 11px;
  position: relative;
  margin-right: 2rem;
  color: #383838;
}
#networks a:after{
  position: absolute;
  background: #383838;
  content: '';
  display: block;
  width: 100%;
  height: 5%;
  bottom: -30%;
  z-index: -1;
  transition: all .3s ease;
  transform-origin: left;
  transform: scaleX(0);
}

#networks a:nth-child(4):after{
  transform-origin: right;
}

#networks a:nth-child(4):hover:after{
  transform-origin: right;
}
#networks a:last-of-type{
  margin-left: auto;
}
#networks a:hover:after{
  /*opacity: .5;*/
  transform: scaleX(1);
  transform-origin: left;
  transition: all .3s ease;
}

#networks > div:first-of-type > a {
  margin-right: 2rem;
}
#networks {
  /*mix-blend-mode: difference;*/

}

</style>
