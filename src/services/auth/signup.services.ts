import { userClient } from "@utils/api/api";
import { gql } from "@apollo/client";

const signUpQuery = gql`
  mutation Mutation($user: signupQueryInputType) {
    signup(user: $user) {
      id
      firstName
      lastName
      email
      role
    }
  }
`;
const signUp = (user) =>
  userClient.mutate({
    mutation: signUpQuery,
    variables: {
      user,
    },
  });

export default signUp;
