import { config } from 'config'

export const resolvePathnameAndQuery = ({ query, pathname }) =>
  Object.keys(query).reduce(
    (acc, current) =>
      pathname.includes(`{${current}}`)
        ? {
            pathname: acc.pathname.replace(`{${current}}`, query[current]),
            query: acc.query,
          }
        : {
            pathname: acc.pathname,
            query: { [current]: query[current] },
          },
    {
      query: {},
      pathname,
    },
  )

const getUrlWithParamsConfig = ({ endpoint, query = {} }: { endpoint: string; query?: object }) => {
  const url = {
    ...config.client.server,
    ...config.client.endpoint[endpoint].uri,
    ...resolvePathnameAndQuery({
      pathname: config.client.endpoint[endpoint].uri.pathname,
      query,
    }),
  }

  return url
}

export default getUrlWithParamsConfig
