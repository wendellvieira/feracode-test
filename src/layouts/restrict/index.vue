<template>
  <q-layout v-if='user != null' id='restrict'>
    <q-layout-header>
      <q-toolbar class='header'>
        <q-toolbar-title class='logo-top'>LookAfter</q-toolbar-title>
        <q-btn flat dense icon="menu" @click='logoff'/>
      </q-toolbar>
    </q-layout-header>
    <q-layout-drawer :width='250' v-model="drawer"
      side="left" :content-class="['aside-restrict']">
      <q-list>
        <q-item>
          <q-item-main
            :label="user.name"
            :sublabel='user.created_at | parseDate'
          />
          <q-item-side right>
            <q-btn @click='logoff' flat dense round
              icon="fas fa-sign-out-alt" color="white"
            />
          </q-item-side>
        </q-item>
      </q-list>
    </q-layout-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
  import {mapState, mapMutations} from 'vuex'
  import { date } from 'quasar'
  export default {
    data(){
      return {
        drawer: true
      }
    },
    filters: {
      parseDate(val){
        return date.formatDate(new Date(val), 'MMM DD YYYY')
      }
    },
    computed: {
      ...mapState(['user'])
    },
    methods: {
      ...mapMutations({
        signOut: "SIGN_OUT"
      }),
      logoff(){
        // aqui eu destruiria o token ....
        // console.log('...')
        this.signOut()
        this.$router.push("/")
      }
    }
  };
</script>
<style lang='scss'>
  body {
    background: #f8e5ff;
  }
  #restrict.q-layout {
    width: 100%;
    height: 100vh;
    overflow: hidden;

    .q-layout-page {
      overflow: auto;
    }
    .q-layout-page {
      padding: 1em;
    }

    .aside-restrict {
      background-color: #4d006b;
      /*width: 250px !important;*/

      .q-list {
        border: none;
        color: #fff;
      }
    }
    .q-layout-header {
      box-shadow: none !important;
    }
    .header {
      background-color: #67048e !important;
      padding: 0px;
      display: block;

      .logo-top {
        width: 250px;
        text-align: center;
        float: left;
        background: #590779;
        padding: 14.5px 0px;
      }
      & > button {
        margin: 11px;
      }
    }
  }

</style>

