import Mock from 'mockjs'
import HomeApi from './home'

Mock.setup({
  timeout: '200-2000'
})

Mock.mock(/\/home\/getData/, 'get', HomeApi.getHomeData)
