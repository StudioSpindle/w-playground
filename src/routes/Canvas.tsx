import React from 'react';
import { Redirect } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import CanvasSidebar from '../components/CanvasSidebar/CanvasSidebar';

const Canvas: React.FC = () => {
  const uri = localStorage.getItem('weaviateUri');
  if (uri) {
    const client = new ApolloClient({ uri });
    return (
      <ApolloProvider client={client}>
        <CanvasSidebar />
      </ApolloProvider>
    );
  }

  return <Redirect to="/" />;
};

export default Canvas;
