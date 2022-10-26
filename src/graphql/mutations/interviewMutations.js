import { gql } from "@apollo/client";

export const GET_INTERVIEW_URL = gql`
  mutation getInterviewUrl($fileName: String!) {
    getInterviewUrl(fileName: $fileName) {
      url
    }
  }
`;

export const COMPLETE_INTERVIEW = gql`
  mutation completeInterview($interviewId: ID!, $questions: [QuestionInput!]!) {
    completeInterview(interviewId: $interviewId, questions: $questions) {
      message
    }
  }
`;
