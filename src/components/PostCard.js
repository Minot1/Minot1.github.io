import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { COLORS } from "../pages/colors";

function PostCard({ title, postMedia, postUrl }) {
  var navigate = useNavigate();

  return (
    <>
      <Card
        sx={{
          m: 2,
          width: 230,
          height: 220,
          display: "flex",
          backgroundColor: COLORS.cardBgColor,
        }}
      >
        <CardActionArea
          sx={{ flexDirection: "column", flexGrow: 1, alignItems: "stretch" }}
          onClick={() => navigate(postUrl)}
        >
          <CardMedia sx={{ height: 140 }} image={postMedia} />
          <CardContent>
            <Typography textAlign="center">{title}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}

export default PostCard;
