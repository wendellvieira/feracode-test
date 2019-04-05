export default ({ app, router, Vue }) => {
  Vue.prototype.$getJWTData = token => {
    token = token.split('.')
    token = window.atob(token[1])
    token = JSON.parse(token)
    return token
  }
}
