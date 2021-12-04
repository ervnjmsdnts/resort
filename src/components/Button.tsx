import { Button } from "@chakra-ui/button";

export const CustomButtom: React.FC<Record<string, any>> = ({
  children,
  ...props
}) => {
  return (
    <Button
      w="125px"
      h="30px"
      rounded="full"
      _hover={{ bgColor: "" }}
      _active={{ bgColor: "" }}
      bgColor="primary"
      boxShadow="main"
      {...props}
      color="white">
      {children}
    </Button>
  );
};
