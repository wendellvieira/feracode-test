<template>
  <section>
    <ul v-for='n in 3' class="sky" :class='`sky-${n}`' :style='pClouds(`sky-${n}`)'></ul>
    <div class="cnt-text" v-html='header.text1'></div>
    <div class="cnt-subtext" v-html='header.text2'></div>
    <a id='products'></a>
    <div class="content">
      <carrousel>
        <item-carrousel
          v-for='(prod, id) in products' :key='id'
          :data='prod'
        />
      </carrousel>
    </div>
  </section>
</template>
<script>
  import content from 'assets/content.json'
  import {carrousel, itemCarrousel} from 'components/carrousel/index.js'

  export default {
    inject: ['scroll'],
    components: {carrousel, itemCarrousel},
    methods: {
      pClouds(index){
        const settings = {
          "sky-1": { start: 200, velocity: 0.5 },
          "sky-2": { start: 100, velocity: 0.7 },
          "sky-3": { start: 0, velocity: 0.8 },
        }
        let top = 0
        if( this.scroll() == 0) top = settings[index].start
        top = settings[index].start + this.scroll() * settings[index].velocity

        return { "top": `${top}px`}
      }
    },
    computed: {
      products(){
        return content.products
      },
      header(){
        return content.contents.header
      }
    },
  };
</script>
<style lang='scss' scoped>
  @keyframes sky1 {
    from { background-position-x: 2000px; }
    to { background-position-x: 0px; }
  }
  @keyframes sky2 {
    from { background-position-x: 1500px; }
    to { background-position-x: 0px; }
  }
  @keyframes sky3 {
    from { background-position-x: 1000px; }
    to { background-position-x: 0px; }
  }

  @mixin defineSky($name, $duration, $size, $opacity) {
    animation-name: $name;
    animation-duration: $duration;
    background-size: $size;
    opacity: $opacity;
  }

  section {
    display: block;

    & > .content {
      margin: 40px auto 0;
      position: relative;
      z-index: 1;
    }

    .cnt-subtext {
      display: block;
      letter-spacing: 2px;
      position: relative;
      z-index: 1;
      text-align: center;
      margin-top: 40px;
    }

    .cnt-text {
      font-size: 36px;
      position: relative;
      z-index: 3;
      text-transform: uppercase;
      color: #b803ff;
      line-height: 50px;
      text-align: center;
      font-weight: 300;
      margin-top: 150px;
    }

    .sky {
      margin: 0px;
      padding: 0px;
      width: 100%;
      height: 500px;
      background-image: url(/statics/skys.png);
      background-repeat-x: repeat;
      background-repeat-y: no-repeat;
      position: absolute;

      animation-timing-function: linear;
      animation-iteration-count: infinite;
      animation-direction: normal;
    }
    .sky-1{
      @include defineSky(sky1, 60s, 1000px, 1);
    }
    .sky-2{
      @include defineSky(sky2, 70s, 1500px, 0.6);
    }
    .sky-3{
      @include defineSky(sky3, 80s, 2000px, 0.4);
    }

  }
</style>
