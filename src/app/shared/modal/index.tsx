import { Box, Icon } from "@chakra-ui/react";
import React from "react";
import { default as ReactPopup } from "reactjs-popup";

interface Props {
  children: JSX.Element;
  heading?: string;
  trigger?: JSX.Element;
  open?: boolean;
  disabled?: boolean;
  onClose?: () => void;
  maxWidth?: string;
}

/**
 * Notes:
 * - Disable=true closes the popup if open and disables its trigger.
 */
export const Modal: React.FC<Props> = ({
  trigger,
  children,
  heading,
  open,
  disabled,
  maxWidth,
  onClose,
}) => {
  return (
    <ReactPopup
      trigger={trigger}
      modal
      closeOnDocumentClick={false}
      closeOnEscape={true}
      contentStyle={{
        width: "100%",
        padding: 0,
        border: 0,
      }}
      overlayStyle={{
        backgroundColor: "black",
        padding: 0,
        margin: 0,
      }}
      open={open}
      disabled={disabled}
      onClose={() => onClose?.()}>
      {(close: any) => (
        <Box height="100vh" bg="black">
          <Box
            color="white"
            _hover={{ cursor: "pointer", color: "brandRed.300" }}>
            <Icon
              name="close"
              size={"26px"}
              position="absolute"
              top={2}
              left={["90%", "90%", "97%"]}
              onClick={close}
              zIndex={2}
            />
          </Box>
          {children}
        </Box>
      )}
    </ReactPopup>
  );
};

Modal.defaultProps = {
  maxWidth: "500px",
};
