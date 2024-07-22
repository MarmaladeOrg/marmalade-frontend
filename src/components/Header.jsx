import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Header = () => {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', padding: '2rem 0' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" gutterBottom sx={{ fontFamily: 'Montserrat', textAlign: 'left' }}>
          Marmalade
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ fontFamily: 'Montserrat', textAlign: 'left' }}>
          /ˈmɑːrməˌleɪd/
        </Typography>
        <Typography variant="body1" sx={{ fontFamily: 'Roboto', textAlign: 'left' }}>
          Marmalade - a sweet preserve made from citrus fruit. In the context of blockchain, Marmalade is a high-performance C++ implementation of the Jam protocol, bringing the same smoothness and richness to decentralized applications.
        </Typography>
      </Container>
    </Box>
  );
};

export default Header;

