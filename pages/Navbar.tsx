import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Typography from "@mui/material/Typography";
import Icon from "../image/iconnavbar.png";
import Close from "../image/close.png";
import Fade from "@mui/material/Fade";
import { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Link } from "react-scroll";
export default function Navbar() {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <>
      <div className="NavBar">
        <nav>
          <Box>
            <Grid container spacing={2}>
              <Grid xs>
                <Box className={styles.NavName}>
                  <Typography
                    sx={{ ml: { lg: 10, xs: 2 } }}
                    className={styles.NavTextName}
                    variant="h6"
                    gutterBottom
                  >
                    Pineapple Island
                  </Typography>
                </Box>
              </Grid>

              <Grid xs>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: { xs: -10, lg: 4 },
                  }}
                >
                  <Typography
                    className={styles.NavMenu}
                    variant="subtitle2"
                    gutterBottom
                  >
                    <Link
                      to="PageTwo"
                      spy={true}
                      smooth={true}
                      offset={30}
                      duration={500}
                    >
                      {" "}
                      About Us{" "}
                    </Link>
                  </Typography>
                  <Typography
                    className={styles.NavMenu}
                    variant="subtitle2"
                    gutterBottom
                  >
                    <Link
                      to="Pagefour"
                      spy={true}
                      smooth={true}
                      offset={30}
                      duration={500}
                    >
                      {" "}
                      What we do{" "}
                    </Link>
                  </Typography>
                  <Typography
                    className={styles.NavMenu}
                    variant="subtitle2"
                    gutterBottom
                  >
                    <Link
                      to="Pagefive"
                      spy={true}
                      smooth={true}
                      offset={30}
                      duration={500}
                    >
                      {" "}
                      Project{" "}
                    </Link>
                  </Typography>
                </Box>
              </Grid>

              <Grid xs>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      color: { xs: "#0E204E", lg: "#ffff" },
                      bgcolor: { xs: "#ffff", lg: "#0E204E" },
                      zIndex: { xs: 1 },
                      mt: { xs: -20, lg: 3 },
                      mr: { lg: 6 },
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
                      Get in Touch
                    </Link>
                  </Button>

                  <Box
                    sx={{
                      pt: { xs: 3, lg: 1 },
                      ml: { lg: -10 },
                      mr: { xs: 2 },
                    }}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={handleChange}
                          sx={{ display: "none" }}
                        />
                      }
                      label={
                        <Image
                          className={styles.NavMenu}
                          src={Icon}
                          width={30}
                          priority
                          alt=""
                        />
                      }
                    ></FormControlLabel>
                  </Box>
                </Box>
              </Grid>
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <Fade in={checked}>
                  <ul className={styles.sidebar} id="sidebar">
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={handleChange}
                          sx={{ display: "none" }}
                        />
                      }
                      label={
                        <Image
                          className="IconClose"
                          src={Close}
                          width={50}
                          priority
                          alt=""
                        />
                      }
                    ></FormControlLabel>
                    <li className="Navli">
                      {" "}
                      <Link
                        to="PageTwoM"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                      >
                        {" "}
                        About Us{" "}
                      </Link>
                    </li>
                    <li className="Navli">
                      {" "}
                      <Link
                        to="PageFourM"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                      >
                        {" "}
                        What we do{" "}
                      </Link>
                    </li>
                    <li className="Navli">
                      {" "}
                      <Link
                        to="PageFiveM"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                      >
                        {" "}
                        Project{" "}
                      </Link>
                    </li>
                  </ul>
                </Fade>
              </Box>
            </Grid>
          </Box>
        </nav>
      </div>
    </>
  );
}
