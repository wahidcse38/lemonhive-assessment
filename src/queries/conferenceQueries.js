import { gql } from "@apollo/client";

export const CONFERENCES = gql`
  query {
    conferences {
      id
      name
      startDate
      slogan
    }
  }
`;

export const CONFERENCE = gql`
  query getConference($id: ID!) {
    conference(id: $id) {
      id
      name
      slogan
      startDate
      organizers {
        name
        aboutShort
        image {
          url
          title
        }
      }
      speakers {
        name
        aboutShort
        social {
          facebook
          twitter
          github
          linkedin
        }
        image {
          url
          title
        }
      }
      schedules {
        day
        intervals {
          begin
          end
          title
        }
      }
      sponsors {
        name
        aboutShort
        image {
          url
          title
        }
      }
    }
  }
`;
