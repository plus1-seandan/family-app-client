import { useState } from "react";
import BackupIcon from "@material-ui/icons/Backup";
import CreateAlbumModal from "./CreateAlbumModal";
import UploadPhotoModal from "./UploadPhotoModal";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { ALBUM } from "../queries";

const Album = () => {
  const [file, setFile] = useState(null);
  const { albumId } = useParams();
  const { loading, error, data } = useQuery(ALBUM);

  const renderImageContent = (photo) => {
    return (
      <div class="gallery-grid__card">
        <img src={photo.url} />
      </div>
    );
  };
  console.log({ data });
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
