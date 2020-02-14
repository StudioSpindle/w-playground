import { gql } from 'apollo-boost';

const NEWS_PUBLICATIONS = gql`
  {
    Get {
      Things {
        Publication {
          name
        }
      }
    }
  }
`;

export default NEWS_PUBLICATIONS;
