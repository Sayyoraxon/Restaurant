import { Box, Typography } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <>
      <Box sx={{ textAlign: "center", bgcolor: "#1a1a19", color: "#fff", p: 2, width: "100%"}}>
        <Box sx={{
          my: 3, '& svg': { fontSize: "60px", cursor: "pointer", mr: 2 },
          '& svg:hover': {color: 'goldenrod', transform: "scale(1.2)", transition: "500ms"}}}>
          <InstagramIcon />
          <TwitterIcon />
          <GitHubIcon />
          <YouTubeIcon />
        </Box>
        <Typography variant="h5" sx={{ "@media (max-width:600px)": { fontSize: "1rem" } }}>
          All Rights Reserved &copy; Techinfo YT
        </Typography>
      </Box>
    </>
  )
}

export default Footer