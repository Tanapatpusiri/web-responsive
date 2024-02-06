import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Typography from "@mui/material/Typography";
import page1 from "../image/Image6-page5.png";
import page2 from "../image/page2.png";
import page3 from "../image/Image1-page5.png";
import page4 from "../image/Image2-page5.png";
import page5 from "../image/Image3-page5.png";

import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
export default function Page2() {
  return (
    <>
      <Box sx={{ display: { lg: "block", xs: "none" } }}>
        <Box
          className="Page2"
          id="PageTwo"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{}}>
            <Box>
              <Grid
                container
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
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
                  <Box className={styles.DivTextPage2}>
                    <Box sx={{ display: "block" }}>
                      <Typography
                        sx={{ textAlign: "center" }}
                        className={styles.NavTextName}
                        variant="h4"
                        gutterBottom
                      >
                        About Pineapple Island
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid>
                  <Box sx={{ display: "block" }}>
                    <Carousel slide={false}>
                      <Carousel.Item>
                        <Image src={page1} priority width={600} alt="" />
                      </Carousel.Item>
                      <Carousel.Item>
                        <Image src={page2} priority width={600} alt="" />
                      </Carousel.Item>
                      <Carousel.Item>
                        <Image src={page3} priority width={600} alt="" />
                      </Carousel.Item>
                      <Carousel.Item>
                        <Image src={page4} priority width={600} alt="" />
                      </Carousel.Item>
                      <Carousel.Item>
                        <Image src={page5} priority width={600} alt="" />
                      </Carousel.Item>
                    </Carousel>
                  </Box>
                </Grid>
                <Grid
                  xs
                  sx={{
                    bgcolor: "#0E204E",
                    color: "#ffff",
                    height: 510,
                    width: 500,
                    zIndex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: 15,
                  }}
                >
                  <Box>
                    <Box className={styles.TextRectanglePage2}>
                      <Box sx={{ display: "block" }}>
                        <Typography
                          sx={{
                            p: 8,

                            color: "#ffff",
                            display: "block",
                          }}
                          className={styles.TextRectanglePage2}
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
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Moblie */}

      <Box sx={{ display: { lg: "none", xs: "block" } }}>
        <div className="Page2M" id="PageTwoM">
          <Box
            sx={{
              mt: -10,
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
                    className={styles.DivTextPage2}
                    sx={{
                      zIndex: 1,
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          textAlign: "center",
                        }}
                        className={styles.TextPage2}
                        variant="h5"
                        gutterBottom
                      >
                        About{" "}
                      </Typography>
                      <Typography
                        sx={{
                          textAlign: "center",
                          mb: 3,
                        }}
                        className={styles.TextPage2}
                        variant="h5"
                        gutterBottom
                      >
                        Pineapple Island{" "}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid>
                  <Box>
                    <Image
                      className={styles.ImageMobile}
                      src={page2}
                      priority
                      width={450}
                      alt=""
                    />
                    <Typography
                      sx={{
                        p: 12,
                        zIndex: 1,
                        color: "#ffff",
                        position: "absolute",
                        mt: -50,
                        textAlign: "center",
                      }}
                      className={styles.TextRectanglePage2}
                      variant="subtitle2"
                      gutterBottom
                    >
                      Pineapple Island is the most sought-after community in
                      Ibadan that values and puts the needs of their clients
                      first. It is a territory with loft complexes that creates
                      a country life and homely feeling that is integrated with
                      industrial development. A perfect, professional built
                      abode that gives you the true taste of beauty and
                      happiness.
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </div>
      </Box>
    </>
  );
}
