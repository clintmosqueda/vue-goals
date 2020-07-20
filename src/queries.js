import { gql } from "apollo-boost"

const POST_INFO = gql`
  fragment PostInfo on Post {
    id
    title
    content
    image
    createdAt
  }
`;

export const GET_POSTS = gql`
  query {
    posts {
      ...PostInfo
      comments {
        id
        postId
        content
        createdAt
      }
    }
  }
  ${POST_INFO}
`;


export const LIMIT_POSTS = gql`
  query postList($limit: Int) {
    posts( pagination: {limit: $limit}) {
      ...PostInfo
    }
  }
  ${POST_INFO}
`;