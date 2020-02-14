import React, { ChangeEvent, FormEvent } from 'react';
import { FormControl, TextField, Button, Box } from '@material-ui/core';
import useStyles from './useStyles';

export interface FormAddWeaviateUrlProps {
  handleUrlChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const FormAddWeaviate: React.FC<FormAddWeaviateUrlProps> = ({ handleSubmit, handleUrlChange }) => {
  const classes = useStyles();
  return (
    <form id="formAddWeaviate" onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="row" flexGrow="1">
        <Box alignSelf="center" p={1}>
          <FormControl margin="normal" required fullWidth>
            <TextField
              required
              label="Weaviate URL"
              name="weaviateUri"
              type="text"
              id="weaviateUri"
              autoComplete="weaviateUri"
              onChange={handleUrlChange}
              className={classes.input}
              helperText="i.e. http://localhost:8080/v1/graphql"
            />
          </FormControl>
        </Box>
        <Box alignSelf="center">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="small"
            className={classes.button}
          >
            Connect Weaviate
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default FormAddWeaviate;
