import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const GoalSection = () => {
  return (
    <Box sx={{ padding: '2rem 0' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom>
          Project Goal
        </Typography>
        <Typography variant="body1" align="center">
          The Marmalade Jam C application aims to provide a high-performance, secure, and efficient blockchain solution. It leverages in-core/on-chain dualism to maximize throughput and minimize latency, ensuring robust and scalable decentralized applications.
        </Typography>
      </Container>
    </Box>
  );
};

export default GoalSection;

