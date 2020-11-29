import URL from 'url'
import axios from 'axios'
import config from 'config'
import getUrlWithParamsConfig from './getUrlWithParamsConfig'

const request = async ({ endpoint = '', query = {}, uriSuffix = '' }) => {
  const url = URL.format(
    getUrlWithParamsConfig({
      endpoint,
      query,
    }),
  )

  console.log(url)
  // const url = URL.format({
  //   ...config.client.server,
  //   ...config.client.endpoint[endpoint].uri,
  //   ...(uriSuffix
  //     ? {
  //         pathname: `${config.client.endpoint[endpoint].uri.pathname}${uriSuffix}`,
  //       }
  //     : {}),
  //   ...query,
  // })

  return axios({
    url,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
}

export default request
