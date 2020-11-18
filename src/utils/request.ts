import URL from 'url'
import axios from 'axios'
import config from 'config'

const request = async ({ endpoint = '', query = {}, uriSuffix = '' }) => {
  const url = URL.format({
    ...config.client.server,
    ...config.client.endpoint[endpoint].uri,
    ...(uriSuffix
      ? {
          pathname: `${config.client.endpoint[endpoint].uri.pathname}${uriSuffix}`,
        }
      : {}),
  })

  return axios({
    url,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
}

export default request
