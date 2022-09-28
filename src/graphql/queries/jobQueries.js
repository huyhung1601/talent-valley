import { gql } from "@apollo/client";

export const GET_JOBS = gql`
  query jobs($search: String, $location: String) {
    jobs(search: $search, location: $location) {
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

export const GET_JOB = gql`
  query job($jobId: ID!) {
    job(id: $jobId) {
      id
      title
      jobType
      salary
      description
      company {
        id
        name
        location
      }
    }
  }
`;

// export const MY_JOB = gql`
//   query myjobs($userId: ID!){
//   }
// `;
