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
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=50')
      .then((res) => setPokemons(res.data.results))
      .catch((error) => console.log(error))
  }

  return (
    <div>
      <Navbar />
      <Container maxWidth="false">
        <Grid container spacing={2}>
          {pokemons.map((pokemon, key) => (
            <Grid item xs={3} key={key}>
              <CardPokemon name={pokemon.name} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
}
