import { Text } from "@chakra-ui/layout";

export const Span: React.FC<Record<string, any>> = ({ children, ...props }) => {
  return (
    <Text as="span" color="primary" {...props}>
      {children}{" "}
    </Text>
  );
};
