import React from 'react'
import Layout from '../components/Layout/Layout'
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'

const Contact = () => {
  return (
    <Layout>
      <Box sx={{
        p: 3, pt: 6, textAlign: "left", height: "90vh", 
        "& h4": { textAlign: "center", mb: 2, fontWeight: "bold" },
        "& p": { textAlign: "justify", mb: 3 }
      }}>
        <Typography variant='h4'>
          Contact My Restaurant
        </Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem odio beatae ducimus magni nobis culpa praesentium velit expedita quae, corrupti, pariatur inventore laboriosam consectetur modi impedit error, repudiandae obcaecati doloribus.
        </p>

        <TableContainer component={Paper}
          sx={{ maxWidth: "600px" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ bgcolor: "#000", color: "#fff", textAlign: "center" }}>
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{color: "red", mr: 1}}/>
                  1800-00-0000(tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{color: "blue", mr: 1}}/>
                  help@myrest.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{color: "green", mr: 1}}/>
                  1234567890
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  )
}

export default Contact