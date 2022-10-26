import { gql } from "@apollo/client";

export const GET_COMPANY = gql`
  query company($companyId: ID!) {
    company(companyId: $companyId) {
      id
      name
      email
      number
      website
      industry
      location
      about
      image
      logo
    }
  }
`;

export const GET_COMPANY_JOBS = gql`
  query company($companyId: ID!) {
    company(companyId: $companyId) {
      id
      jobs {
        id
        title
        location
        description
        salary
        applications
        createdAt
      }
    }
  }
`;
