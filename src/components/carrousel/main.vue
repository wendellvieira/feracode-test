<template>
  <div class="carrousel">
    <nav>
      <q-btn @click='moveItems("before")' dense round class='btn-nav'
        flat icon='navigate_before' size='lg'
      />
      <q-btn @click='moveItems("next")' dense round class='btn-nav'
        flat icon='navigate_next' size='lg'
      />
    </nav>
    <div class='cnt-carrousel'>
      <div class="cnt-carrousel-itens" :style='{ "left" : `${left}px`}'>
        <slot/>
      </div>
    </div>
  </div>
</template>
<script>
  import $ from 'jquery'
  export default {
    data(){
      return {
        left: 0,
        avanco: 264,
        itemsMove: 1,
        qnt: 0,
        block: false
      }
    },
    methods: {
      moveItems(sent){
        const av = this.avanco*this.itemsMove
        const min = 0
        const max = (this.qnt-4)*this.avanco
        if(sent == "next"){
          if( Math.abs(this.left)+av >= max ){
            for(let i = this.itemsMove; i > 0; i--){
              const newAv = this.avanco*i
              if( Math.abs(this.left)+newAv <=  max ){
                this.left -= newAv
                return;
              }
            }
            this.left = min
          }else this.left -= av
        }else{
          if( Math.abs(this.left)-av <= min ){
            for(let i = 1; i < this.itemsMove; i++){
              const newAv = this.avanco*i
              if( Math.abs(this.left)-newAv >= min ){
                this.left += newAv
                return;
              }
            }
            this.left = max*-1
          }else this.left += av
        }
      }
    },
    mounted(){
      $('.item-carrousel-cmp, .btn-nav').hover(e=>this.block=true, e=>this.block=false)
      setInterval(r=> {
        if(!this.block) this.moveItems("next")
      }, 2000)
    }
  };
</script>
<style lang='scss' scoped>
  .carrousel {

    nav {
      position: absolute;
      width: 114%;
      margin-left: -7%;
      top: 315px;

      .q-btn:nth-child(2) {
        float: right;
      }
    }

    .cnt-carrousel {
      display: block;
      margin-left: -15px;
      margin-right: -15px;
      position: relative;
      overflow: hidden;
      height: 600px;

      .cnt-carrousel-itens {
        width: max-content;
        position: absolute;
        transition: left linear 300ms;
      }
    }
  }
</style>

