export const config = {
  client: {
    server: {
      protocol: 'https',
      host: 'pokeapi.co',
    },
    endpoint: {
      getPokemons: {
        method: 'GET',
        uri: {
          pathname: '/api/v2/pokemon/',
        },
      },
      getPokemonByName: {
        method: 'GET',
        uri: {
          pathname: '/api/v2/pokemon',
        },
      },
    },
  },
}

export default config
