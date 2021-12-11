import { Image } from "@chakra-ui/image";
import { Box, BoxProps, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import { Episode } from "../models";

interface Props extends BoxProps {
  episode: Episode;
}

export const EpisodeCard: React.FC<Props> = ({ episode, ...rest }) => {
  const { name, image } = episode;

  return (
    <Box p={4} {...(rest as any)}>
      <Stack flexDir="column" w={["100px", "200px"]}>
        <Text>{name}</Text>
        {image?.medium && <Image src={image.medium} />}
      </Stack>
    </Box>
  );
};

//export const EpisodeCard = observer(EpisodeCardBase);
