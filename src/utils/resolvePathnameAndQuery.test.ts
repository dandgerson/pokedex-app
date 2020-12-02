import { resolvePathnameAndQuery } from './getUrlWithParamsConfig'

describe('resolvePathnameAndQuery', () => {
  test('Must take { pathname, query }, and output { pathname, query }', () => {
    const url = resolvePathnameAndQuery({
      pathname: '/api/v2/pokemon/',
      query: {},
    })

    expect(url).toEqual({
      pathname: '/api/v2/pokemon/',
      query: {},
    })
  })

  test('Must take { pathname, query }. If pathname contains curle braces and query contains field with the same -> must output transpilled pathname and filtered query object { pathname, query }', () => {
    const url = resolvePathnameAndQuery({
      pathname: '/api/v2/pokemon/{nameOrId}',
      query: { nameOrId: 'pikachu' },
    })

    expect(url).toEqual({
      pathname: '/api/v2/pokemon/pikachu',
      query: {},
    })
  })
})
