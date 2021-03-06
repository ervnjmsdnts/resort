import { Image } from "@chakra-ui/image";
import { Box, Flex } from "@chakra-ui/layout";
import { ScaleFade } from "@chakra-ui/transition";
import { useState, useEffect } from "react";

export const SlideShow: React.FC<{ slides: string[] }> = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  useEffect(() => {
    const nextSlide = () =>
      setCurrent(current === length - 1 ? 0 : current + 1);
    const handleAutoPlay = setInterval(nextSlide, 3000);
    return () => clearInterval(handleAutoPlay);
  }, [current, length]);

  if (!Array.isArray(slides) || slides.length <= 0) return null;

  return (
    <Flex position="relative" justifyContent="center" alignItems="center">
      {slides.map((slide, index) => {
        return (
          <Box key={index} mt={{ base: 10, md: 0 }}>
            {index === current && (
              <ScaleFade in={index === current}>
                <Image
                  w={600}
                  rounded={10}
                  h={{ base: 200, md: 300 }}
                  src={"images/" + slide}
                />
              </ScaleFade>
            )}
          </Box>
        );
      })}
    </Flex>
  );
};
