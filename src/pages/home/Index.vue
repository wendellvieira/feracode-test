<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <site-header />
        <div id='landpage' ref='landpage'>
          <main>
            <site-section />
            <site-footer-contact />
          </main>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script>
  import siteHeader from './components/header'
  import siteSection from './components/section1.vue'
  import siteFooterContact from './components/footer-contact.vue'

  export default {
    name: 'HomeSite',
    components: {siteHeader, siteSection, siteFooterContact},
    data(){
      return {
        scroll: 0
      }
    },
    provide(){
      return {
        scroll: (val = null) => {
          if(val == null) return this.scroll
          else this.$refs.landpage.scrollTop = val
        }
      }
    },
    mounted(){
      this.$refs.landpage.addEventListener('scroll',
        ev => this.scroll = ev.srcElement.scrollTop
      )
    }
  };
</script>
<style lang='scss'>
  #landpage {
    padding: 1px;
    height: calc( 100vh - 70px );
    overflow: hidden scroll;
    display: block;
    position: relative;

    & > main {
      padding: 1px 0;
    }
  }


 .content {
    width: 1024px;
    margin: 0px auto;
  }
  b[diff]{
    color: #ffdd03;
  }
  body {
    background: #f8e5ff;
  }
</style>
