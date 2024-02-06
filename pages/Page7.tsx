import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import styles from "@/styles/Home.module.css";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
export default function Page7() {
  const buttonalert = (): void => {
    alert("Thank you");
  };

  return (
    <>
      <Box
        className="Page7"
        id="PageSeven"
        sx={{
          display: { xs: "none", lg: "block" },
        }}
      >
        <Box>
          <Box
            sx={{
              mt: 85,
            }}
          >
            <Box
              sx={{
                paddingTop: 10,
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#0E204E",
                  fontWeight: "bold",
                }}
                className={styles.TextPage1}
                variant="h3"
                gutterBottom
              >
                Stay In Touch
              </Typography>

              <Typography
                sx={{
                  textAlign: "center",
                  color: "#0E204E",
                }}
                className={styles.TextMoBilePage2}
                variant="subtitle1"
                gutterBottom
              >
                Are you curious about Pineapple Island? Send a message
              </Typography>
            </Box>

            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    p: 5,
                  }}
                >
                  <TextField
                    id="outlined-basic"
                    label="Name"
                    sx={{ width: 700 }}
                  />
                </Box>
                <Box
                  sx={{
                    p: 5,
                  }}
                >
                  <TextField
                    id="outlined-basic"
                    label="Phone No"
                    type="number"
                    sx={{ width: 700 }}
                  />
                </Box>
                <Box
                  sx={{
                    p: 5,
                  }}
                >
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    sx={{ width: 700 }}
                  />
                </Box>
                <Box
                  sx={{
                    p: 5,
                    width: 700,
                  }}
                >
                  <TextField
                    id="outlined-multiline-static"
                    label="Message"
                    multiline
                    rows={4}
                    fullWidth
                  />
                </Box>
              </Box>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                onClick={buttonalert}
                sx={{
                  color: "#ffff",
                  bgcolor: "#0E204E",
                  width: 100,
                  marginTop: -3,
                }}
              >
                Send
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Mobile */}

      <Box
        className="Page7M"
        id="PageSevenM"
        sx={{
          display: { xs: "block", lg: "none" },
        }}
      >
        <Box>
          <Box
            sx={{
              pt: 7,
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                color: "#0E204E",
                fontWeight: "bold",
              }}
              className={styles.TextPage1}
              variant="h6"
              gutterBottom
            >
              Stay In Touch
            </Typography>
          </Box>

          <Box sx={{}}>
            <Typography
              sx={{
                textAlign: "center",
                color: "#0E204E",
                pt: 2,
              }}
              className={styles.TextMoBilePage2}
              variant="subtitle1"
              gutterBottom
            >
              If you are interested in finding out more about The Discovery
              Village, leave a message
            </Typography>
          </Box>
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
                p: 2,
              }}
            >
              <TextField id="standard-basic" label="Name" variant="standard" />
            </Box>
            <Box
              sx={{
                p: 2,
              }}
            >
              <TextField
                id="standard-basic"
                label="Phone No"
                variant="standard"
              />
            </Box>
            <Box
              sx={{
                p: 2,
              }}
            >
              <TextField id="standard-basic" label="Email" variant="standard" />
            </Box>
            <Box
              sx={{
                p: 2,
              }}
            >
              <TextField
                id="outlined-multiline-static"
                label="Message"
                multiline
                rows={4}
                fullWidth
              />
            </Box>
            <Button
              variant="contained"
              onClick={buttonalert}
              sx={{
                color: "#ffff",
                bgcolor: "#0E204E",
                width: 100,
              }}
            >
              Send
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
