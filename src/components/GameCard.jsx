import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  VStack,
  Heading,
  Text,
  Icon,
} from "@chakra-ui/react";

const GameCard = ({ name, image, metacritic }) => {
  return (
    <Card w="300px" padding="0" overflow="hidden" mb={5}>
      <CardBody>
        <Image src={image} alt={name} />
        <VStack>
          <Text>{}</Text>
          <Heading fontSize="2xl">{name}</Heading>
          <Text>{metacritic}</Text>
        </VStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
