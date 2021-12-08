import { Button, Icon, Stack, Text } from "@chakra-ui/react";
import { observer } from "mobx-react";
import React from "react";
import { BiLogOutCircle } from "react-icons/bi";
import { useRootStoreContext } from "rootStore";

export const UserLogout: React.FC = observer(() => {
  const { userStore } = useRootStoreContext();
  const user = userStore.user;

  return user ? (
    <Stack dir="column" spacing={1}>
      <Text variant="side-menu-user">{user.username}</Text>

      <Button
        rightIcon={<Icon as={BiLogOutCircle} color="white" boxSize="20px" />}
        onClick={() => userStore.logout()}
        variant="primary">
        <Text variant="side-menu-logout">Logout</Text>
      </Button>
    </Stack>
  ) : (
    <></>
  );
});
