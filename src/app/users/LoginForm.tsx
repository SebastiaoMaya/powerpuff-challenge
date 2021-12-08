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
    <Flex alignItems="center" justifyContent="center" h="100vh" bg="black">
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
                _focus={{ borderColor: "black" }}
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
                _focus={{ borderColor: "black" }}
              />
            </InputGroup>

            <Button
              onClick={() => {
                userStore.login();
              }}
              background={"black"}
              _hover={{ backgroundColor: "blackAlpha.700" }}
              _focus={{ backgroundColor: "blackAlpha.700" }}>
              LOGIN
            </Button>
          </Stack>
        </AlphaBackground>
      </TopBackgroundWrapper>
    </Flex>
  );
};

export const LoginForm = observer(LoginFormBase);
