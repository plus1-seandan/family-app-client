const ProfileMain = ({ user }) => {
  return (
    <div class="profile__main">
      <img src={user?.photo} alt="portrait" class="profile__main__photo" />
      <div class="profile__main__info">
        <h1 class="profile__main__info__name">
          {user?.firstName} {user?.lastName}
        </h1>
        <ul class="profile__main__info__list">
          <li class="profile__main__info__item">
            Address | <span>1 River Ct, Jersey City, New Jersey 07310</span>
          </li>
          <li class="profile__main__info__item">
            Email |<span>{user?.email}</span>
          </li>
          <li class="profile__main__info__item">
            Phone | <span>424-242-4242</span>
          </li>
          <li class="profile__main__info__item">
            Date of Birth | <span>05/21/1996</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileMain;
