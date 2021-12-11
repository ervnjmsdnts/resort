import { Layout } from "../components/Layout";
import { useParams } from "react-router";
import { Box, Heading, Text, VStack } from "@chakra-ui/layout";
import { resortData } from "../data/resortData";
import { Center, Flex } from "@chakra-ui/react";
import StarRating from "react-svg-star-rating";

import { Span } from "../components/Span";
import "../style.css";
import { SlideShow } from "../components/SlideShow";

export const ResortPage: React.FC = () => {
  const { municipality } = useParams();
  const data = resortData.find((d) => d.municipality === municipality);
  return (
    <Layout>
      <Flex bgColor="bg" alignItems="end" justifyContent="center" height="10vh">
        <Heading
          fontWeight="bold"
          fontSize={{ base: "2xl", md: "4xl" }}
          width={500}
          textAlign="center">
          Beach Resorts in <Span>{municipality}, Batangas</Span>
        </Heading>
      </Flex>
      {data?.resorts.map((resort, index) => (
        <>
          <VStack
            key={index}
            alignItems={{ base: "center", md: "start" }}
            p={8}>
            <Text
              color="primary"
              fontSize={{ base: "xl", md: "3xl" }}
              fontWeight="semibold"
              textAlign={{ base: "center", md: "start" }}>
              {resort.name}
            </Text>
            <Center w="full">
              <SlideShow slides={resort.images} data={resort.images} />
            </Center>
          </VStack>
          <Box p={8} fontSize={{ base: "lg", md: "xl" }} bgColor="bg">
            <Text>
              <Span fontWeight="semibold">Location:</Span> {resort.location}
            </Text>
            {resort.contact && (
              <Text>
                <Span fontWeight="semibold">Contact:</Span> {resort.contact}
              </Text>
            )}
            {resort.fbPage && (
              <Text>
                <Span fontWeight="semibold">Facebook Page:</Span>{" "}
                <a
                  className="resort-link"
                  href={resort.fbPage.link}
                  target="_blank"
                  rel="noreferrer">
                  {resort.fbPage.name}
                </a>
              </Text>
            )}
            <Span fontWeight="semibold">Offers:</Span>
            {resort.offers.map((offer, index) => (
              <Text key={index}>{offer}</Text>
            ))}
            {resort.rating && (
              <Flex alignItems="center">
                <Text mr={2}>
                  <Span fontWeight="semibold">Ratings:</Span>
                  {resort.rating}
                </Text>
                <StarRating
                  isReadOnly
                  unit="float"
                  containerClassName="star-span"
                  initialRating={resort.rating}
                  activeColor="#041A4B"
                  size={15}
                />
              </Flex>
            )}
          </Box>
        </>
      ))}
    </Layout>
  );
};
