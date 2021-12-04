import { Box, Flex, Heading, HStack } from "@chakra-ui/layout";
import { IoMdAirplane } from "react-icons/io";

export const Logo: React.FC<{ withIcon?: boolean }> = ({ withIcon }) => {
  return (
    <Flex fontSize="5xl">
      {withIcon && (
        <Box transform="rotate(30deg)">
          <IoMdAirplane style={{ color: "#FF701F" }} />
        </Box>
      )}
      <HStack>
        <Heading textColor="primary">Travel</Heading>
        <Heading textColor="secondary">Trio</Heading>
      </HStack>
    </Flex>
  );
};
