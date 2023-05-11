import React, { useEffect, useState } from "react";
import { SimpleGrid, Text } from "@chakra-ui/react";
import axios, { CanceledError } from "axios";

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
    <div>
      {error && <Text color="red">{error}</Text>}
      <ul>
        {games.map((g) => (
          <li>{g.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GameCardContainer;
