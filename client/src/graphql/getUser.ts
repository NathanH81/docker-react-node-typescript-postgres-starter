import { gql } from "@apollo/client";

export default gql`
  query getUser($id: String!) {
    getUser(id: $id) {
      id
    }
  }
`;
