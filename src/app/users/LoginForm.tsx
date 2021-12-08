import {
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Icon,
  Flex,
  Button,
} from "@chakra-ui/react";
import { observer } from "mobx-react";
import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { useRootStoreContext } from "rootStore";

const LoginFormBase: React.FC = () => {
  const { userStore } = useRootStoreContext();

  return (
    <Flex alignItems="center" justifyContent="center" h="100vh">
      <Stack spacing={4} w={["400px"]}>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<Icon as={AiOutlineUser} color="gray.600" />}
          />
          <Input type="text" placeholder="username" />
        </InputGroup>

        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<Icon as={RiLockPasswordLine} color="gray.600" />}
          />
          <Input type="password" placeholder="password" />
        </InputGroup>

        <Button
          onClick={() => {
            userStore.login();
          }}>
          LOGIN
        </Button>
      </Stack>
    </Flex>
  );
};

export const LoginForm = observer(LoginFormBase);
