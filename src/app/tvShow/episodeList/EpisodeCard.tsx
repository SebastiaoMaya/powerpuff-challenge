import { Image } from "@chakra-ui/image";
import { Box, BoxProps, Stack, Text, Flex } from "@chakra-ui/layout";
import React from "react";
import { Episode } from "../models";
import { TempNotFound } from "./TempNotFound";

interface Props extends BoxProps {
  episode: Episode;
}

export const EpisodeCard: React.FC<Props> = ({ episode, ...rest }) => {
  const { name, image } = episode;

  return (
    <Box p={[2, 4]}>
      <Stack
        flexDir="column"
        w="250px"
        h="210px"
        p={4}
        borderRadius={4}
        bg="gray.800"
        justifyContent="space-between"
        _hover={{ bg: "gray.700", cursor: "pointer" }}>
        <Text h="20%">{name}</Text>
        <Box>
          {image?.medium ? <Image src={image.medium} /> : <TempNotFound />}
        </Box>
      </Stack>
    </Box>
  );
};

//export const EpisodeCard = observer(EpisodeCardBase);
