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
import { CREATE_ALBUM, ALBUMS } from "../queries";
import { useHistory } from "react-router-dom";

const AlbumForm = () => {
  const [albumName, setAlbumName] = useState("");
  const [createAlbum] = useMutation(CREATE_ALBUM);
  const toast = useToast();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await createAlbum({
      variables: {
        albumName,
      },
      refetchQueries: [{ query: ALBUMS }],
    });
    if (response.data.createAlbum.errors) {
      toast({
        title: "Failed to Create Album.",
        description: "Please validate your information.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    } else {
      history.push(`/albums/${response.data.createAlbum.album.id}`);

      toast({
        title: "Successfully Created Album.",
        description: "Redirecting to record",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    }
  };
  return (
    <div class="events__page__create__form album__create__form">
      <form class="form" onSubmit={handleSubmit}>
        <div class=" u-margin-bottom-big">
          <h2 class="heading-secondary">Create New Album</h2>
        </div>
        <div class="form__group">
          <input
            type="text"
            id="albumName"
            class="form__input"
            placeholder="Album Name"
            onChange={(e) => setAlbumName(e.target.value)}
            required
          />
          <label for="albumName" class="form__label">
            Album Name
          </label>
        </div>
        <div class="form__group">
          <button type="submit" class="btn btn--green">
            Create Album
          </button>
        </div>
      </form>
    </div>
  );
};

function CreateAlbumModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Button class="btn btn--orange" onClick={onOpen}>
        Create New Album
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent class="album__create__modal">
          <ModalBody>
            <AlbumForm />
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default CreateAlbumModal;
