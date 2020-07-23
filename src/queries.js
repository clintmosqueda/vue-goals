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

const COMMENT_INFO = gql`
  fragment CommmentInfo on Comment {
    id
    postId
    content
    createdAt
  }
`;

export const GET_POSTS = gql`
  query {
    posts {
      ...PostInfo
    }
  }
  ${POST_INFO}
`;

export const GET_POST_BY_ID = gql`
  query getPostById($id: Int) {
    post(id: $id) {
      ...PostInfo
      comments {
        ...CommmentInfo
      }
    }
  }
  ${POST_INFO}
  ${COMMENT_INFO}
`;

export const LIMIT_POSTS = gql`
  query postList($limit: Int) {
    posts( pagination: {limit: $limit}) {
      ...PostInfo
    }
  }
  ${POST_INFO}
`;

export const ADD_COMMENT = gql`
  mutation addComment($postId: Int!, $content: String!) {
    addComment(postId: $postId, content: $content) {
      ...CommmentInfo
    }
  }
  ${COMMENT_INFO}
`;

export const ADD_POST = gql`
  mutation addPost($title: String!, $content: String ) {
    addPost(post: {title: $title, content: $content}) {
      title
      content
    }
  }
`;