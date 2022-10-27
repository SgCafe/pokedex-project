import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'

//components
import CardPokemon from '../components/CardPokemon'
import Navbar from '../components/Navbar'

//style
import { Skeletons } from '../components/Skeleton'
import { Container, Grid } from '@mui/material'

export const Home = () => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    pokeApi()
  }, [])

  const pokeApi = () => {
    var endpoints = []
    for (var i = 1; i <= 200; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    }
    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => setPokemons(res))
      .catch((error) => console.log(error))
  }

  const pokemonFilter = (name) => {
    var filteredPokemons = []
    if (name === '') {
      pokeApi()
    }
    for (var i in pokemons) {
      if (pokemons[i].data.name.includes(name)) {
        filteredPokemons.push(pokemons[i])
      }
    }
    setPokemons(filteredPokemons)
  }

  return (
    <div>
      <Navbar pokemonFilter={pokemonFilter} />
      <Container maxWidth="false">
        <Grid container spacing={2}>
          {pokemons.length === 0 ? (
            <Skeletons />
          ) : (
            pokemons.map((pokemon, key) => (
              <Grid item xs={12} sm={6} md={4} lg={2} key={key}>
                <CardPokemon
                  name={pokemon.data.name}
                  image={pokemon.data.sprites.front_default}
                  types={pokemon.data.types}
                />
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </div>
  )
}
