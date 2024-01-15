import React, { useEffect, useState } from "react";
import BasePage from "../components/BasePage";
import { useNavigate } from "react-router-dom";
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import PostCard from "../components/PostCard";

function HomePage() {
  const navigate = useNavigate();
  const [showTextBasedCerts, setShowTextBasedCerts] = useState(false);

  return (
    <BasePage>
      <Grid container direction="column" m={2}>
        <Grid container item m={1} direction="row" spacing={2}>
          <Grid item xs={7}>
            <Card sx={{ display: "flex", padding: 2, backgroundColor: "rgb(32, 0, 0)" }} elevation={5}>
              <CardMedia
                component="img"
                sx={{ objectFit: "contain", width: "33%" }}
                image="/m.png"
                alt="Live from space album cover"
              ></CardMedia>
              <CardContent>
                <Typography variant="h4" m={1} marginBottom={2}>
                  Taner Dincer
                </Typography>
                <ul>
                  <li>
                    <Typography>Computer Science BSc degree @ Sabanci University</Typography>
                  </li>
                  <li>
                    <Typography>Passionate about cyber security</Typography>
                  </li>
                  <li>
                    <Typography>Participates in CTFs regularly</Typography>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={5}>
            <Card sx={{ display: "flex", padding: 1, backgroundColor: "rgb(32, 0, 0)" }} elevation={5}>
              {showTextBasedCerts && (
                <CardContent>
                  <Typography variant="h6" textAlign="center" marginBottom={1}>
                    Certificates
                  </Typography>
                  <ul>
                    <li>
                      <Typography>Cisco Verified - Introduction to Cybersecurity</Typography>
                    </li>
                    <li>
                      <Typography>Cisco Verified - Networking Basics</Typography>
                    </li>
                    <li>
                      <Typography>Cisco Verified - Networking Devices and Initial Configuration</Typography>
                    </li>
                    <li>
                      <Typography>eLearnSecurity (INE) - Junior Penetration Tester Certificate</Typography>
                    </li>
                    <li>
                      <Typography>eLearnSecurity (INE) - Certified Professional Penetration Tester</Typography>
                    </li>
                  </ul>
                  <Box justifyContent="center" display="flex">
                    <Button
                      onClick={() => {
                        setShowTextBasedCerts(!showTextBasedCerts);
                      }}
                    >
                      Show Badges
                    </Button>
                  </Box>
                </CardContent>
              )}
              {!showTextBasedCerts && (
                <>
                  <CardContent>
                    <Typography variant="h6" textAlign="center" marginBottom={1}>
                      Certificates
                    </Typography>
                    <Grid container direction="row">
                      <Grid item m={1}>
                        <img src="/cisco_intro_to_cyber.png" width={100}></img>
                      </Grid>
                      <Grid item m={1}>
                        <img src="/cisco_networking_basics.png" width={100}></img>
                      </Grid>
                      <Grid item m={1}>
                        <img src="/cisco_networking_devices_and_config.png" width={100}></img>
                      </Grid>
                      <Grid item m={1}>
                        <img src="/eJPT.png" width={110}></img>
                      </Grid>
                      <Grid item m={1}>
                        <img src="/eCPPTv2.png" width={110}></img>
                      </Grid>
                    </Grid>
                    <Box justifyContent="center" display="flex">
                      <Button
                        onClick={() => {
                          setShowTextBasedCerts(!showTextBasedCerts);
                        }}
                      >
                        Show Names
                      </Button>
                    </Box>
                  </CardContent>
                </>
              )}
            </Card>
          </Grid>
        </Grid>
        <Grid item container justifyContent="center">
          <Grid item>
            <PostCard title="UofT CTF 2024 - Writeup" postMedia="/CTF/UofT_CTF/uoft_ctf_logo.png" postUrl="/uoft-ctf-2024"></PostCard>
          </Grid>
          <Grid item>
            <PostCard title="HTB Bizness - Writeup" postMedia="/HTB/Bizness/box_logo.png" postUrl="/htb-bizness"></PostCard>
          </Grid>
          <Grid item>
            <PostCard title="Iris CTF 2024 - Writeup" postMedia="/CTF/Iris_CTF/iris_ctf_logo.png" postUrl="/iris-ctf-2024"></PostCard>
          </Grid>
        </Grid>
      </Grid>
    </BasePage>
  );
}

export default HomePage;
