import {
  Button,
  Checkbox,
  Box,
  Grid,
  Typography,
  Fade,
  FormControlLabel,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Icon from "../image/iconnavbar.png";
import Hamburger from "hamburger-react";
import Close from "../image/close.png";
import { useState } from "react";
import { Link } from "react-scroll";
import Container from '@mui/material/Container';

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  type Anchor = "right";
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };


  return (
    <>
      <Box
        className="NavBar"
        sx={{
          display: { xs: "none", lg: "block" },
        }}
      >
         <Container>
          <Box>
            <Grid container
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
            >
              <Grid>
                <Box
                  className="NavName"
                  sx={{ width: "10%", marginLeft: "10px", marginTop: "50px" }}
                >
                  <Typography
                    sx={{}}
                    className="NavTextName"
                    variant="h4"
                    gutterBottom
                  >
                    Pineapple Island
                  </Typography>
                </Box>
              </Grid>

              <Grid>
                <Box
                  sx={{
                    display: "flex",
                    
                    marginTop: "80px",
                    marginLeft: "-20px",
                  }}
                >
                  <Typography sx={{
                    
                    px:6
                  }} className="NavMenu" variant="h6" gutterBottom>
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
                  <Typography sx={{
                    px:6
                  }} className="NavMenu" variant="h6" gutterBottom>                    <Link
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
                  <Typography sx={{
                    px:6
                  }} className="NavMenu" variant="h6" gutterBottom>                    <Link
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

              <Grid>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <Button
                    variant="contained"
                    className="NavMenu"
                    sx={{
                      color: "#ffff",
                      bgcolor: "#0E204E",
                      zIndex: 1,
                      borderRadius: 0,
                      marginTop: "65px",
                      marginRight: "100px",
                      px: 4,
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
                      <Typography className="NavMenu" variant="h6" gutterBottom>
                        Get in Touch
                      </Typography>
                    </Link>
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
          </Container>
      
      </Box>

      <Box
        sx={{
          display: { xs: "block", lg: "none" },
        }}
      >
        <Grid container>
          <Grid xs>
            <Box
              className="NavName"
              sx={{ width: "10%", marginLeft: "20px", marginTop: "50px" }}
            >
              <Typography
                sx={{}}
                className="NavTextName"
                variant="h6"
                gutterBottom
              >
                Pineapple Island
              </Typography>
            </Box>
          </Grid>
          <Grid>
            <Box
              sx={{
                marginTop: "65px",
                marginRight: 3,
              }}
            >
              {(["right"] as const).map((anchor) => (
                <Box key={anchor}>
                  <Hamburger
                    color="#0E204E"
                    duration={0.8}
                    toggled={isOpen}
                    toggle={setOpen}
                    onToggle={toggleDrawer(anchor, true) as any}
                  />

                  <Drawer
                    transitionDuration={{ enter: 700, exit: 800 }}
                    sx={{
                      display: { xs: "block", lg: "none" },
                    }}
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                    onClickCapture={() => {
                      setOpen(false);
                    }}
                  >
                    <Hamburger
                      color="#0E204E"
                      duration={0.5}
                      toggled={isOpen}
                      onToggle={toggleDrawer(anchor, false) as any}
                    />
                    <Box
                      sx={{
                        padding: 4,
                      }}
                    >
                      <Typography
                        className={styles.NavMenu}
                        variant="h6"
                        gutterBottom
                        sx={{
                          cursor: "pointer",
                          paddingBottom: 2,
                        }}
                      >
                        <Link
                          to="PageTwo"
                          spy={true}
                          smooth={true}
                          offset={30}
                          duration={500}
                          onClick={toggleDrawer(anchor, false) as any}
                          onClickCapture={() => {
                            setOpen(false);
                          }}
                        >
                          {" "}
                          About Us{" "}
                        </Link>
                      </Typography>
                      <Typography
                        className={styles.NavMenu}
                        variant="h6"
                        gutterBottom
                        sx={{
                          cursor: "pointer",
                          paddingBottom: 2,
                        }}
                      >
                        <Link
                          to="Pagefour"
                          spy={true}
                          smooth={true}
                          offset={30}
                          duration={500}
                          onClick={toggleDrawer(anchor, false) as any}
                          onClickCapture={() => {
                            setOpen(false);
                          }}
                        >
                          {" "}
                          What we do{" "}
                        </Link>
                      </Typography>
                      <Typography
                        className={styles.NavMenu}
                        variant="h6"
                        gutterBottom
                        sx={{
                          cursor: "pointer",
                        }}
                      >
                        <Link
                          to="Pagefive"
                          spy={true}
                          smooth={true}
                          offset={30}
                          duration={500}
                          onClick={toggleDrawer(anchor, false) as any}
                          onClickCapture={() => {
                            setOpen(false);
                          }}
                        >
                          {" "}
                          Project{" "}
                        </Link>
                      </Typography>
                    </Box>
                  </Drawer>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
