import Mock from 'mockjs'

export default {
  getHomeData: () => {
    return {
      code: 20000,
      data: {
        videoData: [
          {
            name: 'vue',
            value: Mock.Random.float(1000, 10000, 0, 2)
          }, {
            name: 'es6',
            value: Mock.Random.float(1000, 10000, 0, 2)
          }, {
            name: 'axios',
            value: Mock.Random.float(1000, 10000, 0, 2)
          }
        ]
      }
    }
  }
}
