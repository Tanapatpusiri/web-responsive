import { Button, Container, Box, Typography, Grid } from "@mui/material";
import Image from "next/image";
import { Link } from "react-scroll";
import page1 from "../image/page1.png";
import MobilePage1 from "../image/page1-mobile.png";

export default function Page1() {
  return (
    <>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: { xs: "none", md: "block" },
          }}
        >
          <div id="PageOne">
            <Box
              sx={{
                marginTop: "82px",
              }}
            >
              <Grid container sx={{ display: "flex", alignItems: "center" }}>
                <Grid
                  item
                  xs={4}
                  sx={{
                    zIndex: 1,
                    pl: "4.1%",
                    pt: "2.5%",
                  }}
                >
                  <Grid
                    sx={{
                      backgroundColor: "#0E204E",
                      color: "#fff",
                      width: "min(40.8vw,787px)",
                      pl: "16%",
                      pr: "10%",
                      pt: "16%",
                      pb: "10%",
                    }}
                  >
                    {" "}
                    <Typography variant="h2" gutterBottom>
                      Pineapple Island: GenZ and Millenial Abode
                    </Typography>
                    <Typography variant="h6">
                      a community that gives you a taste of happiness, a place
                      you’ll love to live and an opportunity to build a home.
                    </Typography>
                  </Grid>
                </Grid>

                <Grid item xs={8}>
                  <Box>
                    <Image
                      src={page1}
                      priority
                      alt=""
                      style={{
                        position: "relative",
                        right: 72,
                        height: "auto",
                        maxWidth: "70vw",
                      }}
                    />
                  </Box>{" "}
                </Grid>
              </Grid>
            </Box>
          </div>
        </Box>

        {/* Moblie */}

        <Box
          sx={{
            display: { xs: "block", md: "none" },
            pb: 10,
          }}
        >
          <div id="PageOne">
            <Grid
              container
              sx={{
                display: "flex",
                justifyContent: "center",
                px: "4px",
              }}
            >
              <Grid
                item
                xs={12}
                sx={{
                  zIndex: 0,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Image
                  src={MobilePage1}
                  priority
                  alt=""
                  style={{ filter: "brightness(60%)", width: "100%" }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  color: "#ffff",
                  zIndex: 1,
                  position: "absolute",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "172px",
                }}
              >
                <Box
                  sx={{
                    zIndex: 1,
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    px: 3,
                  }}
                >
                  <Typography variant="h4" gutterBottom>
                    Pineapple Island: <br></br> GenZ and Millenial Abode
                  </Typography>

                  <Typography variant="h5" gutterBottom>
                    a community that gives you a taste of happiness, <br></br> a
                    place you’ll love to live and an opportunity to build a
                    home.
                  </Typography>
                  <Box
                    sx={{
                      marginTop: 7,
                      marginLeft: "9px",
                    }}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        color: "#0E204E",
                        bgcolor: "#ffff",
                        textTransform: "none",
                      }}
                      style={{ width: "127px", height: "40px" }}
                    >
                      <Link
                        to="PageSevenM"
                        spy={true}
                        smooth={true}
                        offset={30}
                        duration={500}
                      >
                        {" "}
                        Get in Touch
                      </Link>
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </div>
        </Box>
      </Container>
    </>
  );
}
