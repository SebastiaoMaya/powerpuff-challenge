import { BoxProps, Icon, Box } from "@chakra-ui/react";
import React from "react";

interface Props extends BoxProps {
  iconSize?: string;
  iconColor?: string;
}

export const CloseButton: React.FC<Props> = ({
  onClick,
  iconSize,
  iconColor,
  ...rest
}) => (
  <Box _hover={{ cursor: "pointer" }} onClick={onClick} {...rest}>
    <Icon name="close" color={iconColor ?? "white"} size={iconSize} />
  </Box>
);
