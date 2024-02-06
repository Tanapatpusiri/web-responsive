
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Typography from "@mui/material/Typography";
import { Link } from "react-scroll";
import page1 from "../image/page1.png";
import MobilePage1 from "../image/page1-mobile.png";

export default function Page1() {
  return (
    <>
      <Box
        sx={{
          display: { xs: "none", lg: "block" },
        }}
      >
        <div className="Page1" id="PageOne">
          <Box>
            <Grid
              container
              spacing={1}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Grid sx={{ width: 80 }}>
                <div></div>
              </Grid>

              <Grid
                sx={{
                  color: "#ffff",
                  bgcolor: "#0E204E",
                  zIndex: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  right: { md: -120, lg: -120 },
                  height: 300,
                  p: 9,
                  pt: 7,
                }}
              >
                <Box>
                  <Box
                    sx={{
                      width: 350,
                      mt: 0,
                      textAlign: "start",
                      ml: 1.5,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 36,
                      }}
                      className={styles.TextPage1}
                      variant="h4"
                      gutterBottom
                    >
                      Pineapple Island: GenZ and Millenial Abode
                    </Typography>

                    <Typography className={styles.TextPage1} gutterBottom>
                      a community that gives you a taste of happiness , a place
                      you’ll love to live and an opportunity to build a home.
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid xs className={styles.DivImage} sx={{ width: 1000 }}>
                <Box>
                  <Image
                    src={page1}
                    priority
                    alt=""
                    className={styles.ImagePage1}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </div>
      </Box>

      {/* Moblie */}

      <Box
        sx={{
          display: { xs: "block", lg: "none" },
        }}
      >
        <div className="Page1M" id="PageOne">
          <Box>
            <Grid
              container
              spacing={1}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Grid sx={{ width: 10 }}>
                <div></div>
              </Grid>
              <Grid
                sx={{
                  color: "#ffff",
                  bgcolor: "none",
                  zIndex: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  right: 0,
                  height: 400,
                }}
              >
                <Box>
                  <Box
                    sx={{
                      width: 395,
                      mt: -10,
                      textAlign: "center",
                      ml: 1.5,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 32,
                        fontWeight: "bold",
                        pb: 2.5,
                      }}
                      className={styles.TextPage1}
                      variant="h4"
                      gutterBottom
                    >
                      Pineapple Island: GenZ and Millenial Abode
                    </Typography>

                    <Typography className={styles.TextPage1} gutterBottom>
                      a community that gives you a taste of happiness , a place
                      you’ll love to live and an opportunity to build a home.
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Button
                      variant="contained"
                      sx={{
                        color: "#0E204E",
                        bgcolor: "#ffff",
                        mt: 5,
                        display: "block",
                      }}
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

              <Grid xs className={styles.DivImage} sx={{ width: { xs: 100 } }}>
                <Box
                  sx={{
                    ml: -10,
                    // display: { lg: "none", xs: "block", md: "block" },
                  }}
                >
                  <Image
                    className={styles.ImageMobile}
                    src={MobilePage1}
                    width={450}
                    priority
                    alt=""
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </div>
      </Box>
    </>
  );
}
