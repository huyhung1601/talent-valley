import { gql } from "@apollo/client";

export const MY_PROFILE = gql`
  query myProfile {
    myProfile {
      id
      username
      email
      address
      number
      resume
    }
  }
`;

export const MY_JOBS = gql`
  query MyJobs {
    myJobs {
      status
      updatedAt
      job {
        title
        id
        description
        company {
          id
          name
          location
        }
      }
    }
  }
`;
