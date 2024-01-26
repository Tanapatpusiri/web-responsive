import Head from "next/head";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Typography from '@mui/material/Typography';
import Icon from '../image/iconnavbar.png'



export default function Navbar() {


  return (
    <>
      
        <div>
          <nav>
            <Box >
              <Grid container spacing={2}>

                <Grid xs>
                  <Box className={styles.NavName}>
                    <Typography sx={{ ml: { lg: 10, xs: 2 } }}
                      className={styles.NavTextName} variant="h6" gutterBottom>Pineapple Island</Typography>
                  </Box>
                </Grid>

                <Grid xs>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      mt: { xs: -10, lg: 4 }
                    }} >
                    <Typography className={styles.NavMenu} variant="subtitle2" gutterBottom>About Us</Typography>
                    <Typography className={styles.NavMenu} variant="subtitle2" gutterBottom>What we do</Typography>
                    <Typography className={styles.NavMenu} variant="subtitle2" gutterBottom>Project </Typography>
                  </Box>
                </Grid>

                <Grid xs>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>

                    <Button variant="contained"
                      sx={{
                        color: { xs: "#0E204E", lg: "#ffff" },
                        bgcolor: { xs: "#ffff", lg: "#0E204E" },
                        zIndex: { xs: 1 },
                        mt: { xs: -20, lg: 3 },
                        mr: { lg: 6 },
                      }}> Get in Touch
                    </Button>

                    <Box sx={{
                      pt: { xs: 3, lg: 1 },
                      ml: { lg: -10 },
                      mr: { xs: 2 }
                    }}>
                      <Image className={styles.NavMenu} src={Icon} width={30} priority alt="" />
                    </Box>
                  
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </nav>
        </div>
       
    </>
  );
}
