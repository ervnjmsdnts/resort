import { Flex, VStack, Heading, Center, Text } from "@chakra-ui/react";
import { sliderData } from "../../data/sliderData";
import { CustomButtom } from "../Button";
import { SlideShow } from "../SlideShow";
import { Span } from "../Span";
import { Link } from "react-scroll";

export const LandingSection: React.FC = () => {
  return (
    <Flex bgColor="bg" p={10} direction={{ base: "column", md: "row" }}>
      <VStack alignItems={{ base: "center", md: "start" }}>
        <Heading
          fontSize={{ base: "4xl", md: "6xl" }}
          fontWeight={1000}
          w={{ md: 400 }}
          textAlign={{ base: "center", md: "start" }}>
          Where <Span>Tipid </Span>
          <Span>Vacation </Span>
          Starts
        </Heading>
        <Text
          w={{ md: 235 }}
          fontSize={{ base: "md", md: "lg" }}
          textAlign={{ base: "center", md: "start" }}>
          Unrivaled expertise for Unique Travel experiences
        </Text>
        <Center w={300}>
          <Link to="explore" smooth={true} spy={true}>
            <CustomButtom mt={10}>Explore</CustomButtom>
          </Link>
        </Center>
      </VStack>
      <SlideShow slides={sliderData} />
    </Flex>
  );
};
