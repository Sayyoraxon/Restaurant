import React from 'react'
import Layout from '../components/Layout/Layout'
import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import { MenuList } from '../data'

const Menu = () => {
  return (
    <Layout>
      <Container sx={{py: 3}}>
        <Grid container spacing={3}>
          {MenuList.map((menu)=>(
            <Grid item xs={12} sm={6} md={4} key={menu.name} >
              <Card>
                <CardMedia
                  component="img"
                  height="400"
                  image={menu.image}
                  alt={menu.name}
                />
                <CardContent>
                  <Typography variant='h5' gutterBottom>
                    {menu.name}: {menu.price}
                  </Typography>
                  <p>
                    {menu.description}
                  </p>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  )
}

export default Menu