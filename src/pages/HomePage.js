import React from "react";
import BasePage from "../components/BasePage";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

function HomePage() {
  const navigate = useNavigate();

  return (
    <BasePage>
      <p>Welcome</p>
      <Button onClick={() => navigate("/posts/n00bz-ctf-2023")}>n00bzCTF2023 Writeups</Button>
    </BasePage>
  );
}

export default HomePage;
