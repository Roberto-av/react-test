import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Search";
import CardFormate from "./Card";
import CustomNavbar from "./CustomNavbar";
import "./App.css";

function App() {
    const [pokemonData, setPokemonData] = useState([]);

    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch(
            "https://pokeapi.co/api/v2/pokemon?limit=40"
          );
          const data = await response.json();
          setPokemonData(data.results.map(pokemon => ({
            ...pokemon,
            name: pokemon.name.toUpperCase()
          })));
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
  
      fetchData();
    }, []);

  return (
    <div className="App" >
      <CustomNavbar />
      <Container>
        <div className="card-container">
          <Search />
          {pokemonData.map((pokemon, index) => (
            <CardFormate
              key={index}
              title={pokemon.name}
              imageUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                index + 1
              }.png`}
              description={`ESTE ES ${pokemon.name}`}
              buttonText="Detalles"
            />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default App;
