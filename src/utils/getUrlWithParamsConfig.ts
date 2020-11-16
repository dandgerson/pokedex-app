import config from 'config'

const getUrlWithParamsConfig = (endpointConfig: string) => {
  return {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig].uri,
  }
}

export default getUrlWithParamsConfig
