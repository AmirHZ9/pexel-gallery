import React from "react";
import { Link } from "react-router-dom";

///Styles
import style from "../../style/Footer.module.css"
import { Box, Container, Grid, Typography, Button } from "@mui/material";

//Icons
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import AppleIcon from "@mui/icons-material/Apple";
import AdbIcon from "@mui/icons-material/Adb";
export default function Footer() {
  return (
   <div className={style.footer}>

      <Container maxWidth='xl'>
        <Grid container  spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography component="p" variant="p" fontWeight={600} sx={{fontSize:"21px",lineHeight:"33px"}}>
              Free photos and videos shared by talented createors.
            </Typography>
            <Box>
              <Typography variant="p" fontWeight={500}  sx={{margin:'10px 0', color:"#bfbfbf" ,display:"block"}}>
                Download one of our apps.
              </Typography>
              <Button sx={{color:"black",background:"white" , marginRight:"5px",fontWeight:700}} ><AppleIcon/> ios</Button>
              <Button sx={{color:"black",background:"white",fontWeight:700}}><AdbIcon/> Android</Button>
            </Box>
            <Box component="div" className={style.contactIcon} >
              <ul>
                <li><TwitterIcon/></li>
                <li><FacebookIcon/></li>
                <li><InstagramIcon/></li>
                <li><PinterestIcon/></li>
              </ul>
            </Box>
          </Grid>
          <Grid item xs={12}  sm={6} md={3} className={style.pixels}>
            <ul>
              <li>Pixels</li>
              <li><Link to="/">Free Stock Photos </Link></li>
              <li><Link to="/">Free Videos </Link></li>
              <li><Link to="/">Popular searches </Link></li>
              <li><Link to="/">Collections </Link></li>
              <li><Link to="/">Challenges </Link></li>
              <li><Link to="/">Leaderboard </Link></li>
              <li><Link to="/">Other plugins & apps </Link></li>
            </ul>
          </Grid>
          <Grid item xs={12}  sm={6} md={3} className={style.company}>
            <ul>
              <li>Company</li>
              <li><Link to="/">About </Link></li>
              <li><Link to="/">Blog </Link></li>
              <li><Link to="/">FAQ </Link></li>
              <li><Link to="/">Become a hero </Link></li>
              <li><Link to="/">Partner with Pexels </Link></li>
              <li><Link to="/">Image & Video API </Link></li>
            </ul>
          </Grid>
          <Grid item xs={12}  sm={6} md={3} className={style.freeStockPhoto} >
            <ul>
              <li>Free Stock Photos</li>
              <li><Link to="/">Black and white photography </Link></li>
              <li><Link to="/">Happy birthday images </Link></li>
              <li><Link to="/">Free business videos </Link></li>
              <li><Link to="/">Happy new year images </Link></li>
              <li><Link to="/">Cool wallpapers</Link></li>
              <li><Link to="/">Galaxy wallpaper </Link></li>
              <li><Link to="/">Lock screen  Wallpaper </Link></li>
              <li><Link to="/">iPhone wallpaper</Link></li>
            </ul>
          </Grid>
          <Grid item xs={12} textAlign="center" m={2} fontWeight={700}>
            <Typography component = "p" variant="p" >
                Terms of Use Privacy Policy License Imprint
              </Typography>
          </Grid>
        </Grid>
      </Container>

                </div>
  );
}
