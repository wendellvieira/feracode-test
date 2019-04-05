<template>
  <footer>
    <a id='contact'></a>
    <section v-if='contents.networks.length > 0' class="networks">
      <div class="content row">
        <div v-for='network in contents.networks'
          :class='`col-${12/contents.networks.length}`'>
          <a :href='network.url' target="_blank">
            <i :class='network.icon'/>
          </a>
        </div>
      </div>
    </section>
    <section v-if='contents.contacts.length > 0' class='contacts'>
      <div class="content row">
        <div v-for='contact in contents.contacts' class="item-contact"
          :class='`col-${12/contents.contacts.length}`'>
            <i class="fas fa-phone"></i>
            <span>{{contact.title}}</span>
            <div v-html='contact.text'></div>
        </div>
      </div>
    </section>
  </footer>
</template>
<script>
  import content from 'assets/content.json'
  export default {
    computed: {
      contents(){
        return content.contents
      }
    }
  };
</script>
<style lang='scss' scoped>
  footer {
    margin-top: 4em;

    section.networks {
      display: block;
      background-color: #67048e;

      a {
        font-size: 80px;
        color: #fff;
        text-align: center;
        display: block;
        width: 100%;
        padding: 30px 0 25px;
        position: relative;
        z-index: 10;

        &:hover {
          animation: tada linear 1s;
        }
      }
    }

    section.contacts {
      display: block;
      background-color: #4d006b;


      .item-contact {
        text-align: center;
        color: #fff;
        padding: 50px 0;

        & > i {
          display: block;
          font-size: 20px;
          opacity: 0.3;
          margin-bottom: 10px;
        }
        & > span {
          opacity: 0.3;
          text-transform: uppercase;
          font-size: 12px;
          font-weight: bold;
          display: block;
          margin-bottom: 9px
        }
        & > div {
          opacity: 0.8;
          display: block;
        }

      }


    }
  }
</style>
