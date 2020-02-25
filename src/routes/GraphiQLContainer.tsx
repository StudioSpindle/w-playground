import GraphiQL from 'graphiql';
import 'graphiql/graphiql.css';
import * as React from 'react';

import { createApiHeaders } from '../apis/ApiWeaviate';

const params = new URLSearchParams(window.location.search);
let gqlText = params.get('gqlquery');

if (gqlText === null) {
  gqlText = '# \n';
  gqlText += '#                           _       _        \n';
  gqlText += '#                          (_)     | |       \n';
  gqlText += '# __      _____  __ ___   ___  __ _| |_ ___  \n';
  gqlText += '# \\ \\ /\\ / / _ \\/ _` \\ \\ / / |/ _` | __/ _ \\ \n';
  gqlText += '#  \\ V  V /  __/ (_| |\\ V /| | (_| | ||  __/ \n';
  gqlText += '#   \\_/\\_/ \\___|\\__,_| \\_/ |_|\\__,_|\\__\\___| \n';
  gqlText += '#                                            \n';
  gqlText += '# \n';
  gqlText += '# Weaviate GraphQL interface\n';
  gqlText += '# More information: www.semi.technology\n';
  gqlText += '#\n';
  gqlText += '# Powered by GraphiQL\n';
} else {
  gqlText = gqlText.replace(/\n/g, '\n');
}

const uri = localStorage.getItem('weaviateUri') || '';
// const query = urlParams.get('query');
// const queryObject = query ? JSON.parse(query) : gqlText;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const graphQLFetcher = (graphQLParams: any): Promise<any> =>
  fetch(uri, {
    body: JSON.stringify(graphQLParams),
    headers: createApiHeaders(),
    method: 'POST'
  }).then(response => response.json());

const GraphiQLContainer: React.FC = () => (
  <div style={{ display: 'flex', flex: '1', width: '100vw' }}>
    <style>{`
      .graphiql-container .title {
        display: none
      }
      .graphiql-container .execute-button-wrap {
        margin: 0
      }
    `}</style>
    <GraphiQL fetcher={graphQLFetcher} />
    {/* query={queryObject} */}
  </div>
);

export default GraphiQLContainer;
