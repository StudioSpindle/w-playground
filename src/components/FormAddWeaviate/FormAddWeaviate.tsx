import React, { FormEvent } from 'react';
import { FormControl, TextField, Button, Box, Typography } from '@material-ui/core';
import useStyles from './useStyles';

export interface FormAddWeaviateUrlProps {
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  hasError?: boolean;
}

const FormAddWeaviate: React.FC<FormAddWeaviateUrlProps> = ({ handleSubmit, hasError }) => {
  const classes = useStyles();
  return (
    <form id="formAddWeaviate" onSubmit={handleSubmit}>
      {hasError && (
        <Box display="flex" flexDirection="row" flexGrow="1">
          <Box alignSelf="center" p={1}>
            <Typography color="error">
              No Weaviate found at this URL. Please make sure to use the correct port.
            </Typography>
          </Box>
        </Box>
      )}
      <Box display="flex" flexDirection="row" flexGrow="1">
        <Box alignSelf="center" p={1}>
          <FormControl margin="normal" required fullWidth>
            <TextField
              autoComplete="weaviateUri"
              className={classes.input}
              error={hasError}
              helperText="i.e. http://localhost:8080"
              id="weaviateUri"
              label="Weaviate URL"
              name="weaviateUri"
              required
              type="text"
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
