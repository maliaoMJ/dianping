
import 'whatwg-fetch'
// 封装fetch 获取数据

//封装get请求
function getDataByGet(url){
    let result = fetch(url)
    return result
}
//封装post请求
function getDataByPost(url, data){
  let result = fetch(url,{
      method:'POST',
      headers:{
          'Content-Type': 'application/json'
      },
      body:JSON.stringify(data)
  })
  return result
}
export default {
    getDataByGet,
    getDataByPost
}

//参考
// var form = document.querySelector('form')

// fetch('/users', {
//     method: 'POST',
//     body: new FormData(form)
// })


// fetch('/users', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         name: 'Hubot',
//         login: 'hubot',
//     })
// })