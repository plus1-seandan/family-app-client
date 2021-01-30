import { useQuery } from "@apollo/client";
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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ALBUMS } from "../queries";
import CreateAlbumModal from "./CreateAlbumModal";
import EventForm from "./EventForm";
const imgUrls = [
  "https://source.unsplash.com/PC_lbSSxCZE/800x600",
  "https://source.unsplash.com/lVmR1YaBGG4/800x600",
  "https://source.unsplash.com/5KvPQc1Uklk/800x600",
  "https://source.unsplash.com/GtYFwFrFbMA/800x600",
  "https://source.unsplash.com/Igct8iZucFI/800x600",
  "https://source.unsplash.com/M01DfkOqz7I/800x600",
  "https://source.unsplash.com/MoI_cHNcSK8/800x600",
  "https://source.unsplash.com/M0WbGFRTXqU/800x600",
  "https://source.unsplash.com/s48nn4NtlZ4/800x600",
];

const gridClass = [
  "gallery-container w-3 h-2",
  "gallery-container w-3 h-3",
  "gallery-container h-2",
  "gallery-container w-2",
  "gallery-container w-4 h-1",
  "gallery-container",
  "gallery-container h-2",
];

const Album = ({ album, idx }) => {
  const classValue = gridClass[idx % gridClass.length];
  return (
    <div class={classValue}>
      <Link to={`/albums/${album.id}`}>
        <div class="gallery-item">
          <div class="image">
            <img src={album.albumCover} alt="nature" />
          </div>
          <div class="text">{album.albumName}</div>
        </div>
      </Link>
    </div>
  );
};

const Albums = () => {
  const { loading, error, data } = useQuery(ALBUMS);
  if (loading || error) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <CreateAlbumModal />
      <div class="album__container">
        {data.getAlbums.map((album, idx) => (
          <Album album={album} idx={idx} />
        ))}
      </div>
    </div>
  );
};

export default Albums;
