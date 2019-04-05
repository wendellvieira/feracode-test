<template>
  <header>
    <a id='home'></a>
    <div class="content">
      <router-link to='/'>
        <img class='logo' src="statics/logo.png">
      </router-link>
      <nav>
        <div class="separator"></div>
        <ul>
          <li v-for='(link, id) in links' :class='{"active": active == id}'
            ref='links' @click='go(link, id)'>
            {{link.text}}
          </li>

          <li v-if='user == null' @click='$refs.mdLogin.open()' class="btn-modal">
            Sign In
          </li>
          <router-link v-else to='/restrict' tag='li' class="btn-modal">
            {{user.name}}
          </router-link>
        </ul>
      </nav>
      <md-login ref='mdLogin'/>
    </div>
  </header>
</template>
<script>
  import mdLogin from './components/login'
  import {mapState} from 'vuex'
  import $ from 'jquery'
  export default {
    components: {mdLogin},
    inject: ['scroll'],
    data(){
      return {
        active: 0,
        links: [
          {text: "Home", target: "#home", position: 0},
          {text: "Products", target: "#products", position: 0},
          {text: "Contact", target: "#contact", position: 0},
        ],
      }
    },
    computed: {
      getScroll(){
        return this.scroll()
      },
      ...mapState(["user"])
    },
    watch: {
      'getScroll': function(val){
        const end = $('#landpage > main').height()-$('#landpage').height() + 2
        if(end == val){
          this.active = this.links.length -1
          return;
        }
        this.links.forEach((item, id)=> {
          if(val >= item.position){
            this.active = id
            return false
          }
        })
      }
    },
    methods: {
      go(link, id){
        $('#landpage').animate({scrollTop: link.position}, 500)
      },
    },
    mounted(){
      $('#landpage').scrollTop(0);
      this.links.forEach((item, id)=> {
        item.position = $(item.target).position().top
      })
    }
  };
</script>
<style lang='scss' scoped>
  header {
    $primary: #b803ff !global;
    $secondary: #ffdd03 !global;
    $tertiary: #636363 !global;

    background-color: $primary;
    height: 70px;
    overflow: hidden;

    .logo {
      margin: 22px 40px 22px 0;
      float: left;
    }

    nav {
      float: left;
      width: calc( 100% - 164px );
      height: 70px;
      position: relative;

      ul {
        width: calc( 100% - 50px );
        height: 70px;
        position: absolute;
        top: 0px;
        left: 50px;
        margin: 0px;
        padding: 0px;

        .btn-modal {
          float: right !important;
          padding: 12px 45px !important;
          margin: 12px 0 !important;
          border-left: 2px dashed #7d6f10;
          border-right: 2px dashed #7d6f10;
          transition: all linear 300ms;

          &:hover {
           background: #fff;
           color: #ffdd03;
          }
        }

        li {
          list-style: none;
          float: left;
          padding: 24px;
          color: rgba(255,255,255,0.8);
          font-weight: bold;
          font-size: 19px;
          text-transform: uppercase;
          cursor: pointer;
          transition: color linear 100ms;

          &:hover {
            color: #fff;
          }
          &.active {
            color: $primary;
          }
        }
      }
    }



    .separator {
      background-color: $secondary;
      height: 70px;
      transform: skew(-45deg);
      padding: 1px;
      width: 200vw;
      position: absolute;
      top: 0px;
      left: 0px;

      &:before {
        content: '';
        display: block;
        height: 50px;
        margin: 9px 20px;
        border: 2px dashed #7d6f10;
      }
    }
  }
</style>
