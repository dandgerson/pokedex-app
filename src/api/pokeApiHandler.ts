import axios from 'axios'

class PokeApiHandler {
  getPokemons = ({ setData, response }) => {
    Promise.all(
      response.data.results.map(async ({ url }) => {
        const detailsRes = await axios(url)
        const speciesRes = await axios(detailsRes.data.species.url)

        return {
          ...detailsRes.data,
          color: speciesRes.data.color.name,
        }
      }),
    ).then(result =>
      setData({
        total: response.data.count,
        pokemons: result,
      }),
    )
  }

  getPokemonByName = (setData, response) => {}
}

export default PokeApiHandler
