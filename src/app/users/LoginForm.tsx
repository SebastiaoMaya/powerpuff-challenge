import {
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Icon,
  Flex,
  Button,
} from "@chakra-ui/react";
import { AlphaBackground, TopBackgroundWrapper } from "app/shared";
import { observer } from "mobx-react";
import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { useRootStoreContext } from "rootStore";

const LoginFormBase: React.FC = () => {
  const { userStore } = useRootStoreContext();

  return (
    <Flex alignItems="center" justifyContent="center" h="100vh" bg="gray.900">
      <TopBackgroundWrapper>
        <AlphaBackground>
          <Stack spacing={4} w={["400px"]}>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<Icon as={AiOutlineUser} color="white" />}
              />
              <Input
                type="text"
                placeholder="username"
                _focus={{ borderColor: "gray.900" }}
              />
            </InputGroup>

            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<Icon as={RiLockPasswordLine} color="white" />}
              />
              <Input
                type="password"
                placeholder="password"
                _focus={{ borderColor: "gray.900" }}
              />
            </InputGroup>

            <Button
              onClick={() => {
                userStore.login();
              }}
              variant="primary">
              LOGIN
            </Button>
          </Stack>
        </AlphaBackground>
      </TopBackgroundWrapper>
    </Flex>
  );
};

export const LoginForm = observer(LoginFormBase);
