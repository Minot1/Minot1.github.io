import React from "react";
import BasePage from "../../components/BasePage";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function NoobzCtf() {
  const navigate = useNavigate();

  return (
    <BasePage>
      <div>
        <Typography>n00bzCTF Writeups</Typography>
        <Button onClick={() => navigate("/posts/n00bz-ctf-2023/lost")}>Lost</Button>
      </div>
    </BasePage>
  );
}

export default NoobzCtf;
