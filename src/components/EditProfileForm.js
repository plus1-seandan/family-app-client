import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { ME, UPDATE_USER } from "../queries";

const initState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  dateOfBirth: "",
  username: "",
};

const EditProfileForm = ({ user }) => {
  const { loading, error, data } = useQuery(ME);
  const [updateUser] = useMutation(UPDATE_USER);
  const [state, setState] = useState(user);
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await updateUser({
        variables: {
          firstName: state.firstName,
          lastName: state.lastName,
          username: state.username,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <div class="edit__profile__form__detail">
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <h2 class="heading-secondary">Edit Profile</h2>
            </div>
            <div class="form_group">
              <input
                value={state.username}
                type="text"
                id="username"
                class="form__input"
                placeholder="Username"
                onChange={(e) =>
                  setState({ ...state, username: e.target.value })
                }
                required
              />
              <label for="username" class="form__label">
                Username
              </label>
            </div>
            <div class="form_group">
              <input
                value={state.firstName}
                type="firstName"
                id="firstName"
                class="form__input"
                placeholder="First Name"
                onChange={(e) =>
                  setState({ ...state, firstName: e.target.value })
                }
                required
              />
              <label for="fistName" class="form__label">
                First Name
              </label>
            </div>
            <div class="form_group">
              <input
                value={state.lastName}
                type="lastName"
                id="lastName"
                class="form__input"
                placeholder="Last Name"
                onChange={(e) =>
                  setState({ ...state, lastName: e.target.value })
                }
                required
              />
              <label for="lastName" class="form__label">
                Last Name
              </label>
            </div>
            <div class="form__group">
              <button type="submit" class="btn btn--green">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditProfileForm;
