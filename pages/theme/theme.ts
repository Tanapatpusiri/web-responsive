import { createTheme } from "@mui/material"
declare module "@mui/material/styles"{
    interface BreakpointOverides{
        xs:true
        sm:false
        md:false
        lg:true
        xl:false
    }
}

export const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });