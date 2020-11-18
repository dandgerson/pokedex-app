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
          pathname: '/api/v2/pokemon/',
        },
      },
      getPokemonSpecies: {
        method: 'GET',
        uri: {
          pathname: '/api/v2/pokemon-species/',
        },
      },
    },
  },
}

export default config
