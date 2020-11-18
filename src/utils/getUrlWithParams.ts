import config from 'config'

const getUrlWithParams = ({ endpoint, query, pathname }) => {
  return {
    ...config.client.server,
    ...config.client.endpoint[endpoint].uri,
    query,
    // pathname,
  }
}

export default getUrlWithParams
