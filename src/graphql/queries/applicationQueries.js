import { gql } from "@apollo/client";

export const GET_APPLICATIONS_BY_JOB = gql`
  query GetApplicationsByJob($jobId: ID!) {
    getApplicationsByJob(jobId: $jobId) {
      id
      user {
        id
        username
        email
      }
      status
      job {
        id
      }
      createdAt
      resume
      interview {
        id
        complete
        questions {
          question
          answer
        }
        createdAt
        updatedAt
      }
    }
  }
`;

export const GET_APPLICATIONS = gql`
  query getApplications {
    getApplications {
      id
      user {
        id
        username
        email
      }
      status
      job {
        id
        title
        description
      }
      resume
      createdAt
      interview {
        id
        questions {
          question
          answer
        }
        createdAt
        updatedAt
      }
    }
  }
`;
