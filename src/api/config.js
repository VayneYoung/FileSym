import Axios from 'axios'

let server = Axios.create({
  // 超时时间
  timeout: 3000
})

server.interceptors.request.use(
  config => config,
  err => {
    console.log(err)
  }
)

server.interceptors.response.use(
  response => {
    let res = {}
    res.status = response.status
    res.data = response.data
    return res
  }, err => {
    console.log(err)
  }
)

export default server
