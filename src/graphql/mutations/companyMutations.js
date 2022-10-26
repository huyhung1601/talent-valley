import { gql } from "@apollo/client";

export const UPDATE_COMPANY_REVIEW = gql`
  mutation updateCompanyReview(
    $about: String!
    $website: String!
    $industry: String!
    $location: String!
  ) {
    updateCompanyReview(
      about: $about
      website: $website
      industry: $industry
      location: $location
    ) {
      message
    }
  }
`;
