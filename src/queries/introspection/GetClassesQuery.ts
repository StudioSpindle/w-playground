import { gql } from 'apollo-boost';

type ClassType = 'All' | 'Things' | 'Actions';

export interface GetClassesData {
  type: {
    fields: Array<{
      name: ClassType;
    }>;
  };
}

const GET_CLASSES = gql`
  query($typename: String!) {
    __type(name: $typename) {
      fields {
        name
        type {
          fields {
            name
          }
        }
      }
    }
  }
`;

export default GET_CLASSES;
