import { Button, Box, Grid, Typography, Drawer } from "@mui/material";
import styles from "@/styles/Home.module.css";
import Hamburger from "hamburger-react";
import { useState } from "react";
import { Link } from "react-scroll";
import Container from "@mui/material/Container";

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
      <Container maxWidth={false} sx={{ maxWidth: "1920px" }}>
        <Box
          className="NavBar"
          sx={{
            display: { xs: "none", lg: "block" },
          }}
        >
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  marginLeft: "84px",
                  marginTop: "50px",
                }}
              >
                <Box sx={{ width: "148px", color: "#0E204E" }}>
                  <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                      fontFamily: "Playfair Display",
                      color: "#0E204E",
                      fontWeight: "bold",
                    }}
                  >
                    Pineapple Island
                  </Typography>
                </Box>
              </Box>

              <Box>
                <Box
                  sx={{
                    display: "flex",
                    marginTop: "81px",
                  }}
                >
                  <Typography
                    sx={{
                      paddingRight: "87px",
                      cursor: "pointer",
                      fontFamily: "Manrope",
                      color: "#232323",
                      fontWeight: "bold",
                    }}
                    variant="h6"
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
                    sx={{
                      paddingRight: "87px",
                      cursor: "pointer",
                      fontFamily: "Manrope",
                      color: "#232323",
                      fontWeight: "bold",
                    }}
                    variant="h6"
                  >
                    {" "}
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
                    sx={{
                      paddingRight: "87px",
                      cursor: "pointer",
                      fontFamily: "Manrope",
                      color: "#232323",
                      fontWeight: "bold",
                    }}
                    variant="h6"
                  >
                    {" "}
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
              </Box>

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
                      marginTop: "68px",
                      marginRight: "50px",
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
                      <Typography
                        sx={{
                          cursor: "pointer",
                          fontFamily: "Manrope",
                          fontWeight: "bold",
                          paddingTop: 1,
                        }}
                        gutterBottom
                        variant="h6"
                      >
                        Get in Touch
                      </Typography>
                    </Link>
                  </Button>
                </Box>
              </Grid>
            </Box>
          </Box>
        </Box>

        {/* mobile */}

        <Box
          sx={{
            display: { xs: "block", lg: "none" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box
              className="NavName"
              sx={{
                width: "10%",
                marginLeft: "4px",
                marginTop: "50px",
                color: "#0E204E",
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  fontFamily: "Playfair Display",
                  color: "#0E204E",
                  fontWeight: "bold",
                }}
              >
                Pineapple Island
              </Typography>
            </Box>

            <Box
              sx={{
                marginTop: "65px",
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
                    size={24}
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
                      size={24}
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
          </Box>
        </Box>
      </Container>
    </>
  );
}
