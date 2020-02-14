import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { FormAddWeaviate } from '../components';
import { usePlaygroundDispatch } from '../playground-context';

const Welcome: React.FC = () => {
  const history = useHistory();
  const dispatch = usePlaygroundDispatch();

  const handleUrlChange = (): void => {};

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    const { value }: { value: string } = (event.target as HTMLFormElement).weaviateUri;

    if (value) {
      // store graphql uri
      dispatch({ type: 'setWeaviateUri', data: value });
      // redirect to /canvas
      history.push('/canvas');
    }
  };

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Box mb={2}>
        <Typography variant="h1" component="h1" align="center" gutterBottom>
          Welcome to the <br />
          Weaviate Playground
        </Typography>
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
      <FormAddWeaviate handleUrlChange={handleUrlChange} handleSubmit={handleSubmit} />
    </Grid>
  );
};

export default Welcome;
