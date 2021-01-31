import { useState } from "react";
import BackupIcon from "@material-ui/icons/Backup";
import CreateAlbumModal from "./CreateAlbumModal";
import UploadPhotoModal from "./UploadPhotoModal";
import { useParams } from "react-router-dom";

const Album = () => {
  const [file, setFile] = useState(null);
  const { albumId } = useParams();

  const fileHandler = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
  };

  return (
    <div class="album__record">
      <div class="album__record__main"></div>
      <UploadPhotoModal />
    </div>
  );
};

export default Album;
