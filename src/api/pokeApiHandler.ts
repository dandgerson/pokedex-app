import request from 'utils/request'

class PokeApiHandler {
  getUriSuffix = (uri: string): string => {
    return uri.slice(-1) === '/' ? uri.split('/').slice(-2)[0] : uri.split('/').slice(-1)[0]
  }

  getPokemons = async ({ setData }) => {
    const pokemonsRes = await request({ endpoint: 'getPokemons' })

    Promise.all(
      pokemonsRes.data.results.map(async ({ url }) => {
        const pokemonRes = await this.getPokemonByNameOrId({
          uriSuffix: this.getUriSuffix(url),
        })

        const speciesRes = await this.getPokemonSpecies({
          uriSuffix: this.getUriSuffix(pokemonRes.data.species.url),
        })

        return {
          ...pokemonRes.data,
          color: speciesRes.data.color.name,
        }
      }),
    ).then(result =>
      setData({
        total: pokemonsRes.data.count,
        pokemons: result,
      }),
    )
  }

  // eslint-disable-next-line consistent-return
  getPokemonByNameOrId = async ({ setData, uriSuffix: nameOrId }) => {
    const pokemonRes = await request({
      endpoint: 'getPokemonByNameOrId',
      uriSuffix: nameOrId,
    })

    if (!setData) return pokemonRes

    const speciesRes = await this.getPokemonSpecies({
      uriSuffix: this.getUriSuffix(pokemonRes.data.species.url),
    })

    setData({
      pokemons: [
        {
          ...pokemonRes.data,
          color: speciesRes.data.color.name,
        },
      ],
    })
  }

  // eslint-disable-next-line consistent-return
  getPokemonSpecies = async ({ setData, uriSuffix: nameOrId }) => {
    const response = await request({
      endpoint: 'getPokemonSpecies',
      uriSuffix: nameOrId,
    })

    if (!setData) return response

    setData({ pokemonSpecies: response.data })
  }
}

export default PokeApiHandler
