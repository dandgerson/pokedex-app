import URL from 'url'
import axios from 'axios'

import getUrlWithParamsConfig from './getUrlWithParamsConfig'

const request = async (endpoint: string = '') => {
  const uri = URL.format(getUrlWithParamsConfig(endpoint))

  return axios(uri)
}

export default request
