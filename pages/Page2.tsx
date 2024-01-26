import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Typography from "@mui/material/Typography";
import page2 from "../image/page2.png";

export default function Page2() {
  return (
    <>
      <div className="Page2" id="PageTwo">
        <Box
          sx={{
            mt: { xs: -10, lg: 0 },
          }}
        >
          <Box>
            <Grid
              container
              sx={{
                display: "flex",
                flexDirection: { xs: "column", lg: "row" },
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
                    zIndex: { xs: 1 },
                  }}
                >
                  <Box sx={{ display: { xs: "none", lg: "block" } }}>
                    <Typography
                      sx={{ textAlign: { xs: "center" } }}
                      className={styles.NavTextName}
                      variant="h4"
                      gutterBottom
                    >
                      About Pineapple Island
                    </Typography>
                  </Box>

                  <Box sx={{ display: { lg: "none", xs: "block" } }}>
                    <Typography
                      sx={{
                        textAlign: { xs: "center" },
                      }}
                      className={styles.TextPage2}
                      variant="h5"
                      gutterBottom
                    >
                      About{" "}
                    </Typography>
                    <Typography
                      sx={{
                        textAlign: { xs: "center" },
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
                <Box sx={{ display: { xs: "none", lg: "block" } }}>
                  <Image src={page2} priority width={600} alt="" />
                </Box>

                <Box sx={{ display: { lg: "none", xs: "block" } }}>
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
                      zIndex: { xs: 1 },
                      color: { xs: "#ffff" },
                      position: "absolute",
                      mt: -50,
                      textAlign: { xs: "center" },
                    }}
                    className={styles.TextRectanglePage2}
                    variant="subtitle2"
                    gutterBottom
                  >
                    Pineapple Island is the most sought-after community in
                    Ibadan that values and puts the needs of their clients
                    first. It is a territory with loft complexes that creates a
                    country life and homely feeling that is integrated with
                    industrial development. A perfect, professional built abode
                    that gives you the true taste of beauty and happiness.{" "}
                  </Typography>
                </Box>
              </Grid>
              <Grid
                xs
                sx={{
                  bgcolor: { xs: "none", lg: "#0E204E" },
                  color: "#ffff",
                  height: 510,
                  width: 500,
                  zIndex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box>
                  <Box className={styles.TextRectanglePage2}>
                    <Box sx={{ display: { lg: "block", xs: "none" } }}>
                      <Typography
                        sx={{
                          p: 8,
                          zIndex: { xs: 1 },
                          color: { xs: "#000", lg: "#ffff" },
                          display: { xs: "none", lg: "block" },
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
                        of beauty and happiness.{" "}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>

              <Grid sx={{ width: { xs: 10, lg: 110 } }}>
                <div></div>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </>
  );
}
