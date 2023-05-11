import React, { useEffect, useState } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import apiClient, { CanceledError } from "../services/api-client";
import axios from "axios";

const GameCardContainer = () => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.rawg.io/api/games?key=81b8071d70ca4486bd7392692f4b3e5b")
      .then((res) => setGames(res.data.results));
  }, []);

  return (
    <ul>
      {games.map((g) => (
        <li>{g.name}</li>
      ))}
    </ul>
  );
};

export default GameCardContainer;
