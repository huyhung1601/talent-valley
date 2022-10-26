import { gql } from "@apollo/client";

export const MOVE_APPLICATION_TO_REVIEW = gql`
  mutation moveApplicationToReview($applicationId: ID!) {
    moveApplicationToReview(applicationId: $applicationId) {
      message
    }
  }
`;

export const MOVE_APPLICATION_TO_INTERVIEW = gql`
  mutation moveApplicationToInterview(
    $applicationId: ID!
    $questions: [QuestionInput!]!
  ) {
    moveApplicationToInterview(
      applicationId: $applicationId
      questions: $questions
    ) {
      id
      createdAt
      updatedAt
      questions {
        question
        answer
      }
    }
  }
`;
