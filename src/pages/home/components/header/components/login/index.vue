<template>
  <q-modal v-model="opened"
    content-css="padding: 1em; background-color: #67048e; width: 500px">
    <template>
      <div class="cnt-logo">
        <img class='logo' src="statics/logo.png">
      </div>
      <q-carousel ref='carrousel' class="cnt-sign" no-swipe :autoplay='false'>
        <form-sign-in :carrousel='$refs.carrousel'/>
        <form-sign-up :carrousel='$refs.carrousel'/>
      </q-carousel>
    </template>
  </q-modal>
</template>
<script>
  import formSignIn from './components/formSignIn.vue'
  import formSignUp from './components/formSignUp.vue'

  export default {
    components: {formSignIn, formSignUp},
    data(){
      return {
        opened: false,
      }
    },
    methods: {
      open(){
        this.opened = true
      }
    }
  };
</script>
<style lang='scss'>
  .cnt-logo {
    padding: calc( 40px - 1em ) 0 35px;
    text-align: center;
    border-bottom: 1px dashed rgba(255,255,255,0.5);
    margin-bottom: 20px;
  }
  .cnt-sign {

    .item-sign {
      padding: 0 3em 3em;

      & > h3 {
        color: #fff;
        font-size: 23px;
        text-align: center;
        text-transform: uppercase;
        opacity: 0.8;
        margin: 0;
      }
      & > form {
        display: block;
        margin-bottom: 40px;
        margin-top: 20px;

      }

      & > span {
        color: rgba(255,255,255,0.8);
        display: block;
        margin-top: 20px;

        & > a {
          cursor: pointer;
          color: #ffdd03;

          &:hover {
            text-decoration: underline;
          }
        }
      }

    }

  }
</style>
