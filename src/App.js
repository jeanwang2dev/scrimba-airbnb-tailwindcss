import React from "react";
import Nav from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import { useQuery, gql } from '@apollo/client';

const GET_CARDS = gql`
      query GetCards {
        cards {
            edges {
              node {               
                cardMeta {
                  title
                  price
                  location
                  openspots
                  coverimg {
                    sourceUrl
                  }
                  stats {
                    rating
                    reviewcount
                  } 
                }          
              }
            }
          }
      }
`;

function DisplayCards() {
  const { loading, error, data } = useQuery(GET_CARDS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log(data.cards);
  //.edges[2].node.cardMeta.stats.reviewcount

  return data.cards.edges.map(( item, key ) => (
    <Card 
        key={key}
        {...item}
    />
  ));
}

const App = () => {
    // const cards = data.map( item => {
    //     return (
    //       <Card 
    //         //   key={item.id}
    //         //   img={item.coverImg}
    //         //   rating={item.stats.rating}
    //         //   reviewCount={item.stats.reviewCount}
    //         //   location={item.location}
    //         //   title={item.title}
    //         //   price={item.price}
    //         key={item.id}
    //         {...item}
    //       />
    //     )
    //   });
    return (
        <div className="max-w-xl mx-auto pb-2">
            <Nav />
            <Hero />            
            <section className="px-9 flex flex-nowrap overflow-x-scroll gap-x-8">
              <DisplayCards />
            </section>
        </div>
    )
}

export default App;