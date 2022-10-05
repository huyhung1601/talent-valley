import { gql } from "@apollo/client";

export const MY_PROFILE = gql`
  query myProfile {
    myProfile {
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
        location
        company {
          id
        }
        company {
          id
          name
        }
      }
    }
  }
`;
