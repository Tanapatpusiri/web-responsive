import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Typography from "@mui/material/Typography";
import page3 from "../image/ImagePage3.png";

export default function Page3() {
  return (
    <>
      <div>
        <Box
          className="Page3"
          sx={{
            display: { xs: "none", lg: "block" },
          }}
        >
          <Box
            className="Page3Background"
            sx={{
              mt: 10,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pt: 30,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <Box>
                  <Grid
                    container
                    sx={{
                      flexDirection: "row",
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
                      <Box>
                        <Box
                          sx={{
                            width: 200,
                            mr: 10,
                          }}
                        >
                          <Typography
                            sx={{
                              textAlign: "start",
                              p: 1,
                              ml: -10,
                            }}
                            className={styles.DivTextPage3}
                            variant="h3"
                            gutterBottom
                          >
                            Why Choose Pineapple Island
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>

                    <Grid>
                      <Box
                        sx={{
                          display: "flex",
                        }}
                      >
                        <Box
                          sx={{
                            bgcolor: "#ffff",
                            height: 520,
                            p: 8,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Box>
                            <Typography
                              sx={{
                                color: "#0E204E",
                                width: 200,
                                pt: 10,
                              }}
                              className={styles.TextMoBilePage2}
                            >
                              Pineapple Island is the most sought-after
                              community in Ibadan that values and puts the needs
                              of their clients first. It is a territory with
                              loft complexes that creates a country life and
                              homely feeling that is integrated with industrial
                              development. A perfect, professional built abode
                              that gives you the true taste of beauty and
                              happiness.
                            </Typography>
                          </Box>
                        </Box>

                        <Box>
                          <Image src={page3} priority width={600} alt="" />
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </div>
      {/* Mobile */}
      <div>
        <Box
          className="Page3M"
          sx={{
            display: { xs: "block", lg: "none" },
            mt: -50,
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              color: "#0E204E",
              fontWeight: "bold",
            }}
            className={styles.TextPage1}
            variant="h5"
            gutterBottom
          >
            Why Choose
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              color: "#0E204E",
              fontWeight: "bold",
              mb: 1,
            }}
            className={styles.TextPage1}
            variant="h5"
            gutterBottom
          >
            Pineapple Island
          </Typography>

          <Typography
            sx={{
              color: "#0E204E",
              width: 380,
              textAlign: "center",
              pl: 4,
              pt: 2,
            }}
            className={styles.TextMoBilePage2}
          >
            Pineapple Island is the most sought-after community in Ibadan that
            values and puts the needs of their clients first. It is a territory
            with loft complexes that creates a country life and homely feeling
            that is integrated with industrial development. A perfect,
            professional built abode that gives you the true taste of beauty and
            happiness.
          </Typography>

          <Grid xs>
            <Box
              sx={{
                pl: 3,
                pt: 2,
              }}
            >
              <Image src={page3} priority width={380} alt="" />
            </Box>
          </Grid>
        </Box>
      </div>
    </>
  );
}
