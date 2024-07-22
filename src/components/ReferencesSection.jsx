import React from 'react';
import { Container, Typography, Box, Link, List, ListItem } from '@mui/material';

const references = [
  { title: 'Jam Graypaper', url: 'https://graypaper.com/' },
  { title: 'Jam Graypaper Repo', url: 'https://github.com/gavofyork/graypaper' },
];

const ReferencesSection = () => {
  return (
    <Box sx={{ padding: '2rem 0' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom>
          References
        </Typography>
        <List>
          {references.map((reference, index) => (
            <ListItem key={index}>
              <Link href={reference.url} target="_blank" rel="noopener">
                {reference.title}
              </Link>
            </ListItem>
          ))}
        </List>
      </Container>
    </Box>
  );
};

export default ReferencesSection;

