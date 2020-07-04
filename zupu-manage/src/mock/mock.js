const Mock = require('mockjs')
const base = 'http://www.keke.com'

Mock.mock(base + '/login', 'get', {
  'code': 'success'
})
