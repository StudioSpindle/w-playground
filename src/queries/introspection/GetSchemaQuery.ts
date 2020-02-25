import { gql } from 'apollo-boost';

const GET_SCHEMA = gql`
  query {
    __schema {
      types {
        name
      }
    }
  }
`;

export default GET_SCHEMA;
