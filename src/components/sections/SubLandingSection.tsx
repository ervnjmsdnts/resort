import { Image } from "@chakra-ui/image";
import { Flex, Heading } from "@chakra-ui/layout";
import { Span } from "../Span";

export const SubLandingSection: React.FC = () => {
  return (
    <Flex justifyContent="center" p={{ base: 0, md: 10 }}>
      <Flex position="relative" justifyContent="center" alignItems="center">
        <Flex
          position="absolute"
          justifyContent="center"
          alignItems="center"
          direction={{ base: "column", md: "row" }}
          width={{ base: "full", md: 450 }}
          height={{ base: "full", md: 250 }}
          bgColor="whiteTransparent"
          mr={{ base: 0, md: 4 }}
          rounded={{ md: 10 }}
          zIndex={2}>
          <Heading
            textAlign="center"
            fontSize={{ base: "3xl", md: "4xl" }}
            width={{ base: 350, md: "auto" }}>
            We <Span>maximize</Span> your <Span>vacation</Span>
            <Span>experience</Span> by just clicking.
          </Heading>
        </Flex>
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"
          w={{ base: "full", md: 900 }}
          h={{ base: "full", md: 400 }}
          rounded={{ md: 10 }}
        />
      </Flex>
    </Flex>
  );
};
