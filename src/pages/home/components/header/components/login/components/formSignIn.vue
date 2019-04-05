<template>
  <q-carousel-slide class="item-sign">
    <h3>Sign in</h3>
    <form>
      <q-field icon="fas fa-envelope" dark
        :error="error.mail"
        error-label="We need a valid email"
      >
        <q-input  float-label='Your Mail' dark color='white'
          v-model="form.mail" ref='mail'
        />
      </q-field>

      <q-field icon="fas fa-key" dark
        :error="error.pass"
        error-label="We need a valid email"
      >
        <q-input type='password' dark color='white' float-label='Password'
          v-model="form.pass" ref='pass'
        />
      </q-field>
    </form>
    <q-btn label='Sign In' color='white' text-color='purple'
      class='full-width' size='lg' :loading='loading'
      @click='login'
    />

    <span>
      Not registered yet?
      <a @click='carrousel.next()'>Sign up now!</a>
    </span>
  </q-carousel-slide>
</template>
<script>
  import { mapActions, mapMutations } from 'vuex'
  import {clone} from 'lodash'
  import sha256 from 'sha256'
  export default {
    props: ['carrousel'],
    data(){
      return {
        form: {
          mail: "simple@user.com",
          pass: "abc123"
        },
        error: {
          mail: false,
          pass: false
        },
        loading: false
      }
    },
    methods: {
      ...mapActions("BACKEND", {
        signIn: "SIGN_IN"
      }),
      ...mapMutations({
        setUser: 'SET_USER'
      }),
      login(){
        this.loading = true
        this.error = { mail: false, pass: false }
        for(let input in  this.form){
          if( this.form[input] == "" ){
            this.$refs[input].focus()
            this.error[input] = true
            return;
          }
        }

        let sData = clone(this.form)
        sData.pass = sha256(sData.pass)

        console.log()
        this.signIn(sData)
          .then( resp => {
            // aki eu persistiria o token
            this.setUser( this.$getJWTData(resp) )
            this.$router.push("/restrict")
            this.loading = false
            this.$q.notify({
              message: `sign in successfully`,
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
  };
</script>
