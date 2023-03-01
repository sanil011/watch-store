import { useState, useEffect } from "react"
import Image from 'next/image'
import { Typography, Divider, Box, Stack, Button, Grid } from "@mui/material";
import Swiper from "../component/swiper";
import Product from "../component/product";
import brand1 from "../assets/brand-logo-1.jpg";
import brand2 from "../assets/brand-logo-2.jpg";
import brand3 from "../assets/brand-logo-3.jpg";
import brand4 from "../assets/brand-logo-4.jpg";
import brand5 from "../assets/brand-logo-5.jpg";
import brand6 from "../assets/brand-logo-6.jpg";
import brand7 from "../assets/Rectangle.jpg";
import Her from "../assets/for-her.jpg";
import Him from "../assets/for-him.jpg";
import { grey } from "@mui/material/colors";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
export default function Home() {
  const brand = [brand1, brand2, brand3, brand4, brand5, brand6];
  
  return (
    <div>

      <Swiper />
      <Box display="flex" flexDirection={{sm:"column",md:"row",xs:"column"}}  gap={{sm:"1em",md:"2em",xs:"1em"}} justifyContent="space-between" marginY="50px">
        {brand?.map((db, idx) => (
          <Stack direction={{ sm: "column", md: "row", xs: "column" }} gap={{ sm: "1em", md: "1.5em", xs: "2em" }} key={idx} justifyContent={"center"} alignItems={"center"}>
            <Image key={idx} src={db} alt="" />
          </Stack>
        ))}
      </Box>
      <Divider
        sx={{
          bgcolor: "grey.main",
          padding: ".3px"
        }}
      />
      <Typography variant='h4' fontWeight={400} textAlign={"center"} sx={{ margin: "30px 0" }}>
        TREND WATCHES
      </Typography>



      <Grid container>
        <Grid item xs={12} sm={6} md={3}>
          <Product name={"BOLD ROUND ANALOG GUNMETAL DIAL"} />
          <Divider
            sx={{
              bgcolor: "grey.main",
              padding: ".2px"
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Product name={"ROUND ANALOG WHITE & BEE DIAL LADIES"} />
          <Divider
            sx={{
              bgcolor: "grey.main",
              padding: ".2px"
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Product name={"ROUND ANALOG WHITE DIAL LADIES"} />
          <Divider
            sx={{
              bgcolor: "grey.main",
              padding: ".2px"
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Product name={"BOLD ROUND ANALOG GUNMETAL DIAL"} />
          <Divider
            sx={{
              bgcolor: "grey.main",
              padding: ".2px"
            }}
          />
        </Grid>
      </Grid>


      <Box display={"flex"} flexDirection={{md:"row",sm:"column"}} width="100%" minHeight={"calc(100vh - 350px)"}>
        <Box width={{ md: "50%", sm: "100%" }} sx={{  margin: "auto 0" }} textAlign={"center"}>
          <Typography
            color={"primary.main"}
            my={2}>
            Special Offer
          </Typography>
          <Typography variant='h2' my={2} fontWeight={700}>
            WATCHES
          </Typography>
          <Typography variant='h2' fontWeight={700} display="flex" justifyContent={"center"}>
            WITH <Typography variant='h2' fontWeight={700}  color={"primary.main"}>12% OFF</Typography>
          </Typography>
          <Typography color={"grey.main"} my={2}>
            Find your perfectly suited watch and get it with a discount
          </Typography>
          <Typography variant='body2' my={5}>
            GET A DISCOUNT →
          </Typography>
        </Box>
        <Box
          position={"relative"}
          width={{ md: "50%", sm: "100%" }}
          // height={"400px"}
        >
          <Image
            src={brand7}
            // style={{
            //   width: "100%", minHeight: "100%"
            // }}
            alt=""
            fill
          />
        </Box>
      </Box>

      <Divider
        sx={{
          bgcolor: "grey.main",
          padding: ".3px"
        }}
      />
      <Typography variant='h4' fontWeight={400} textAlign={"center"} sx={{ margin: "30px 0" }}>
        CHOOSE YOUR WATCH
      </Typography>
      <Divider
        sx={{
          bgcolor: "grey.main",
          padding: ".3px"
        }}
      />

      {/* FOR HER AND HIM */}
      <div>

        <Grid container >
          <Grid item
            sx={{
              borderColor: `${grey[500]} !important`,
            }}
            md={6}
            xs={12}
            justifyContent={"center"}
            alignItems={"center"}
            borderTop={1}
            borderRight={{
              md: 1,
              xs: "none",
            }}
            position={"relative"}
            minHeight={"calc(100vh - 250px)"}
          >
            <Box zIndex="999" position={"absolute"} marginLeft={"70%"} marginTop={"15em"}>
              <div style={{ display: "flex" }}>
                <Typography variant='h4' fontFamily={"Barlow Condensed"}
                  fontStyle="italic">for</Typography>
                <Typography variant='h4' pl={1.5} fontWeight={600}>HER</Typography>
              </div>
              <Button
                variant="text"
                sx={{
                  color: "secondary.main",
                  letterSpacing: -1,
                }}
              >
                SHOP NOW <ArrowRightAltIcon />
              </Button>
            </Box>
            <Image
              src={Her}
              alt=""
              fill
            />

          </Grid>


          <Grid item
            sx={{
              borderColor: `${grey[500]} !important`,
            }}
            md={6}
            xs={12}
            justifyContent={"center"}
            alignItems={"center"}
            borderTop={1}
            borderRight={{
              md: 1,
              xs: "none",
            }}
            minHeight={"calc(100vh - 250px)"}
            position={"relative"}>
            <Box zIndex="999" position={"absolute"} marginTop={"15em"} marginLeft={"1em"}>
              <div style={{ display: "flex" }}>
                <Typography variant='h4' fontFamily={"Barlow Condensed"}
                  fontStyle="italic">for</Typography>
                <Typography variant='h4' pl={1.5} fontWeight={600}>HIM</Typography>
              </div>
              <Button
                variant="text"
                sx={{
                  color: "secondary.main",
                  letterSpacing: -1,
                }}
              >
                SHOP NOW <ArrowRightAltIcon />
              </Button>
            </Box>
            <Image
              src={Him}
              alt=""
              fill
            />
          </Grid>

        </Grid>



        {/* SERVICES */}

        <Grid container sx={{ backgroundColor: "#212121" }}>
          <Grid item md={3} sm={6} xs={12} display={"flex"} justifyContent={"center"} alignItems={"center"} sx={{
       color: "#fff",
          }}
            width={{md:"100%",sm:"25%"}}
            padding={{ md: "1em 0", sm: "0" }} borderBottom={{ md: "1px solid grey" }} border={".3px solid grey"}>
            <LocalShippingIcon fontSize={"large"} sx={{ padding: "0 10px 0 0 " }} />
            <div>
              <Typography color={"primary.main"} fontWeight={900}>
                FREE SHIPPING
              </Typography>
              <Typography>
                Don&rsquo;t pay for delivery
              </Typography>
            </div>
          </Grid>

          <Grid item md={3} sm={6} xs={12} display={"flex"} justifyContent={"center"} alignItems={"center"} sx={{
            color: "#fff",
          }}
            width={{ md: "100%", sm: "25%" }}
            padding={{ md: "1em 0", sm: "0" }} borderBottom={{ md: "1px solid grey" }} border={".3px solid grey"}>
            <CurrencyRupeeIcon fontSize={"large"} sx={{ padding: "0 10px 0 0 " }} />
            <div>
              <Typography color={"primary.main"} fontWeight={900}>
                MONEY GUARANTEE
              </Typography>
              <Typography>
                Money back option
              </Typography>
            </div>
          </Grid>

          <Grid item md={3} sm={6} xs={12} display={"flex"} justifyContent={"center"} alignItems={"center"} sx={{
            color: "#fff",
          }}
            width={{ md: "100%", sm: "25%" }}
            padding={{ md: "1em 0", sm: "0" }} borderBottom={{ md: "1px solid grey" }} border={".3px solid grey"}>
            <AdminPanelSettingsOutlinedIcon fontSize={"large"} sx={{ padding: "0 10px 0 0 " }} />
            <div>
              <Typography color={"primary.main"} fontWeight={900}>
                SAFE SHOPPING
              </Typography>
              <Typography>
                Privacy policy guarantee
              </Typography>
            </div>
          </Grid>

          <Grid item md={3} sm={6} xs={12} display={"flex"} justifyContent={"center"} alignItems={"center"} sx={{
            color: "#fff",
          }}
            width={{ md: "100%", sm: "25%" }}
            padding={{ md: "1em 0", sm: "0" }} borderBottom={{ md: "1px solid grey" }} border={".3px solid grey"} 
          >
            <SupportAgentIcon fontSize={"large"} sx={{ padding: "0 10px 0 0 " }} />
            <div>
              <Typography color={"primary.main"} fontWeight={900} >
                ONLINE SUPPORT
              </Typography>
              <Typography>
                Consult with our suppoters
              </Typography>
            </div>
          </Grid>

        </Grid>
      </div>

      <Divider
        sx={{
          bgcolor: "grey.main",
          padding: ".3px"
        }}
      />
      <Typography variant='h4' fontWeight={400} textAlign={"center"} sx={{ margin: "30px 0" }}>
        POPULAR WATCHES
      </Typography>
      <Divider
        sx={{
          bgcolor: "grey.main",
          padding: ".3px"
        }}
      />

      <Grid container>
        <Grid item xs={12} sm={6} md={3}>
          <Product name={"ROUND ANALOG WHITE & BEE DIAL LADIES"} />
          <Divider
            sx={{
              bgcolor: "grey.main",
              padding: ".2px"
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Product name={"THE RUNWELL SPORT CHRONO"} />
          <Divider
            sx={{
              bgcolor: "grey.main",
              padding: ".2px"
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Product name={"TATUM ROUND ANALOG BLUE DIAL LADIES"} />
          <Divider
            sx={{
              bgcolor: "grey.main",
              padding: ".2px"
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Product name={"BOLD ROUND ANALOG GUNMETAL DIAL"} />
          <Divider
            sx={{
              bgcolor: "grey.main",
              padding: ".2px"
            }}
          />
        </Grid>
      </Grid>

    </div>
  )
}
