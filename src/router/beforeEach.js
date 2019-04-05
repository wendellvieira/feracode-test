export default function(to, from, next, store){
  // console.log(to.fullPath.indexOf('/restrict'), store)
  if(store.state.user == null && to.fullPath.indexOf('/restrict') == 0 ) next('/')
  else next()
}
