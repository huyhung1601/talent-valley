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
