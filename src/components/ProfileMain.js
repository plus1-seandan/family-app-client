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
import EditProfileForm from "./EditProfileForm";
import fam4 from "../img/family4.jpg";

const ProfileMain = ({ user }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div class="profile">
      <div class="profile__container">
        <header class="profile__header">
          <div class="bio">
            <img src={fam4} alt="background" class="bg" />
            {/* <div class="desc">
              <h3>@carlf</h3>
              <p>
                Carl Fredricksen is the protagonist in Up. He also appeared in
                Dug's Special Mission as a minor character.
              </p>
            </div> */}
          </div>

          <div class="avatarcontainer">
            <img src={user?.photo} alt="avatar" class="avatar__image" />
            <div class="hover">
              <div class="icon-twitter">
                {user?.firstName} {user?.lastName}
              </div>
            </div>
          </div>
        </header>
        <div class="profile__content">
          <div class="data">
            <ul class="profile__main__info__list">
              <li class="profile__main__info__item">
                Address <span>1 River Ct, Jersey City, New Jersey 07310</span>
              </li>
              <li class="profile__main__info__item">
                Email <span>{user?.email}</span>
              </li>
              <li class="profile__main__info__item">
                Phone <span>424-242-4242</span>
              </li>
              <li class="profile__main__info__item">
                Date of Birth <span>05/21/1996</span>
              </li>
            </ul>
          </div>
          {/* <div class="follow">
            <div class="icon-twitter"></div> Edit
          </div> */}
          <div class="follow">
            <Button class="follow__button" onClick={onOpen}>
              Edit Profile
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalBody class="edit__profile__form">
                  <EditProfileForm user={user} onClose={onClose} />
                </ModalBody>
                <ModalFooter></ModalFooter>
              </ModalContent>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMain;

// <div class="profile__main">
//   <img src={user?.photo} alt="portrait" class="profile__main__photo" />
//   <div class="profile__main__info">
//     <h1 class="profile__main__info__name">
//       {user?.firstName} {user?.lastName}
//     </h1>
//     <ul class="profile__main__info__list">
//       <li class="profile__main__info__item">
//         Address | <span>1 River Ct, Jersey City, New Jersey 07310</span>
//       </li>
//       <li class="profile__main__info__item">
//         Email |<span>{user?.email}</span>
//       </li>
//       <li class="profile__main__info__item">
//         Phone | <span>424-242-4242</span>
//       </li>
//       <li class="profile__main__info__item">
//         Date of Birth | <span>05/21/1996</span>
//       </li>
//     </ul>
//   </div>
// </div>
