import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { CloseButton } from "../closeButton";

interface Props {
  trigger: (onOpen: () => void) => ReactNode;
  title?: string;
  content?: (onClose: () => void) => ReactNode;
  contentMaxWidth?: string[];
}

export const Popup: React.FC<Props> = ({
  trigger,
  title,
  content,
  contentMaxWidth,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {trigger(onOpen)}

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent bg="white" maxW={contentMaxWidth}>
          {title && <ModalHeader>{title}</ModalHeader>}
          <CloseButton
            onClick={onClose}
            iconSize={"13px"}
            position="absolute"
            top={0}
            right={1}
            iconColor="brandRed.300"
          />
          {content && <ModalBody>{content(onClose)}</ModalBody>}
        </ModalContent>
      </Modal>
    </>
  );
};
