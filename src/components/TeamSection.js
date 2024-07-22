import React from 'react';
import { Container, Typography, Box, Grid, Card, CardMedia, CardContent, Link } from '@mui/material';

const teamMembers = [
  { name: 'Alice', image: 'team/member1.jpg', description: 'Master of Marmalade, loves blockchain and oranges.' },
  { name: 'Bob', image: 'team/member2.jpg', description: 'Chief Jam Officer, innovator and fruit enthusiast.' },
  { name: 'Charlie', image: 'team/member3.jpg', description: 'Jam Wizard, coding guru and jam connoisseur.' },
];

const TeamSection = () => {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', padding: '2rem 0' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom>
          Meet the Team
        </Typography>
        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={member.image}
                  alt={member.name}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {member.name}
                  </Typography>
                  <Typography variant="body2">
                    {member.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link href="https://matrix.to/#/#your-room-id" target="_blank" rel="noopener">
            Join us on Matrix
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default TeamSection;

