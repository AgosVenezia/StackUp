import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
 ApolloClient,
 InMemoryCache,
 ApolloProvider,
 split,
 HttpLink,
} from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { createClient } from 'graphql-ws';
import { getMainDefinition } from '@apollo/client/utilities';

const httpLink = new HttpLink({
 uri: 'http://localhost:8080/'
});

const wsLink = new GraphQLWsLink(createClient({
 url: 'ws://localhost:8080/',
}));

const splitLink = split(
 ({ query }) => {
  const definition = getMainDefinition(query);
  return (
   definition.kind === 'OperationDefinition' &&
   definition.operation === 'subscription'
  );
 },
 wsLink,
 httpLink
)

const client = new ApolloClient({
 link: splitLink,
 cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <ApolloProvider client={client}>
  <App />
 </ApolloProvider>
);

reportWebVitals();