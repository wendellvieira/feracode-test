<template>
  <article class='item-carrousel-cmp' :style='{"background-color": categorie.color}'>
    <img :src="categorie.img" class='img-categorie'
      :style='{"border-color": categorie.color}'
    />
    <div class="cnt-infos">
      <img :src="data.img">
      <h3>{{data.title}}</h3>
      <h4>{{categorie.title}}</h4>
      <span>{{data.desc}}</span>
      <button :style='{"color": categorie.color}'>Add card</button>
    </div>
   <!--  <pre>{{data}}</pre>
    <pre>{{categorie}}</pre> -->
  </article>
</template>
<script>
  import content from 'assets/content.json'
  export default {
    props: ['data'],
    computed: {
      categorie(){
        return content.categories.find( item => item.id == this.data.cat)
      }
    },
    mounted(){
      this.$parent.qnt++
    }
  };
</script>
<style lang='scss' scoped>
  article {
    width: 234px;
    margin: 120px 15px 0;
    float: left;
    padding: 1em;
    border-radius: 5px;
    position: relative;

    &:hover {
      animation: pulse linear 250ms;
    }

    & > img {
      position: absolute;
      border-radius: 100%;
      border: 0.5em solid;
      left: 50%;
      top: -78px;
      margin-left: -78px;
      width: 156px;
      height: 156px;
    }

    .cnt-infos {
      border: 2px solid rgba(0, 0, 0, 0.15);
      border-radius: 5px;
      background-image: repeating-linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0) 7%, rgba(0,0,0,0.05) 7%, rgba(0,0,0,0.05) 14% );

      & > img {
        margin: 15px 0px 0 -22px;
        position: relative;
        z-index: 1;
      }

      & > h3, & > h4{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      & > h3 {
        font-size: 18px;
        text-align: center;
        font-weight: bold;
        text-transform: uppercase;
        padding: 0px 1em;
        line-height: 25px;
        margin: 15px 0 0 0;
      }
      & > h4 {
        font-size: 16px;
        text-align: center;
        margin: 5px 0 20px 0;
        line-height: 16px;
      }
      & > span {
        height: 150px;
        display: block;
        overflow: auto;
        text-align: center;
        padding: 0 1em;
        font-size: 12px;
      }
      & > button {
        background: #fff;
        border: none;
        padding: 11px;
        width: calc( 100% - 30px);
        border-radius: 5px;
        margin: 0 auto 15px;
        display: block;
        text-transform: uppercase;
        font-size: 15px;
        position: relative;
        font-weight: bold;
        cursor: pointer;

        &:hover {
          animation: tada linear 1s;
        }


        &:before {
          content: '';
          width: calc( 100% - 10px);
          height: 29px;
          border: 2px dashed #cecece;
          border-radius: 5px;
          position: absolute;
          top: 5px;
          left: 5px;
        }
      }
    }
  }
</style>
