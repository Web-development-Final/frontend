import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const URI = "http://127.0.0.1:54855/graphql/";

export async function getEventData() {
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

  client
    .query({
      query,
    })
    .then((result) => console.log(result.data));

  return {
    props: {
      key: "I am apollo",
    },
  };
}
