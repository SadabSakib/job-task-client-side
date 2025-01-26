import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { data } from "react-router-dom";
import { setDriver } from "localforage";

const SignUp = () => {
  const { creatUser, setUser } = useContext(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    console.log("form sign up");
    creatUser(email, password)
      .then((result) => {
        console.log("user created at firebase:", result.user);
        setUser(result.user);
        const creationTime = result.user?.metadata?.creationTime;
        console.log(creationTime);
        const newUser = { name, email, password, creationTime };
        fetch(
          "https://assignment-11-server-side-omega-beige.vercel.app/users",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(newUser),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              console.log("User created in database", data);
              e.target.reset();
            }
          });
      })
      .catch((err) => console.log("error message: ", err));
  };
  return (
    <div>
      <div class="min-h-screen flex items-center justify-center">
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Sign Up</h2>
            <form onSubmit={handleSignUp}>
              <div class="form-control mb-4">
                <label class="label" for="name">
                  <span class="label-text">Name</span>
                </label>
                <input
                  type="text"
                  id="name"
                  class="input input-bordered w-full"
                  name="name"
                  required
                />
              </div>
              <div class="form-control mb-4">
                <label class="label" for="email">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="email"
                  id="email"
                  class="input input-bordered w-full"
                  name="email"
                  required
                />
              </div>
              <div class="form-control mb-4">
                <label class="label" for="email">
                  <span class="label-text">Photo URL</span>
                </label>
                <input
                  // type="photo"
                  id="photo"
                  class="input input-bordered w-full"
                  name="photo"
                  required
                />
              </div>
              <div class="form-control mb-4">
                <label class="label" for="password">
                  <span class="label-text">Password</span>
                </label>
                <input
                  type="password"
                  id="password"
                  class="input input-bordered w-full"
                  name="password"
                  required
                />
              </div>
              <div class="form-control">
                <button type="submit" class="btn btn-primary w-full">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
