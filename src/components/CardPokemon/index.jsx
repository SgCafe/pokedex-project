import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Box, Button, CardActionArea, CardActions } from '@mui/material'

export default function CardPokemon({ name, image, types }) {
  const typePokemon = () => {
    if (types[1]) {
      return types[0].type.name + '|' + types[1].type.name
    }
    return types[0].type.name
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="200" image={image} alt="" />
        <CardContent>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {typePokemon()}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          SAIBA MAIS
        </Button>
      </CardActions>
    </Card>
  )
}
