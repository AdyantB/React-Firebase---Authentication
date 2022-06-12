import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div classnameName="p-4 box mt-3 text-center">
        Hello Welcome <br />
        {user && user.email} 
        {user && user.UID}
      </div>
      <div classnameName="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
      <div>
      <form>
  <div classname="mb-3">
    <label for="exampleInputEmail1" classname="form-label">Email address</label>
    <input type="email" classname="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" classname="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div classname="mb-3">
    <label for="exampleInputPassword1" classname="form-label">Password</label>
    <input type="password" classname="form-control" id="exampleInputPassword1"/>
  </div>
  <div classname="mb-3 form-check">
    <input type="checkbox" classname="form-check-input" id="exampleCheck1"/>
    <label classname="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" classname="btn btn-primary">Submit</button>
</form>
    </div>
    </>
  );
};

export default Home;
