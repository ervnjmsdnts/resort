import Icon from "@chakra-ui/icon";
import { Center, Flex, Text, VStack } from "@chakra-ui/layout";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { SiTiktok } from "react-icons/si";
import { HiMail } from "react-icons/hi";
import { Span } from "./Span";
import { Logo } from "./Logo";

export const Footer: React.FC = () => {
  return (
    <VStack bgColor="bg" p={10} spacing={6}>
      <Flex
        justifyContent="space-evenly"
        alignItems={{ base: "start", md: "center" }}
        direction={{ base: "column", md: "row" }}
        w="full">
        <VStack alignItems="start">
          <SocialItems icon={FaFacebook} label="Facebook:">
            Travel Trio
          </SocialItems>
          <SocialItems icon={FaTwitter} label="Twitter:">
            @traveltrio
          </SocialItems>
          <SocialItems icon={AiFillInstagram} label="Instragram:">
            @traveltrio
          </SocialItems>
        </VStack>
        <VStack alignItems="start" mt={{ base: 2, md: 0 }}>
          <SocialItems icon={SiTiktok} label="Tiktok:">
            @traveltrio
          </SocialItems>
          <SocialItems icon={HiMail} label="E-mail:">
            traveltrio@gmail.com
          </SocialItems>
        </VStack>
      </Flex>
      <Text textAlign="center" fontSize="xl">
        <Span>Contact Us at: </Span>0950-317-8835 | 0975-414-7989
      </Text>
      <Center>
        <Logo />
      </Center>
    </VStack>
  );
};

export const SocialItems: React.FC<{ icon: React.FC; label: string }> = ({
  icon,
  label,
  children,
}) => {
  return (
    <Flex fontSize="lg" alignItems="center">
      <Icon as={icon} fontSize="1.25rem" color="primary" mr={2} />
      <Text>
        <Span>{label} </Span>
        {children}
      </Text>
    </Flex>
  );
};
