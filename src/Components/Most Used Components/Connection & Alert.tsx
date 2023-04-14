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

type AlertProps = {
  Title: string;
  Message: string;
  ButtonText?: string;
};

export function Alert({ Title, Message, ButtonText }: AlertProps) {
  return (
    <>
      <input
        type="checkbox"
        id="my-modal-6"
        defaultChecked
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{Title}</h3>
          <p className="py-4">{Message}</p>
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn">
              {ButtonText}
            </label>
          </div>
        </div>
      </div>
    </>
  );
} // This component is used to show a modal when alerting the user

Alert.defaultProps = {
  Title: "Alert",
  Message: "This is an alert",
  ButtonText: "Close",
};

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
