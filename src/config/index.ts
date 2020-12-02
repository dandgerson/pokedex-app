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
      getPokemonByNameOrId: {
        method: 'GET',
        uri: {
          pathname: '/api/v2/pokemon/{nameOrId}',
        },
      },
      getPokemonSpecies: {
        method: 'GET',
        uri: {
          pathname: '/api/v2/pokemon-species/{nameOrId}',
        },
      },
    },
  },
}

export default config
