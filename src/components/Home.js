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
    <div id="emailHelp" classname="form-text">We'll never share your email with anyone else.</div>
  </div>
</form>
    </div>
    </>
  );
};

export default Home;
