import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import page2 from "../image/page2.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import { Container } from "@mui/material";
export default function Page2() {
  return (
    <>
      <Container maxWidth="xl">
        <Box
          sx={{ display: { md: "block", xs: "none" }, paddingBottom: "180px" }}
        >
          <Box
            id="PageTwo"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid container>
              <Grid
                item
                xs
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    width: "250px",
                  }}
                >
                  <Typography variant="h3" gutterBottom>
                    About Pineapple Island
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Carousel style={{ width: "min(40.8vw,728px)" }}>
                    <Carousel.Item>
                      <Image src={page2} priority alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                      <Image src={page2} priority alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                      <Image src={page2} priority alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                      <Image src={page2} priority alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                      <Image src={page2} priority alt="" />
                    </Carousel.Item>
                  </Carousel>
                </Box>
              </Grid>
              <Grid item xs>
                <Box
                  sx={{
                    bgcolor: "#0E204E",
                    color: "#ffff",
                    height: "620px",
                    maxHeight: "620px",
                    width: "22.25vw",
                    zIndex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box sx={{ display: "flex", px: "12%", paddingTop: "10%" }}>
                    <Typography variant="subtitle2" gutterBottom>
                      Pineapple Island is the most sought-after community in
                      Ibadan that values and puts the needs of their clients
                      first. It is a territory with loft complexes that creates
                      a country life and homely feeling that is integrated with
                      industrial development. A perfect, professional built
                      abode that gives you the true taste of beauty and
                      happiness.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>

        {/* Moblie */}

        <Box sx={{ display: { md: "none", xs: "block" } }}>
          <div id="PageTwoM">
            <Box
              sx={{
                paddingBottom: "50px",
              }}
            >
              <Box>
                <Grid
                  container
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Grid
                    xs
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      sx={{
                        zIndex: 1,
                        textAlign: "center",
                      }}
                    >
                      <Box>
                        <Typography variant="subtitle1" gutterBottom>
                          About{" "}
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                          Pineapple Island{" "}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>

                  <Grid
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Image
                        src={page2}
                        priority
                        alt=""
                        style={{
                          width: "max(80.8vw,335px)",
                          filter: "brightness(50%)",
                          maxHeight: "392px",
                          opacity: "90%",
                        }}
                      />
                      <Typography
                        sx={{
                          px: "15%",
                          zIndex: 1,
                          color: "#ffff",
                          position: "absolute",
                          mt: 15,
                          textAlign: "center",
                        }}
                        variant="subtitle2"
                        gutterBottom
                      >
                        Pineapple Island is the most sought-after community in
                        Ibadan that values and puts the needs of their clients
                        first. It is a territory with loft complexes that
                        creates a country life and homely feeling that is
                        integrated with industrial development. A perfect,
                        professional built abode that gives you the true taste
                        of beauty and happiness.
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </div>
        </Box>
      </Container>
    </>
  );
}
