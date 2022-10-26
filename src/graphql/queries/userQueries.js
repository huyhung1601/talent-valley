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
      role
      companyId
      savedJobs {
        id
        title
        location
        description
        company {
          name
          logo
        }
      }
      applications {
        id
        status
        interview {
          id
          complete
        }
        job {
          id
          title
          location
          description
          company {
            name
            logo
          }
        }
      }
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

export const MY_COMPANY = gql`
  query myCompany {
    myCompany {
      id
      name
      location
      email
      number
      website
      industry
      about
      image
      logo
    }
  }
`;
