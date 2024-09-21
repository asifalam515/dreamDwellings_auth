import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const UpdateProfile = () => {
  const { updateProfileInfo, user } = useContext(AuthContext);

  const { displayName, email, photoURL, emailVerified } = user;

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const updatedName = e.target.name.value;
    const updatePhoto = e.target.photo.value;

    try {
      await updateProfileInfo(updatedName, updatePhoto);
      alert("Profile updated successfully");
    } catch (error) {
      console.error("Error updating profile: ", error);
      alert("Error updating profile");
    }
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Update Your Profile now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleUpdateProfile} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Update Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder={displayName}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Update Photo URL</span>
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder={photoURL}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Update Profile</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
