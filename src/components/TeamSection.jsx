import React from 'react';
import { Container, Typography, Box, Grid, Card, CardMedia, CardContent, Link } from '@mui/material';

const teamMember = {
  name: 'sisco0',
  image: 'https://avatars.githubusercontent.com/u/25695302?v=4',
  description: 'Master of Marmalade, loves blockchain and oranges.',
};

const TeamSection = () => {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', padding: '2rem 0' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom sx={{ fontFamily: 'Montserrat', textAlign: 'left' }}>
          Meet the Team
        </Typography>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image={teamMember.image}
                alt={teamMember.name}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Montserrat' }}>
                  {teamMember.name}
                </Typography>
                <Typography variant="body2" sx={{ fontFamily: 'Roboto' }}>
                  {teamMember.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Box sx={{ textAlign: 'left', marginTop: '2rem' }}>
          <Link href="https://matrix.to/#/#your-room-id" target="_blank" rel="noopener">
            Join us on Matrix
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default TeamSection;
