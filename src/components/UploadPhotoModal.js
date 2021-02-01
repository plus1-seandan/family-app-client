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
import { useMutation } from "@apollo/client";
import { UPLOAD_FILE, POST_PHOTO, ALBUM } from "../queries";
import { useParams } from "react-router-dom";

const UploadPhotoModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [file, setFile] = useState(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [postPhoto] = useMutation(POST_PHOTO);

  const { albumId } = useParams();

  const fileHandler = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
  };
  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      return;
    }
    const response = await uploadFile({ variables: { file } });
    if (response.data.uploadFile.url) {
      const res = await postPhoto({
        variables: {
          albumId: parseInt(albumId),
          url: response.data.uploadFile.url,
        },
        refetchQueries: [
          {
            query: ALBUM,
            variables: {
              albumId: parseInt(albumId),
            },
          },
        ],
      });
      onClose();
    }
  };
  return (
    <div>
      <Button class="btn btn--orange" onClick={onOpen}>
        Add Photo
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
                  <Button class="btn btn--green" onClick={handleUpload}>
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
