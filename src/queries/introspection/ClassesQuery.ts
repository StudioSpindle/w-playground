import { gql } from 'apollo-boost';

type ClassType = 'All' | 'Things' | 'Actions';

/**
 * Types
 */
interface IGetClassesData {
  __type: {
    name: string;
    fields: Array<{
      name: ClassType;
      type: {
        name: string;
        ofType: {
          name: string;
        };
        fields: Array<{
          name: string;
          type: {
            ofType: {
              name: string;
            };
          };
        }>;
      };
    }>;
  };
}

interface IGetClassesVariables {
  typename: 'GetObj';
}

const GET_CLASSES = gql`
  query GetClasses($typename: String!) {
    __type(name: $typename) {
      name
      fields {
        name
        type {
          name
          ofType {
            name
          }
          fields {
            name
            type {
              ofType {
                name
              }
            }
          }
        }
      }
    }
  }
`;

export default GET_CLASSES;
