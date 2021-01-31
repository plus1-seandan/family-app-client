import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      ok
      token
      user {
        id
        email
        username
      }
      errors {
        path
        message
      }
    }
  }
`;

export const PROFILE = gql`
  {
    getProfile {
      user {
        id
        email
        username
        firstName
        lastName
        photo
      }
      group {
        id
        members {
          id
          email
          username
          firstName
          lastName
          photo
        }
      }
    }
  }
`;
export const CREATE_EVENT = gql`
  mutation($eventName: String!, $startDate: String!) {
    createEvent(eventName: $eventName, startDate: $startDate) {
      ok
      event {
        id
        eventName
        startDate
      }
      errors {
        path
        message
      }
    }
  }
`;

export const CREATE_ALBUM = gql`
  mutation($albumName: String!) {
    createAlbum(albumName: $albumName) {
      ok
      album {
        id
        albumName
        createdAt
        albumCover
      }
      errors {
        path
        message
      }
    }
  }
`;

export const REGISTER = gql`
  mutation(
    $username: String!
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
    $dateOfBirth: String!
  ) {
    register(
      username: $username
      email: $email
      password: $password
      firstName: $firstName
      lastName: $lastName
      dateOfBirth: $dateOfBirth
    ) {
      ok
      errors {
        path
        message
      }
    }
  }
`;

export const ME = gql`
  {
    me {
      id
      username
      email
      photo
      firstName
      lastName
    }
  }
`;

export const UPCOMING_EVENTS = gql`
  {
    getUpcomingEvents {
      id
      eventName
      startDate
    }
  }
`;

export const ALBUMS = gql`
  {
    getAlbums {
      id
      albumName
      albumCover
      createdAt
    }
  }
`;

export const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export const POST_PHOTO = gql`
  mutation postPhoto($albumId: Int!, $url: String!) {
    postPhoto(albumId: $albumId, url: $url) {
      photo {
        id
        url
      }
    }
  }
`;
