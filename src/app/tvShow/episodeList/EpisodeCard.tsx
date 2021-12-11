import { Box, Stack, Text } from "@chakra-ui/layout";
import { Image } from "app/shared";
import React from "react";
import { useHistory } from "react-router";
import { Episode } from "../models";

export const EpisodeCard: React.FC<Episode> = ({ id, name, image }) => {
  const history = useHistory();
  const handleOnClick = () => history.push(`/episode/${id}`);

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
        _hover={{ bg: "gray.700", cursor: "pointer" }}
        onClick={handleOnClick}>
        <Text h="20%">{name}</Text>
        <Image src={image?.medium} />
      </Stack>
    </Box>
  );
};

//export const EpisodeCard = observer(EpisodeCardBase);
