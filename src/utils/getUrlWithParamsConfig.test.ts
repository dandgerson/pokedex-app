import getUrlWithParamsConfig from './getUrlWithParamsConfig'

describe('getUrlWithParamsConfig', () => {
  test('Must take object with two fileds {endpointConfig, query}, on output {protocol, host, pathname, query: {}}', () => {
    const url = getUrlWithParamsConfig({
      endpoint: 'getPokemons',
      query: {},
    })

    expect(url).toEqual({
      protocol: 'https',
      host: 'pokeapi.co',
      pathname: '/api/v2/pokemon/',
      query: {},
    })
  })

  test('Must take object with two fileds {endpointConfig, query}, on output {protocol, host, pathname, query: { nameOrId: string }}', () => {
    const url = getUrlWithParamsConfig({
      endpoint: 'getPokemonByNameOrId',
      query: {
        nameOrId: 'pikachu',
      },
    })

    expect(url).toEqual({
      protocol: 'https',
      host: 'pokeapi.co',
      pathname: '/api/v2/pokemon/pikachu',
      query: {},
    })
  })
})
