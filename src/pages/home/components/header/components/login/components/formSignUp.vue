<template>
  <q-carousel-slide class="item-sign">
    <h3>Sign Up</h3>
    <form>
      <q-field icon="fas fa-user" dark
        :error="error.name" :error-label="errorMsg.name">
        <q-input  float-label='Full Name' dark color='white'
          v-model="form.name"
        />
      </q-field>

      <q-field icon="fas fa-envelope" dark
        :error="error.mail" :error-label="errorMsg.mail">
        <q-input dark color='white' float-label='Email Address'
          v-model="form.mail"
        />
      </q-field>

      <q-field icon="fas fa-phone" dark
        :error="error.phone" :error-label="errorMsg.phone">
        <q-input dark color='white' float-label='Telephone'
          v-model="form.phone" v-mask='"###-###-####"'
        />
      </q-field>

      <q-field icon="fas fa-key" dark
        :error="error.pass" :error-label="errorMsg.pass">
        <q-input type='password' dark color='white' float-label='Password'
          v-model="form.pass"
        />
      </q-field>
    </form>
    <q-btn label='Sign Up' size='lg' :loading='loading'
      color='white' text-color='purple' class='full-width'
      @click='signUp'
    />
    <span>
      Already registered?
      <a @click='carrousel.previous()'>Sign in now!</a>
    </span>
  </q-carousel-slide>
</template>
<script>
  import {mapActions, mapMutations} from 'vuex'
  export default {
    props: ['carrousel'],
    data(){
      return {
        form: {
          name: "Simple User",
          mail: "simple@user.com",
          phone: "123-456-8999",
          pass: "abc123"
        },
        error: {
          name: false,
          mail: false,
          phone: false,
          pass: false,
        },
        errorMsg: {
          name: "",
          mail: "",
          phone: "",
          pass: "",
        },
        loading: false
      }
    },
    methods: {
      ...mapActions("BACKEND", {
        registerUser: "REGISTER_USER"
      }),
      ...mapMutations({
        setUser: 'SET_USER'
      }),
      formValidate(){
        const fxs = {
          not_null: {
            fx: val => val != "" && val != null,
            msg: "This field can not receive null or empty value!"
          },
          aroba_ponto: {
            fx: val => /([a-z0-9\-\.]+)\@([a-z]+)\.([a-z]+)/gi.test(val),
            msg: "The value of this field must have an '@' and a '.'!"
          },
          maior_tres: {
            fx: val => val.length > 3,
            msg: "The value of this field must be greater than 3!"
          },
          nove_digitos: {
            fx:val => /^([0-9]{9,10})$/.test(val.replace(/([\-\.]+)/gi, "")),
            msg: "The value of this field must be greater than 9 digits!"
          }
        }
        const relacao = {
          name: [ "not_null", "maior_tres"],
          mail: ["not_null", "aroba_ponto"],
          phone: ["not_null", "nove_digitos"],
          pass: ["not_null"],
        }
        let countErrors = 0
        for( let input in this.form){
          let errors = []
          for( let index in relacao[input] ){
            if(!fxs[ relacao[input][index] ].fx(this.form[input])){
              errors.push(fxs[ relacao[input][index] ].msg)
              countErrors++
            }
          }
          if( errors.length > 0 ){
            this.errorMsg[input] = errors.join(", ")
            this.error[input] = true
          }else{
            this.errorMsg[input] = ""
            this.error[input] = false
          }
        }
        return countErrors == 0;
      },
      signUp(){
        this.loading = true
        if(this.formValidate()){
          this.registerUser(this.form)
            .then( resp => {
              // aki eu persistiria o token
              this.setUser( this.$getJWTData(resp) )
              this.$router.push("/restrict")
              this.loading = false
              this.$q.notify({
                message: `User successfully registered`,
                type: 'positive'
              })
            })
            .catch( err => {
              this.loading = false
              this.$q.notify({
                message: err,
                type: 'negative'
              })
            })
        }
      }
    }
  };
</script>
