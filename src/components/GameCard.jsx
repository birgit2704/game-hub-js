import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  HStack,
  VStack,
  Heading,
  Text,
  Icon,
} from "@chakra-ui/react";

const GameCard = ({ name, image, metacritic, platforms }) => {
  return (
    <Card w="300px" padding={0} overflow="hidden" mb={5}>
      <CardBody>
        <Image src={image} alt={name} />
        <VStack>
          <HStack>
            {platforms.map((p) => (
              <span>{p.platform.name}</span>
            ))}
          </HStack>

          <Heading fontSize="2xl">{name}</Heading>
          <Text>{metacritic}</Text>
        </VStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
