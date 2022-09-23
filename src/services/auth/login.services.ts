import { userClient } from "@utils/api/api";
import { gql } from "@apollo/client";

const signInQuery = gql`
  query Signin($email: String, $password: String) {
    signin(email: $email, password: $password) {
      token
      user {
        id
        firstName
        lastName
        email
        role
      }
    }
  }
`;

const login = ({ email, password }) =>
  userClient.query({
    query: signInQuery,
    variables: {
      email,
      password,
    },
  });

export default login;
