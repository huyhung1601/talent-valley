import { gql } from "@apollo/client";

export const GET_INTERVIEW = gql`
  query interview($interviewId: ID!) {
    interview(interviewId: $interviewId) {
      id
      complete
      createdAt
      updatedAt
      questions {
        question
        answer
      }
    }
  }
`;
