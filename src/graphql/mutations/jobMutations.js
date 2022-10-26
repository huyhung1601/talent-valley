import { gql } from "@apollo/client";

export const SEARCH_JOBS = gql`
  mutation searchJobs($search: String!, $location: String) {
    searchJobs(search: $search, location: $location) {
      id
      title
      description
      jobType
      salary
      company {
        id
        name
        location
      }
    }
  }
`;

export const UPDATE_JOB = gql`
  mutation updateJob(
    $id: ID
    $title: String!
    $jobType: String!
    $salary: String!
    $location: String!
    $description: String!
    $companyId: ID!
  ) {
    updateJob(
      jobInput: {
        id: $id
        title: $title
        jobType: $jobType
        salary: $salary
        location: $location
        description: $description
        companyId: $companyId
      }
    ) {
      message
    }
  }
`;

export const CREATE_JOB = gql`
  mutation createJob(
    $title: String!
    $jobType: String!
    $salary: String!
    $location: String!
    $description: String!
    $companyId: ID!
  ) {
    createJob(
      jobInput: {
        title: $title
        jobType: $jobType
        salary: $salary
        location: $location
        description: $description
        companyId: $companyId
      }
    ) {
      id
      title
      location
      description
      salary
      applications
      createdAt
    }
  }
`;
