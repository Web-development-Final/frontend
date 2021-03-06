import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const URI = "http://localhost:8000/graphql/";

export const getEventData = async () => {
  const client = new ApolloClient({
    uri: URI,
    cache: new InMemoryCache(),
  });

  const query = gql`
    {
      allEvents {
        title
        description
      }
    }
  `;

  const resEventsData = client
    .query({
      query,
    })
    .then((result) => result);

  return {
    props: {
      resEventsData,
    },
  };
};
