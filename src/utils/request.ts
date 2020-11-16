import URL from 'url'
import axios from 'axios'

import getUrlWithParamsConfig from './getUrlWithParamsConfig'

const request = async ({ endpoint = '', query = {}, pathname = '' }) => {
  console.log({ getUrlWithParams: getUrlWithParamsConfig({ endpoint, query, pathname }) })

  const url = URL.format(getUrlWithParamsConfig({ endpoint, query }))

  console.log({ url })

  return axios({
    url,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  })
  // return axios(url)
}

export default request
