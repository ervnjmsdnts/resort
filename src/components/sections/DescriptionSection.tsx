import { Flex, Heading, Text } from "@chakra-ui/layout";

export const DescriptionSection: React.FC = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      p={10}
      id="explore"
      bgColor="bg">
      <Heading color="primary">Description</Heading>
      <Text textAlign="center" fontSize={{ base: "md", md: "xl" }} mt={30}>
        LUXURY is both modern and stylish, practical and surprising,
        environmentally friendly and sumptuous. These resorts are part of a new
        breed of hotel, one that is driven by the desire to be special. Featured
        here are the beach resorts that will surely give you an amazing
        experience and satisfaction. Come with us to explore the north of
        Batangas!
      </Text>
    </Flex>
  );
};
