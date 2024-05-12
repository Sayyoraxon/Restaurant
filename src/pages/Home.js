import React from 'react'
import Layout from '../components/Layout/Layout'
import banner from '../images/banner.jpeg'
import '../styles/style.css'
import { Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Layout>
      <div className='home' style={{ backgroundImage: `url(${banner})` }}>
        <div className='headerContainer'>
          <Typography variant='h2' sx={{ fontWeight: "700" }}>
            Food Website
          </Typography>
          <Typography variant='h4' paragraph>
            Best Food in India
          </Typography>
          <Link to="/menu" style={{textDecoration: "none"}}>
            <Button variant='contained' size="large" sx={{bgcolor: "#121619", "&:hover": {bgcolor: "#07090a"}}}>
              ORDER NOW
            </Button>
          </Link>

        </div>
      </div>
    </Layout>
  )
}

export default Home