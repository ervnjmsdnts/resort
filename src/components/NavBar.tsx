import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/accordion";
import { Link as RouterLink } from "react-router-dom";
import { IconButton } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { ChevronDownIcon, CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, Flex, HStack, Link, Stack } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";

import { Logo } from "./Logo";

interface INavLink {
  to: string;
  onClick?: () => void;
}

const NavLink: React.FC<INavLink & Record<string, any>> = ({
  children,
  to,
  onClick,
  ...props
}) => {
  return (
    <Link as={RouterLink} to={to} onClick={onClick} replace={true} {...props}>
      {children}
    </Link>
  );
};

export const NavBar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      as="nav"
      bgColor="bg"
      maxW="container.lg"
      mx="auto"
      position="sticky"
      zIndex={3}
      top={0}>
      <Flex h={16} alignItems="center" justifyContent="space-between" px={4}>
        <Logo withIcon />
        <HStack
          spacing={10}
          textColor="secondary"
          fontWeight="semibold"
          display={{ base: "none", md: "flex" }}>
          <NavLink to="/">Home</NavLink>
          <Menu>
            <MenuButton fontWeight="semibold">
              Resorts <ChevronDownIcon />
            </MenuButton>
            <MenuList
              bgColor="bgTransparent"
              color="white"
              fontWeight="semibold">
              <NavLink to="/Balayan">
                <MenuItem
                  _hover={{ bgColor: "primary" }}
                  _active={{ bgColor: "" }}
                  _focus={{ bgColor: "" }}>
                  Balayan
                </MenuItem>
              </NavLink>
              <NavLink to="/Calaca">
                <MenuItem _hover={{ bgColor: "primary" }}>Calaca</MenuItem>
              </NavLink>
              <NavLink to="/Lemery">
                <MenuItem _hover={{ bgColor: "primary" }}>Lemery</MenuItem>
              </NavLink>
            </MenuList>
          </Menu>
        </HStack>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>
      {isOpen ? (
        <Box
          display={{ md: "none" }}
          textAlign="left"
          pb={4}
          fontWeight="semibold">
          <Stack spacing={4}>
            <NavLink to="/" pl={4}>
              Home
            </NavLink>
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left" fontWeight="semibold">
                      Resorts
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} bgColor="bgTransparent" color="white">
                  <Stack pl={4} spacing={4} fontWeight="semibold">
                    <NavLink to="/Balayan" py={2}>
                      Balayan
                    </NavLink>
                    <NavLink to="/Calaca" py={2}>
                      Calaca
                    </NavLink>
                    <NavLink to="/Lemery" py={2}>
                      Lemery
                    </NavLink>
                  </Stack>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};
