import {uid, date} from 'quasar'
import sha256 from 'sha256'
import jwt from 'jwt-simple'
import {clone} from 'lodash'
const secret = "abc123"
const requestTime = 2000

export default {
  namespaced: true,
  state: {
    users: []
  },
  mutations: {
    SAVE_USER (state, payload) {
      state.users.push(payload)
    }
  },
  actions: {
    REGISTER_USER ({rootState, state, commit}, payload) {
      return new Promise( (resp, reject) => {
        setTimeout( r=> { //gambiarra pra simular o delay de uma request...
          const user =  state.users.findIndex( item => item.mail == payload.mail )
          if(user == -1){
            let newPayload = clone(payload)
            newPayload.id = uid()
            newPayload.created_at = date.formatDate(Date.now(), 'YYYY-MM-DDTHH:mm:ss.SSSZ')
            newPayload.pass = sha256(newPayload.pass)
            commit('SAVE_USER', newPayload)

            let forSend = clone(newPayload)
            delete forSend.pass
            resp( jwt.encode(forSend, secret) )
          }else{
            reject('This email is already registered')
          }
        }, requestTime)
      })

    },
    SIGN_IN ({state}, payload) {
      return new Promise( (resp, reject) => {
        setTimeout( r=> { //gambiarra pra simular o delay de uma request...
          const user =  state.users.find( item =>
            item.mail == payload.mail && item.pass == payload.pass
          )
          if(user == null){
            reject("Wrong user or passwords...")
          } else {
            resp(jwt.encode(user, secret))
          }
        }, requestTime)
      })
    }
  }
}
