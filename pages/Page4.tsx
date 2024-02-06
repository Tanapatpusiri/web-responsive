import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Typography from "@mui/material/Typography";
import page4 from "../image/page4.png";
import page4_2 from "../image/page4-2.png";
import Icon1Page4 from "../image/Icon1-page4.png";
import Icon2Page4 from "../image/Icon2-page4.png";
import Icon3Page4 from "../image/Icon3-page4.png";
import Icon4Page4 from "../image/Icon4-page4.png";
import Icon5Page4 from "../image/Icon5-page4.png";
import Icon6Page4 from "../image/Icon6-page4.png";

import Icon1Page4M from "../image/Icon1-page4M.png";
import Icon2Page4M from "../image/Icon2-page4M.png";
import Icon3Page4M from "../image/Icon3-page4M.png";
import Icon4Page4M from "../image/Icon4-page4M.png";
import Icon5Page4M from "../image/Icon5-page4M.png";
import Icon6Page4M from "../image/Icon6-page4M.png";

export default function Page4() {
  return (
    <>
      <Box
        className="Page4"
        id="Pagefour"
        sx={{
          pt: 5,
          mt: 0,
          display: { xs: "none", lg: "block" },
        }}
      >
        <Box
          sx={{
            pb: 2,
          }}
        >
          <Box>
            <Typography
              sx={{
                textAlign: "center",
                color: "#0E204E",
                fontWeight: "bold",
              }}
              className={styles.TextPage1}
              variant="h4"
              gutterBottom
            >
              What Pineapple Land Offers
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid
              container
              spacing={13}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid>
                <Grid
                  container
                  sx={{
                    alignItems: "center",
                  }}
                >
                  <Grid>
                    <Image src={page4} priority width={350} alt="" />
                  </Grid>
                  <Grid
                    sx={{
                      bgcolor: "#0E204E",
                      width: 150,
                      height: 230,
                    }}
                  ></Grid>
                </Grid>
              </Grid>
              <Grid>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Image src={Icon1Page4} priority width={60} alt="" />
                </Box>

                <Typography
                  sx={{
                    textAlign: "center",
                    color: "#0E204E",
                    pt: 5,
                  }}
                  className={styles.FontPage4}
                  variant="subtitle2"
                  gutterBottom
                >
                  Eco Friendly
                </Typography>
              </Grid>
              <Grid>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Image src={Icon2Page4} priority width={60} alt="" />
                </Box>
                <Typography
                  sx={{
                    textAlign: "center",
                    color: "#0E204E",
                    pt: 5,
                  }}
                  className={styles.FontPage4}
                  variant="subtitle2"
                  gutterBottom
                >
                  Smart Homes
                </Typography>
              </Grid>
              <Grid>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Image src={Icon3Page4} priority width={60} alt="" />
                </Box>
                <Typography
                  sx={{
                    textAlign: "center",
                    color: "#0E204E",
                    pt: 5,
                  }}
                  className={styles.FontPage4}
                  variant="subtitle2"
                  gutterBottom
                >
                  Good Rates
                </Typography>
              </Grid>
            </Grid>
          </Box>

          <Box>
            <Grid
              container
              spacing={13}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Image src={Icon4Page4} priority width={60} alt="" />
                </Box>
                <Typography
                  sx={{
                    textAlign: "center",
                    color: "#0E204E",
                    pt: 5,
                  }}
                  className={styles.FontPage4}
                  variant="subtitle2"
                  gutterBottom
                >
                  Serviced Apartment
                </Typography>
              </Grid>
              <Grid>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Image src={Icon5Page4} priority width={60} alt="" />
                </Box>
                <Typography
                  sx={{
                    textAlign: "center",
                    color: "#0E204E",
                    pt: 5,
                  }}
                  className={styles.FontPage4}
                  variant="subtitle2"
                  gutterBottom
                >
                  Private Security
                </Typography>
              </Grid>
              <Grid>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Image src={Icon6Page4} priority width={60} alt="" />
                </Box>
                <Typography
                  sx={{
                    textAlign: "center",
                    color: "#0E204E",
                    pt: 5,
                  }}
                  className={styles.FontPage4}
                  variant="subtitle2"
                  gutterBottom
                >
                  24/7 Electricity
                </Typography>
              </Grid>
              <Grid>
                <Grid
                  container
                  sx={{
                    alignItems: "center",
                  }}
                >
                  {" "}
                  <Grid
                    sx={{
                      bgcolor: "#0E204E",
                      width: 150,
                      height: 230,
                    }}
                  ></Grid>
                  <Grid>
                    <Image src={page4_2} priority width={350} alt="" />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>

      {/* Mobile */}
      <Box
        sx={{
          display: { xs: "block", lg: "none" },
          pt: 5,
        }}
        className="Page4M"
        id="PageFourM"
      >
        <Box>
          <Typography
            sx={{
              textAlign: "center",
              color: "#0E204E",
              fontWeight: "bold",
              pb: 2,
            }}
            className={styles.TextPage1}
            variant="h6"
            gutterBottom
          >
            Pineapple Land Offers
          </Typography>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                position: "relative",
              }}
            >
              <Image src={page4} priority width={400} alt="" />
            </Box>
            <Box
              sx={{
                bgcolor: "#0E204E",
                zIndex: 1,
                position: "relative",
                top: -60,
                width: 350,
                height: 250,
                display: "flex",
                alignItems: "center",
                pl: 2,
                pr: 2,
                pb: 1,
              }}
            >
              <Grid container spacing={3}>
                <Grid xs={4}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      p: 2,
                    }}
                  >
                    <Image src={Icon1Page4M} priority width={30} alt="" />
                  </Box>
                  <Typography
                    sx={{
                      textAlign: "center",
                      color: "#0E204E",
                    }}
                    className={styles.FontPage4M}
                    variant="subtitle2"
                    gutterBottom
                  >
                    Eco Friendly
                  </Typography>
                </Grid>
                <Grid xs={4}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      p: 2,
                    }}
                  >
                    <Image src={Icon2Page4M} priority width={30} alt="" />
                  </Box>
                  <Typography
                    sx={{
                      textAlign: "center",
                      color: "#0E204E",
                    }}
                    className={styles.FontPage4M}
                    variant="subtitle2"
                    gutterBottom
                  >
                    Smart Homes
                  </Typography>
                </Grid>
                <Grid xs={4}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      p: 2,
                    }}
                  >
                    <Image src={Icon3Page4M} priority width={30} alt="" />
                  </Box>
                  <Typography
                    sx={{
                      textAlign: "center",
                      color: "#0E204E",
                    }}
                    className={styles.FontPage4M}
                    variant="subtitle2"
                    gutterBottom
                  >
                    Good Rates
                  </Typography>
                </Grid>
                <Grid xs={4}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      p: 2,
                    }}
                  >
                    <Image src={Icon4Page4M} priority width={30} alt="" />
                  </Box>
                  <Typography
                    sx={{
                      textAlign: "center",
                      color: "#0E204E",
                    }}
                    className={styles.FontPage4M}
                    variant="subtitle2"
                    gutterBottom
                  >
                    Serviced Apartment
                  </Typography>
                </Grid>
                <Grid xs={4}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      p: 2,
                    }}
                  >
                    <Image src={Icon5Page4M} priority width={30} alt="" />
                  </Box>
                  <Typography
                    sx={{
                      textAlign: "center",
                      color: "#0E204E",
                    }}
                    className={styles.FontPage4M}
                    variant="subtitle2"
                    gutterBottom
                  >
                    Private Security
                  </Typography>
                </Grid>
                <Grid xs={4}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      p: 2,
                    }}
                  >
                    <Image src={Icon6Page4M} priority width={30} alt="" />
                  </Box>
                  <Typography
                    sx={{
                      textAlign: "center",
                      color: "#0E204E",
                    }}
                    className={styles.FontPage4M}
                    variant="subtitle2"
                    gutterBottom
                  >
                    24/7 Electricity
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
