import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Typography from "@mui/material/Typography";
import Image1 from "../image/Image1-page6.png";
import Image2 from "../image/Image2-page6.png";
import checkbox from "../image/checkbox.png";
import Button from "@mui/material/Button";
import { Link } from "react-scroll";

export default function Page6() {
  return (
    <>
      <Box
        className="Page6"
        sx={{
          pt: 50,
          display: { xs: "none", lg: "block" },
        }}
      >
        <Box></Box>

        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
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
                    <Image src={Image1} priority width={350} alt="" />
                  </Grid>
                  <Grid
                    sx={{
                      bgcolor: "#0E204E",
                      width: 150,
                      height: 350,
                    }}
                  ></Grid>
                </Grid>
              </Grid>

              <Grid>
                <Box
                  sx={{
                    pb: 8,
                  }}
                >
                  <Box
                    sx={{
                      pb: 3,
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
                      Amazing Features
                    </Typography>
                  </Box>

                  <Box
                    id="1"
                    sx={{
                      bgcolor: "rgba(14, 63, 51, 0.20)",
                      pl: 2,
                      pr: 4,
                      pt: 1,
                      display: "flex",
                    }}
                  >
                    <Grid container>
                      <Grid xs={12}>
                        <Typography
                          sx={{
                            color: "#030033",
                            pr: 5,
                          }}
                          className={styles.FontPage4}
                          variant="subtitle2"
                          gutterBottom
                        >
                          Lorem ipsum dolor sit amet, consectetur
                        </Typography>
                      </Grid>
                      <Grid
                        xs
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Image src={checkbox} priority width={15} alt="" />
                      </Grid>
                    </Grid>
                  </Box>

                  <Box
                    id="2"
                    sx={{
                      pt: 2,
                      pb: 1.5,
                      pl: 2,
                      pr: 4,
                      display: "flex",
                    }}
                  >
                    <Grid container>
                      <Grid xs={12}>
                        <Typography
                          sx={{
                            color: "#030033",
                            pr: 5,
                          }}
                          className={styles.FontPage4}
                          variant="subtitle2"
                          gutterBottom
                        >
                          Lorem ipsum dolor sit amet, consectetur
                        </Typography>
                      </Grid>
                      <Grid
                        xs
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Image src={checkbox} priority width={15} alt="" />
                      </Grid>
                    </Grid>
                  </Box>

                  <Box
                    id="3"
                    sx={{
                      bgcolor: "rgba(14, 63, 51, 0.20)",
                      pl: 2,
                      pr: 4,
                      pt: 1,
                      display: "flex",
                    }}
                  >
                    <Grid container>
                      <Grid xs={12}>
                        <Typography
                          sx={{
                            color: "#030033",
                            pr: 5,
                          }}
                          className={styles.FontPage4}
                          variant="subtitle2"
                          gutterBottom
                        >
                          Lorem ipsum dolor sit amet, consectetur
                        </Typography>
                      </Grid>
                      <Grid
                        xs
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Image src={checkbox} priority width={15} alt="" />
                      </Grid>
                    </Grid>
                  </Box>

                  <Box
                    id="4"
                    sx={{
                      pt: 2,
                      pb: 1.5,
                      pl: 2,
                      pr: 4,
                      display: "flex",
                    }}
                  >
                    <Grid container>
                      <Grid xs={12}>
                        <Typography
                          sx={{
                            color: "#030033",
                            pr: 5,
                          }}
                          className={styles.FontPage4}
                          variant="subtitle2"
                          gutterBottom
                        >
                          Lorem ipsum dolor sit amet, consectetur
                        </Typography>
                      </Grid>
                      <Grid
                        xs
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Image src={checkbox} priority width={15} alt="" />
                      </Grid>
                    </Grid>
                  </Box>

                  <Box
                    id="5"
                    sx={{
                      bgcolor: "rgba(14, 63, 51, 0.20)",
                      pt: 1,
                      pl: 2,
                      pr: 4,
                      display: "flex",
                    }}
                  >
                    <Grid container>
                      <Grid xs={12}>
                        <Typography
                          sx={{
                            color: "#030033",
                            pr: 5,
                          }}
                          className={styles.FontPage4}
                          variant="subtitle2"
                          gutterBottom
                        >
                          Lorem ipsum dolor sit amet, consectetur
                        </Typography>
                      </Grid>
                      <Grid
                        xs
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Image src={checkbox} priority width={15} alt="" />
                      </Grid>
                    </Grid>
                  </Box>

                  <Box
                    id="6"
                    sx={{
                      pt: 2,
                      pb: 1.5,
                      pl: 2,
                      pr: 4,
                      display: "flex",
                    }}
                  >
                    <Grid container>
                      <Grid xs={12}>
                        <Typography
                          sx={{
                            color: "#030033",
                            pr: 5,
                          }}
                          className={styles.FontPage4}
                          variant="subtitle2"
                          gutterBottom
                        >
                          Lorem ipsum dolor sit amet, consectetur
                        </Typography>
                      </Grid>
                      <Grid
                        xs
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Image src={checkbox} priority width={15} alt="" />
                      </Grid>
                    </Grid>
                  </Box>

                  <Box
                    id="7"
                    sx={{
                      bgcolor: "rgba(14, 63, 51, 0.20)",
                      pl: 2,
                      pt: 1,
                      pr: 4,
                      display: "flex",
                    }}
                  >
                    <Grid container>
                      <Grid xs={12}>
                        <Typography
                          sx={{
                            color: "#030033",
                            pr: 5,
                          }}
                          className={styles.FontPage4}
                          variant="subtitle2"
                          gutterBottom
                        >
                          Lorem ipsum dolor sit amet, consectetur
                        </Typography>
                      </Grid>
                      <Grid
                        xs
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Image src={checkbox} priority width={15} alt="" />
                      </Grid>
                    </Grid>
                  </Box>

                  <Box
                    id="8"
                    sx={{
                      pt: 2,
                      pb: 1.5,
                      pl: 2,
                      pr: 4,
                      display: "flex",
                    }}
                  >
                    <Grid container>
                      <Grid xs={12}>
                        <Typography
                          sx={{
                            color: "#030033",
                            pr: 5,
                          }}
                          className={styles.FontPage4}
                          variant="subtitle2"
                          gutterBottom
                        >
                          Lorem ipsum dolor sit amet, consectetur
                        </Typography>
                      </Grid>
                      <Grid
                        xs
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Image src={checkbox} priority width={15} alt="" />
                      </Grid>
                    </Grid>
                  </Box>

                  <Box
                    id="9"
                    sx={{
                      bgcolor: "rgba(14, 63, 51, 0.20)",
                      pt: 1,
                      pl: 2,
                      pr: 4,
                      display: "flex",
                    }}
                  >
                    <Grid container>
                      <Grid xs={12}>
                        <Typography
                          sx={{
                            color: "#030033",
                            pr: 5,
                          }}
                          className={styles.FontPage4}
                          variant="subtitle2"
                          gutterBottom
                        >
                          Lorem ipsum dolor sit amet, consectetur
                        </Typography>
                      </Grid>
                      <Grid
                        xs
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Image src={checkbox} priority width={15} alt="" />
                      </Grid>
                    </Grid>
                  </Box>

                  <Box
                    id="10"
                    sx={{
                      pt: 2,
                      pb: 1.5,
                      pl: 2,
                      pr: 4,
                      display: "flex",
                    }}
                  >
                    <Grid container>
                      <Grid xs={12}>
                        <Typography
                          sx={{
                            color: "#030033",
                            pr: 5,
                          }}
                          className={styles.FontPage4}
                          variant="subtitle2"
                          gutterBottom
                        >
                          Lorem ipsum dolor sit amet, consectetur
                        </Typography>
                      </Grid>
                      <Grid
                        xs
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Image src={checkbox} priority width={15} alt="" />
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
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
                <Box
                  sx={{
                    pb: 8,
                  }}
                >
                  <Box
                    sx={{
                      pb: 3,
                      width: 300,
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#0E204E",
                        fontWeight: "bold",
                      }}
                      className={styles.TextPage1}
                      variant="h3"
                      gutterBottom
                    >
                      Become an Agent
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
                        color: "#263238",
                      }}
                      className={styles.FontPage4}
                      variant="subtitle2"
                      gutterBottom
                    >
                      A community that gives you a taste of happiness, a place
                      you’ll love to live and an opportunity to build a home.
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex" }}>
                    <Button
                      variant="contained"
                      sx={{
                        color: { xs: "#ffff" },
                        bgcolor: { xs: "#0E204E" },
                        width: 200,
                      }}
                    >
                      {" "}
                      <Link
                        to="PageSeven"
                        spy={true}
                        smooth={true}
                        offset={30}
                        duration={500}
                      >
                        {" "}
                        Join Now
                      </Link>
                    </Button>
                  </Box>
                </Box>
              </Grid>

              <Grid>
                <Grid
                  container
                  sx={{
                    alignItems: "center",
                  }}
                >
                  <Grid
                    sx={{
                      bgcolor: "#0E204E",
                      width: 150,
                      height: 350,
                    }}
                  ></Grid>
                  <Grid>
                    <Image src={Image2} priority width={350} alt="" />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>

      {/* Mobile */}

      <Box
        className="Page6M"
        sx={{
          display: { xs: "block", lg: "none" },
        }}
      >
        <Box
          sx={{
            mt: 70,
            p: 2,
            bgcolor: "#0E204E",
          }}
        >
          <Box>
            <Typography
              sx={{
                textAlign: "center",
                color: "#ffff",
                fontWeight: "bold",
              }}
              className={styles.TextPage1}
              variant="h5"
              gutterBottom
            >
              Become an Agent
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{
                textAlign: "center",
                color: "#ffff",
                p: 5,
                mt: -3,
              }}
              className={styles.FontPage4M}
              variant="subtitle2"
              gutterBottom
            >
              A community that gives you a taste of happiness, a place you’ll
              love to live and an opportunity to build a home.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              sx={{
                color: "#0E204E",
                bgcolor: "#ffff",
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
                Join Now
              </Link>
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
