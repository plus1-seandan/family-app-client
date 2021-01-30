import { useState } from "react";
import BackupIcon from "@material-ui/icons/Backup";
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
  Center,
} from "@chakra-ui/react";

const UploadPhotoModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [file, setFile] = useState(null);

  const fileHandler = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
  };

  return (
    <div>
      <Button class="btn btn--orange" onClick={onOpen}>
        Open Modal
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent class="album__upload">
          <ModalBody class="album__upload__modal">
            <div class="upload__photo__preview">
              <img
                class="upload__photo__preview__image"
                src={file ? URL.createObjectURL(file) : null}
                alt={file ? file.name : null}
              />
            </div>
            <div class="wrapper album__record__upload__modal__input">
              <div class="file-upload">
                <input type="file" onChange={fileHandler} />
                <BackupIcon class="file-upload__icon" />
              </div>
              <div class="album__record__upload__modal__button">
                <Center>
                  <Button class="btn btn--green" onClick={onOpen}>
                    Upload Photo
                  </Button>
                </Center>
              </div>
            </div>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default UploadPhotoModal;
