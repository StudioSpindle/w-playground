import React from 'react';
import { Redirect } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { makeStyles } from '@material-ui/core';
import { Library, Section } from '../components';


const useStyles = makeStyles(() => ({
  aside: {
    marginLeft: '25px',
    marginTop: '25px',
    position: 'absolute'
  },
  main: {
    display: 'flex',
    flex: 1
  }
}));

const Canvas: React.FC = () => {
  const classes = useStyles();
  const uri = localStorage.getItem('weaviateUri');
  if (uri) {
    const client = new ApolloClient({ uri });
    return (
      <ApolloProvider client={client}>
        <aside className={classes.aside}>
          <Section title="Schema Item Library" shortTitle="Lib">
            <Library />
          </Section>
        </aside>
      </ApolloProvider>
    );
  }

  return <Redirect to="/" />;
};

export default Canvas;
