import Head from "next/head";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Typography from "@mui/material/Typography";

import page1 from "../image/page1.png";
import MobilePage1 from "../image/page1-mobile.png";

export default function Page1() {
  return (
    <>
      <div className="Page1" id="PageOne">
        <Box>
          <Grid
            container
            spacing={1}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Grid sx={{ width: { xs: 10, lg: 80 } }}>
              <div></div>
            </Grid>
            <Grid
              sx={{
                color: { xs: "#ffff", lg: "#ffff" },
                bgcolor: { xs: "none", lg: "#0E204E" },
                zIndex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position:'relative',
                right:{xs:0,md:-120,lg:-120},
                height: { xs: 400, lg: 300 },
                p: { xs: 0, lg: 9 },
                pt: { lg: 7 },
              }}
            >
              <Box>
                <Box
                  sx={{
                    width: { xs: 395, lg: 350 },
                    mt: { xs: -10, lg: 0 },
                    textAlign: { xs: "center", lg: "start" },
                    ml:1.5
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: 32, lg: 36 },
                      fontWeight: { xs: "bold" },
                      pb:{xs:2.5,lg:0}
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
                      color: { xs: "#0E204E" },
                      bgcolor: { xs: "#ffff" },
                      mt: { xs: 5 },
                      display: { lg: "none", xs: "block" },
                    }}
                  >
                    {" "}
                    Get in Touch
                  </Button>
                </Box>
              </Box>
            </Grid>

            <Grid
              xs
              className={styles.DivImage}
              sx={{ width: { xs: 100, lg: 1000 } }}
            >
              <Box
                sx={{
                 
                  display: { xs: "none", lg: "block" },
  
                }}
              >
                <Image src={page1}  priority alt="" className={styles.ImagePage1} />
              </Box>

              <Box
                sx={{
                  ml: { xs: -10 },
                  display: { lg: "none", xs: "block" },
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
    </>
  );
}
