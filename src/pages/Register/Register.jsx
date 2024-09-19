import { useState } from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast"; // Correctly importing Toaster

const Register = () => {
  // success message
  const [success, setSuccess] = useState("");
  // error message
  const [registerError, setRegisterError] = useState("");

  // register form handler
  const handleRegister = (e) => {
    e.preventDefault();
    setSuccess("");
    setRegisterError("");
    const email = e.target.email.value;
    const name = e.target.name.value;
    const password = e.target.password.value;
    if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
      setRegisterError(
        "Your password must have UpperCase,lowercase and length must be greater than 6"
      );
      toast.error(
        "Your password must have UpperCase,lowercase and length must be greater than 6",
        {
          duration: 2000,
        }
      );
      return;
    }
    //  registration

    toast.success("Registration successful!", {
      duration: 2000,
    });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content ">
        <div className="flex flex-col">
          <h1 className="text-5xl font-bold">Register Now</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          {/* actual form started from here */}
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                name="photo"
                type="text"
                placeholder="Photo Url"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <p className="label-text-alt link link-hover">
                  Already Have Account?
                  <Link className="btn btn-sm btn-link" to="/login">
                    Login
                  </Link>
                </p>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
      <div>
        {/* Render Toaster component for toast notifications */}
        <Toaster />
      </div>
    </div>
  );
};

export default Register;
