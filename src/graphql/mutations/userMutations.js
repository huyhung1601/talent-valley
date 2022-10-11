import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      myJobs {
        job {
          id
        }
        status
        updatedAt
      }
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
      token
    }
  }
`;

export const UPDATE_CONTACT = gql`
  mutation updateContact(
    $username: String!
    $number: String
    $address: String
  ) {
    updateContact(username: $username, number: $number, address: $address) {
      message
    }
  }
`;

export const SAVE_JOB = gql`
  mutation saveJob($jobId: String!) {
    saveJob(jobId: $jobId) {
      message
    }
  }
`;

export const APPLY_JOB = gql`
  mutation applyJob($jobId: String!) {
    applyJob(jobId: $jobId) {
      message
    }
  }
`;

export const REMOVE_FROM_MY_JOBS = gql`
  mutation removeFromMyJobs($jobId: String!) {
    removeFromMyJobs(jobId: $jobId) {
      message
    }
  }
`;

export const UPDATE_SAVED_JOBS = gql`
  mutation updateSavedJobs($jobId: String!) {
    updateSavedJobs(jobId: $jobId) {
      message
    }
  }
`;

export const UPDATE_RESUME = gql`
  mutation updateResume($fileName: String!) {
    updateResume(fileName: $fileName) {
      url
    }
  }
`;
