import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      username
      email
      token
    }
  }
`;

export const REGISTER = gql`
  mutation register(
    $email: String!
    $username: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      registerInput: {
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      username
      email
      token
    }
  }
`;

// export const UPDATESAVEDJOBS = gql`
//   mutation updateSavedJobs($userId: String!, $jobId: String!): {
//     updateSavedJobs(userId: $userId, jobId: $jobId){
//       message
//     }
//   }
// `;
