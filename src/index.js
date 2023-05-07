// const sayHelloManyTimes = (times) =>
//   new Array(times).fill(1).map((_, i) => `Hello ${i + 1}`);

// const helloDiv = document.createElement("div");
// helloDiv.innerHTML = sayHelloManyTimes(10).join("<br/>");
// document.body.append(helloDiv);

// index.js
import './style.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://demo5.temptesting.com/graphql',
    cache: new InMemoryCache(),
  });
  
ReactDOM.createRoot(document.getElementById('root')).render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
)



//   client
//   .query({
//     query: gql`
//       query GetCards {
//         cards {
//             edges {
//               node {
//                 cardMeta {
//                   title
//                   price
//                   stats {
//                     rating
//                     reviewcount
//                   }
//                 }
//               }
//             }
//           }
//       }
//     `,
//   })
//   .then((result) => console.log(result));