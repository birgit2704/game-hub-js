import React, { useEffect, useState } from "react";
import { SimpleGrid, Text } from "@chakra-ui/react";
import axios, { CanceledError } from "axios";
import GameCard from "./GameCard";

const GameCardContainer = () => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .get("https://api.rawg.io/api/games?key=81b8071d70ca4486bd7392692f4b3e5b")
      .then((res) => {
        setGames(res.data.results);
        setError("");
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
  }, []);

  return (
    //   {error && <Text color="red">{error}</Text>}

    <SimpleGrid columns={{ base: 1, sm: 2, md: 3, xl: 4 }} spacing="20px">
      {games.map((game) => (
        <GameCard
          name={game.name}
          image={game.background_image}
          metacritic={game.metacritic}
          platforms={game.parent_platforms}
          //   platforms= [] ich will ein array von game.parent_platform platform.name
        />
      ))}
    </SimpleGrid>
  );
};

export default GameCardContainer;
