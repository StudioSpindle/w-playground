import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import { FormAddWeaviate } from "../components";

const Welcome = () => {

  const handleUrlChange = () => {

  };

  const handleSubmit = () => {

  };

  return (
    <Grid
      container={true}
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Box mb={2}>
        <Typography variant="h1" component="h1" align="center" gutterBottom>Welcome to the <br />Weaviate Playground</Typography>
      </Box>
      <Box maxWidth="600px">
        <Typography align="center" gutterBottom>
          This is the GUI on top of the decentralised knowledge graph{' '}
          <a
            href="https://github.com/semi-technologies/weaviate"
            target="_blank"
            rel="noopener noreferrer"
          >
            Weaviate
          </a>
          . For more information or documentation visit the{' '}
          <a
            href="https://github.com/semi-technologies/weaviate/blob/master/docs/en/use/weaviate-playground.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            Weaviate Playground documentation
          </a>{' '}
          on Github.
        </Typography>
      </Box>
      <FormAddWeaviate
        handleUrlChange={handleUrlChange}
        handleSubmit={handleSubmit}
      />
    </Grid>
  );
};

export default Welcome;
