import { Container, Grid } from '@mui/material'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'

//components
import CardPokemon from '../components/CardPokemon'
import Navbar from '../components/Navbar'

//style

export const Home = () => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    pokeApi()
  }, [])

  const pokeApi = () => {
    var endpoints = []
    for (var i = 1; i <= 50; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    }
    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => setPokemons(res))
      .catch((error) => console.log(error))
  }

  return (
    <div>
      <Navbar />
      <Container maxWidth="false">
        <Grid container spacing={2}>
          {pokemons.map((pokemon, key) => (
            <Grid item xs={3} key={key}>
              <CardPokemon
                name={pokemon.data.name}
                image={pokemon.data.sprites.front_default}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
}
