import { getItem } from "../functions";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const API_BASE_URL = process.env.BASE_API;
const USER_SERVICE_URL = process.env.USER_SERVICE_API_PATH;

const authLink = setContext(
  (_, { headers = { "Content-type": "application/json" } }) => {
    // getting token from local storage
    const token = getItem("token");
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? token : "",
      },
    };
  }
);

// create new client
export const client = (serviceUrl) => {
  const httpLink = new HttpLink({ uri: serviceUrl });
  const apolloClient = new ApolloClient({
    cache: new InMemoryCache({
      addTypename: false,
    }),
    link: authLink.concat(httpLink),
  });
  return apolloClient;
};

export const userClient = client(`${API_BASE_URL}/${USER_SERVICE_URL}`);
