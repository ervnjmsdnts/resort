import { Container } from "@chakra-ui/layout";
import { Footer } from "./Footer";
import { NavBar } from "./NavBar";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <NavBar />
      <Container maxW="container.lg" p={0}>
        {children}
        <Footer />
      </Container>
    </>
  );
};
