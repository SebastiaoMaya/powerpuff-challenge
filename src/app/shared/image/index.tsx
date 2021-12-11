import { ImageProps } from "@chakra-ui/image";
import { Box } from "@chakra-ui/layout";
import { Image as ChakraImage } from "@chakra-ui/image";
import React from "react";
import { NotFoundImage } from "./NotFoundImage";

export const Image: React.FC<ImageProps> = ({
  src,
  width,
  height,
  ...rest
}) => (
  <Box>
    {src ? (
      <ChakraImage src={src} width={width} height={height} {...(rest as any)} />
    ) : (
      <NotFoundImage width={width} height={height} />
    )}
  </Box>
);
