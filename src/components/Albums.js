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
{
  /* <div class="gallery-container w-3 h-2">
  <div class="gallery-item">
    <div class="image">
      <img src="https://source.unsplash.com/1600x900/?nature" alt="nature" />
    </div>
    <div class="text">Nature</div>
  </div>
</div>; */
}

const Album = ({ url, idx }) => {
  const classValue = gridClass[idx % gridClass.length];
  return (
    <div class={classValue}>
      <div class="gallery-item">
        <div class="image">
          <img src={url} alt="nature" />
        </div>
        <div class="text">Nature</div>
      </div>
    </div>
  );
};

const Albums = () => {
  return (
    <div>
      <CreateAlbumModal />
      <div class="album__container">
        {imgUrls.map((url, idx) => (
          <Album url={url} idx={idx} />
        ))}
      </div>
    </div>
  );
};

export default Albums;
