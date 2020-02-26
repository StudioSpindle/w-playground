import React, { useState } from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { FormAddWeaviate } from '../components';
import { usePlaygroundDispatch } from '../playground-context';
import { createApiHeaders } from '../apis/ApiWeaviate';

const subStyle = {
  fontSize: '1.5rem',
  fontStyle: 'italic'
};

const Welcome: React.FC = () => {
  const [hasError, setHasError] = useState(false);
  const history = useHistory();
  const dispatch = usePlaygroundDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const weaviateUri = data.get('weaviateUri') as string;

    if (weaviateUri) {
      const apiUrl = weaviateUri.replace(/v1\/graphql/, '');
      fetch(`${apiUrl}/v1/graphql`, {
        method: 'POST',
        headers: createApiHeaders(),
        body: JSON.stringify({ query: `{ Get }` })
      })
        .then(resp => {
          // Only continue if a graphql is found at the given URL
          if (resp.ok) {
            dispatch({ type: 'setWeaviateUri', data: `${apiUrl}/v1/graphql` });
            history.push('/canvas');
          }
          setHasError(true);
        })
        .catch(() => {
          setHasError(true);
        });
    }
  };

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Box mb={2}>
        <Typography variant="h1" component="h1" align="center" gutterBottom>
          Welcome to the <br />
          Weaviate Playground<sub style={subStyle}>beta</sub>
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
      <FormAddWeaviate hasError={hasError} handleSubmit={handleSubmit} />
    </Grid>
  );
};

export default Welcome;
