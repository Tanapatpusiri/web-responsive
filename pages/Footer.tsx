import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import copy from "../image/copyright.png";

export default function Footer() {
  return (
    <>
      <Box
        className="Footer"
        sx={{
          display: { xs: "none", lg: "block" },
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Grid
              container
              spacing={2}
              sx={{
                pt: 10,
              }}
            >
              <Grid xs={6}>
                <Box
                  sx={{
                    width: 200,
                    pr: 60,
                  }}
                >
                  <Typography
                    sx={{
                      color: "#ffff",
                    }}
                    className={styles.TextMoBilePage2}
                    variant="h4"
                    gutterBottom
                  >
                    Banana Island
                  </Typography>
                </Box>

                <Box
                  sx={{
                    pb: 3,
                    width: 300,
                  }}
                >
                  <Typography
                    sx={{
                      color: "#ffff",
                    }}
                    className={styles.TextMoBilePage2}
                    variant="subtitle1"
                    gutterBottom
                  >
                    a community that gives you a taste of happiness, a place
                    you’ll love to live and an opportunity to build a home.
                  </Typography>
                </Box>
              </Grid>
              <Grid xs={6}>
                <Box>
                  <Box sx={{}}>
                    <Typography
                      sx={{
                        color: "#ffff",
                      }}
                      className={styles.TextPage1}
                      variant="h6"
                      gutterBottom
                    >
                      Follow up
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      pb: 3,
                      width: 300,
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#ffff",
                      }}
                      className={styles.TextMoBilePage2}
                      variant="subtitle1"
                      gutterBottom
                    >
                      Keep up with our newsletter to get updates about projects
                      and offers
                    </Typography>
                  </Box>

                  <Grid
                    style={{ background: "#ffff" }}
                    sx={{
                      width: 300,
                    }}
                  >
                    <InputBase
                      placeholder="Email"
                      sx={{
                        width: 180,
                      }}
                    />
                    <Button style={{ color: "#0E204E" }}>Subscribe</Button>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: { lg: "none", xs: "block" },
        }}
      >
        <Box
          className="FooterM"
          sx={{
            bgcolor: "#0E204E",
          }}
        >
          <Box
            sx={{
              pt: 4,
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                color: "#ffff",
                fontWeight: "bold",
              }}
              className={styles.TextMoBilePage2}
              variant="h6"
              gutterBottom
            >
              Pineapple Island
            </Typography>
          </Box>

          <Grid
            container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pt: 2,
              pl: 5.5,
            }}
          >
            <Grid
              xs={1}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image src={copy} priority width={15} alt="" />
            </Grid>
            <Grid xs>
              <Typography
                sx={{
                  color: "#ffff",
                  pr: 5,
                }}
                className={styles.TextMoBilePage2}
                variant="subtitle2"
                gutterBottom
              >
                Copyright 2021 Glowdsgn All Rights Reserved
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
