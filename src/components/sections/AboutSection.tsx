import { Flex, Heading, Text, VStack } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { Span } from "../Span";

export const AboutSection: React.FC = () => {
  return (
    <Flex
      p={10}
      justifyContent="space-evenly"
      alignItems="center"
      direction={{ base: "column", md: "row" }}>
      <Image
        src="images/three.gif"
        w={{ base: "full", md: 475 }}
        h={{ base: 200, md: 300 }}
        rounded={10}
      />
      <VStack p={4}>
        <Heading>
          <Span>About</Span>Us
        </Heading>
        <Text textAlign="center" fontSize={{ base: "md", md: "xl" }}>
          Three college students who loves to travel and explore the world with
          limited budget, hence, giving this website full of cheap vacation
          sites you'd never expect. Experience these beach resorts in Lemery,
          Calaca and Balayan of 1st District of Batangas.{" "}
        </Text>
      </VStack>
    </Flex>
  );
};
