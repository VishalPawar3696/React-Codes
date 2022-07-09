import { useState } from "react";
import RestaurantCard from "./Components/RestaurantCard";
import "./styles.css";
const data = [
  {
    name: "Little Hut",
    id: 20,
    cuisine: ["Asian", "South", "Indian"],
    constForTwo: 30,
    minOrder: 200,
    ratings: 1.6,
    votes: 500,
    reviews: 455,
    src: `https://img.freepik.com/free-photo/paneer-butter-masala-cheese-cottage-curry-served-with-rice-laccha-paratha_466689-73715.jpg?t=st=1657156480~exp=1657157080~hmac=f3ad119670d5e1118096761aba000311857415d60dc3f96dc973ba04f6befdb0&w=1060`
  },
  {
    name: "Little Hut",
    id: 20,
    cuisine: ["Asian", "South", "Indian"],
    constForTwo: 30,
    minOrder: 200,
    ratings: 1.6,
    votes: 500,
    reviews: 455,
    src: `https://img.freepik.com/free-photo/paneer-butter-masala-cheese-cottage-curry-served-with-rice-laccha-paratha_466689-73715.jpg?t=st=1657156480~exp=1657157080~hmac=f3ad119670d5e1118096761aba000311857415d60dc3f96dc973ba04f6befdb0&w=1060`
  },
  {
    name: "Little Hut",
    id: 20,
    cuisine: ["Asian", "South", "Indian"],
    constForTwo: 30,
    minOrder: 200,
    ratings: 1.6,
    votes: 500,
    reviews: 455,
    src: `https://img.freepik.com/free-photo/paneer-butter-masala-cheese-cottage-curry-served-with-rice-laccha-paratha_466689-73715.jpg?t=st=1657156480~exp=1657157080~hmac=f3ad119670d5e1118096761aba000311857415d60dc3f96dc973ba04f6befdb0&w=1060`
  },
  {
    name: "Little Hut",
    id: 20,
    cuisine: ["Asian", "South", "Indian"],
    constForTwo: 30,
    minOrder: 200,
    ratings: 1.6,
    votes: 500,
    reviews: 455,
    src: `https://img.freepik.com/free-photo/paneer-butter-masala-cheese-cottage-curry-served-with-rice-laccha-paratha_466689-73715.jpg?t=st=1657156480~exp=1657157080~hmac=f3ad119670d5e1118096761aba000311857415d60dc3f96dc973ba04f6befdb0&w=1060`
  },
  {
    name: "Little Hut",
    id: 20,
    cuisine: ["Asian", "South", "Indian"],
    costForTwo: 30,
    minOrder: 200,
    ratings: 1.6,
    votes: 500,
    reviews: 455,
    src: `https://img.freepik.com/free-photo/paneer-butter-masala-cheese-cottage-curry-served-with-rice-laccha-paratha_466689-73715.jpg?t=st=1657156480~exp=1657157080~hmac=f3ad119670d5e1118096761aba000311857415d60dc3f96dc973ba04f6befdb0&w=1060`
  }
];

export default function App() {
  return (
    <div className="App">
      <h1>Restaurant Card</h1>
      {/* <img src="https://i.imgur.com/lMeVwr7.png"/> */}
      <RestaurantCard />
      {data.map((item) => {
        console.log(item.name);
        return (
          <RestaurantCard
            name={item.name}
            id={item.id}
            cuisine={item.cuisine}
            costForTwo={item.costForTwo}
            minOrder={item.minOrder}
            ratings={item.ratings}
            votes={item.votes}
            reviews={item.reviews}
            src={item.src}
          />
        );
      })}
    </div>
  );
}
