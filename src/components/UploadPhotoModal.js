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
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
} from "@chakra-ui/react";
import { useMutation } from "@apollo/client";
import {
  UPLOAD_FILE,
  POST_PHOTO,
  ALBUM,
  DELETE_ALBUM,
  ALBUMS,
} from "../queries";
import { useHistory, useParams } from "react-router-dom";

const UploadPhotoModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [file, setFile] = useState(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [postPhoto] = useMutation(POST_PHOTO);
  const [deleteAlbum] = useMutation(DELETE_ALBUM);
  const history = useHistory();
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

  const handleDeleteAlbum = async () => {
    await deleteAlbum({
      variables: { albumId: parseInt(albumId) },
      refetchQueries: [{ query: ALBUMS }],
    });
    history.push("/albums");
  };
  return (
    <div>
      <Button class="btn btn--green" onClick={onOpen}>
        Add Photo
      </Button>
      <Popover>
        <PopoverTrigger>
          <Button class="btn btn--orange">Delete Album</Button>
        </PopoverTrigger>
        <Portal>
          <PopoverContent>
            <PopoverArrow />
            <PopoverHeader>Delete Album?</PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
              <Button class="btn btn--orange" onClick={handleDeleteAlbum}>
                Delete
              </Button>
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>
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
