import Nav from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";


const App = () => {
    const cards = data.map( item => {
        return (
          <Card 
              key={item.id}
              img={item.coverImg}
              rating={item.stats.rating}
              reviewCount={item.stats.reviewCount}
              location={item.location}
              title={item.title}
              price={item.price}
          />
        )
      });
    return (
        <div className="max-w-xl mx-auto pb-8 bg-yellow-300">
            <Nav />
            <Hero />
            <section className="px-9 flex flex-nowrap overflow-x-scroll gap-x-8">
                {cards}
            </section>
        </div>
    )
}

export default App;