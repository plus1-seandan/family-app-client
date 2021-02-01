import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useMutation } from "@apollo/client";
import { CREATE_ALBUM } from "../queries";
import { useHistory } from "react-router-dom";

function ViewPhotoModal({ photo }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Button class="btn btn--green" onClick={onOpen}>
        View
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent class="album__create__modal">
          <ModalBody>
            <img src={photo} />
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default ViewPhotoModal;
