import { useState } from "react";
import BackupIcon from "@material-ui/icons/Backup";
import CreateAlbumModal from "./CreateAlbumModal";
import UploadPhotoModal from "./UploadPhotoModal";
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { ALBUM, DELETE_PHOTO } from "../queries";
import ViewPhotoModal from "./ViewPhotoModal";
import {
  Button,
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

const Album = () => {
  const [file, setFile] = useState(null);
  const { albumId } = useParams();
  console.log({ albumId });
  const { loading, error, data } = useQuery(ALBUM, {
    variables: { albumId: parseInt(albumId) },
  });
  const [deletePhoto] = useMutation(DELETE_PHOTO);

  const renderImageContent = (photo) => {
    const handleDelete = async () => {
      await deletePhoto({
        variables: {
          photoId: photo.id,
        },
        refetchQueries: [
          { query: ALBUM, variables: { albumId: parseInt(albumId) } },
        ],
      });
    };

    return (
      <div class="gallery-grid__card">
        <ViewPhotoModal photo={photo.url} />
        <Popover>
          <PopoverTrigger>
            <Button class="btn btn--orange">Delete</Button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverArrow />
              <PopoverHeader>Delete Photo?</PopoverHeader>
              <PopoverCloseButton />
              <PopoverBody>
                <Button colorScheme="green" onClick={handleDelete}>
                  Delete
                </Button>
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </Popover>
        <img src={photo.url} />
      </div>
    );
  };
  return (
    <div class="album__record">
      <div class="album__record__main"></div>
      <UploadPhotoModal />
      <div className="gallery-grid">
        {data?.getAlbum?.photos?.map((photo) => renderImageContent(photo))}
      </div>
    </div>
  );
};

export default Album;
