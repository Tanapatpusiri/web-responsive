import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Typography from "@mui/material/Typography";
import Image1 from "../image/Image1-page5.png";
import Image2 from "../image/Image2-page5.png";
import Image3 from "../image/Image3-page5.png";
import Image4 from "../image/Image4-page5.png";
import Image5 from "../image/Image5-page5.png";
import Image6 from "../image/Image6-page5.png";
import Image7 from "../image/Image7-page5.png";
import Image8 from "../image/Image8-page5.png";
import Image9 from "../image/Image9-page5.png";
import Image10 from "../image/Image10-page5.png";
import Image11 from "../image/Image11-page5.png";
import Image12 from "../image/Image12-page5.png";
import Page4 from "../image/page4M.png";
import Page4_22 from "../image/page4-22.png";
export default function Page5() {
  return (
    <>
      <Box
        className="Page5"
        sx={{
          pb: { xs: 90, lg: 50 },
          mt: {xs:3,lg:0}
        }}
      >
        <Box
          sx={{
            display: { xs: "none", lg: "block" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              pt: 15,
            }}
          >
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
              Galleries
            </Typography>
            <Box
              sx={{
                width: 470,
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#0E204E",
                  fontWeight: "bold",
                }}
                className={styles.TextMoBilePage2}
                gutterBottom
              >
                a community that gives you a taste of happiness, a place you’ll
                love to live and an opportunity to build a home.
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              pt: 5,
            }}
          >
            <Grid container spacing={4}>
              <Grid xs={4}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Image src={Image1} priority width={350} alt="" />
                </Box>
              </Grid>
              <Grid xs={4}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Image src={Image2} priority width={350} alt="" />
                </Box>
              </Grid>
              <Grid xs={4}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Image src={Image3} priority width={350} alt="" />
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              pt: 5,
            }}
          >
            <Grid container spacing={4}>
              <Grid xs={4}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Image src={Image4} priority width={350} alt="" />
                </Box>
              </Grid>
              <Grid xs={4}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Image src={Image5} priority width={350} alt="" />
                </Box>
              </Grid>
              <Grid xs={4}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Image src={Image6} priority width={350} alt="" />
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              pt: 5,
            }}
          >
            <Grid container spacing={4}>
              <Grid xs={4}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Image src={Image7} priority width={350} alt="" />
                </Box>
              </Grid>
              <Grid xs={4}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Image src={Image8} priority width={350} alt="" />
                </Box>
              </Grid>
              <Grid xs={4}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Image src={Image9} priority width={350} alt="" />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>

        {/* Mobile */}
        <Box
          sx={{
            display: { xs: "block", lg: "none" },
          }}
        >
          <Box>
            <Typography
              sx={{
                textAlign: "center",
                color: "#0E204E",
                fontWeight: "bold",
                mt: -30,
              }}
              className={styles.TextPage1}
              variant="h4"
              gutterBottom
            >
              Available Homes
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: 250,
                }}
              >
                <Typography
                  sx={{
                    textAlign: "center",
                    color: "#263238",
                    fontWeight: "bold",
                    mt: -0,
                    p: 0.5,
                  }}
                  className={styles.TextPage5}
                  variant="subtitle2"
                  gutterBottom
                >
                  a community that gives you a taste of happiness, a place
                  you’ll love to live and an opportunity to build a home.
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              pt: 4,
            }}
          >
            <Grid container spacing={2}>
              <Grid xs={6}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src={Image10}
                    priority
                    width={150}
                    height={128}
                    alt=""
                  />
                </Box>
              </Grid>
              <Grid xs={6}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Image src={Image2} priority width={150} alt="" />
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              pt: 4,
            }}
          >
            <Grid container spacing={2}>
              <Grid xs={6}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Image src={Image3} priority width={150} alt="" />
                </Box>
              </Grid>

              <Grid xs={6}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src={Image11}
                    priority
                    width={150}
                    height={128}
                    alt=""
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              pt: 4,
            }}
          >
            <Grid
              container
              spacing={2}
              sx={{
                display: "flex",
                flexDirection: "column",
                pr: 2,
              }}
            >
              <Grid xs={12}>
                <Box>
                  <Image src={Image6} priority width={150} alt="" />
                </Box>
              </Grid>

              <Grid xs={10}>
                <Box>
                  <Image
                    src={Image5}
                    priority
                    width={150}
                    height={128}
                    alt=""
                  />
                </Box>
              </Grid>
            </Grid>

            <Grid xs={1}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexFlow: "column",
                }}
              >
                <Image src={Page4} priority width={150} height={270} alt="" />
              </Box>
            </Grid>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              pt: 4,
            }}
          >
            <Grid xs={1}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexFlow: "column",
                }}
              >
                <Image src={Image12} priority width={150} height={270} alt="" />
              </Box>
            </Grid>
            <Grid
              container
              spacing={2}
              sx={{
                display: "flex",
                flexDirection: "column",
                pl: 2,
              }}
            >
              <Grid xs={12}>
                <Box sx={{}}>
                  <Image src={Image7} priority width={150} alt="" />
                </Box>
              </Grid>

              <Grid xs={10}>
                <Box sx={{}}>
                  <Image
                    src={Image8}
                    priority
                    width={150}
                    height={128}
                    alt=""
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              pt: 4,
            }}
          >
            <Grid container spacing={2}>
              <Grid xs={6}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src={Image1}
                    priority
                    width={150}
                    height={128}
                    alt=""
                  />
                </Box>
              </Grid>
              <Grid xs={6}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Image src={Image4} priority width={150} alt="" />
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              pt: 4,
            }}
          >
            <Grid container spacing={2}>
              <Grid xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexFlow: "row",
                  }}
                >
                  <Image
                    src={Page4_22}
                    priority
                    width={320}
                    height={150}
                    alt=""
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}
