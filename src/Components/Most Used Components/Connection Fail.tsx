// This component is used to show a modal when the user is offline

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalOverlay,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";


// TypeScript interface for the props
interface Props {
  Title: string;
  Message: string;
}

export function Connection_Fail({ Title, Message }: Props) {
  const { onClose } = useDisclosure();

  return (
    <>
      <Modal onClose={onClose} isOpen={true} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{Title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>{Message}</p>
            <br />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
} // This component is used to show a modal when the user is online

Connection_Fail.defaultProps = {
  Title: "Connection Error! Please check your internet connection.",
  Message:
    "You are currently offline. Please check your internet connection and try again.",
  ButtonText: "Close",
};
