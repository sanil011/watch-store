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
  const [isTablet, setIsTablet] = useState("");

  const [isMobile, setIsMobile] = useState("");

  useEffect(() => {
    // window
    //   .matchMedia("(max-width:992px)")
    //   .addEventListener("change", (e) => setIsTablet(e.matches));
    window
      .matchMedia("(max-width:768px)")
      .addEventListener("change", (e) => setIsTablet(e.matches));
  }, []);
  return (
    <div>

      <Swiper />
      <Box display="flex" flexDirection={{sm:"column",md:"row",xs:"column"}}  gap={{sm:"1em",md:"2em",xs:"1em"}} justifyContent="space-between" marginY="50px">
        {brand?.map((db, idx) => (
          <Stack direction={{ sm: "column", md: "row", xs: "column" }} gap={{ sm: "2em", md: "2em", xs: "2em" }} key={idx} justifyContent={"center"} alignItems={"center"}>
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


      <div style={{ display: "flex", flexDirection: `${isTablet ? "column" : "row"}`, width: "100%", minHeight: "calc(100vh - 350px)" }}>
        <div style={{ width: `${isTablet ? "100%" : "50%"}`, textAlign: "center", margin: "auto 0" }}>
          <Typography
            color={"primary.main"}
            my={2}>
            Special Offer
          </Typography>
          <Typography variant='h2' my={2} fontWeight={700}>
            WATCHES
          </Typography>
          <Typography variant='h2' fontWeight={700} display="flex" justifyContent={"center"}>
            WITH <Typography variant='h2' fontWeight={700} pl={1} color={"primary.main"}>12% OFF</Typography>
          </Typography>
          <Typography color={"grey.main"} my={2}>
            Find your perfectly suited watch and get it with a discount
          </Typography>
          <Typography variant='body2' my={5}>
            GET A DISCOUNT →
          </Typography>
        </div>
        <div style={isTablet ? { position: "relative", width: `${isTablet ? "100%" : "50%"}`, height: "600px" } : { position: "relative", width: `${isTablet ? "100%" : "50%"}` }}>
          <Image
            src={brand7}
            style={{
              width: "100%", minHeight: "100%"
            }}
            alt=""
            fill
          />
        </div>
      </div>

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
            <Box zIndex="999" position={"absolute"} marginTop={"15em"} marginLeft={"4em"}>
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

        <div style={{ width: "100%", backgroundColor: "#212121", display: "flex", flexDirection: `${isTablet ? "column" : "row"}` }}>
          <div style={{
            width: `${isTablet ? "100%" : "25%"}`, color: "#fff",
            display: "flex", alignItems: "center", justifyContent: "center", borderRight: ".3px solid grey",
            borderBottom: `${isTablet ? "1px solid grey" : "0"}`,
            padding: `${isTablet ? "1em 0" : "0"}`
          }}>
            <LocalShippingIcon fontSize={"large"} sx={{ padding: "0 10px 0 0 " }} />
            <div>
              <Typography color={"primary.main"} fontWeight={900}>
                FREE SHIPPING
              </Typography>
              <Typography>
                Don&rsquo;t pay for delivery
              </Typography>
            </div>
          </div>

          <div style={{
            width: `${isTablet ? "100%" : "25%"}`, color: "#fff",
            display: "flex", alignItems: "center", justifyContent: "center", borderRight: ".3px solid grey",
            borderBottom: `${isTablet ? "1px solid grey" : "0"}`,
            padding: `${isTablet ? "1em 0" : "0"}`
          }}>
            <CurrencyRupeeIcon fontSize={"large"} sx={{ padding: "0 10px 0 0 " }} />
            <div>
              <Typography color={"primary.main"} fontWeight={900}>
                MONEY GUARANTEE
              </Typography>
              <Typography>
                Money back option
              </Typography>
            </div>
          </div>

          <div style={{
            width: `${isTablet ? "100%" : "25%"}`, color: "#fff",
            display: "flex", alignItems: "center", justifyContent: "center", borderRight: ".3px solid grey",
            borderBottom: `${isTablet ? "1px solid grey" : "0"}`,
            padding: `${isTablet ? "1em 0" : "0"}`
          }}>
            <AdminPanelSettingsOutlinedIcon fontSize={"large"} sx={{ padding: "0 10px 0 0 " }} />
            <div>
              <Typography color={"primary.main"} fontWeight={900}>
                SAFE SHOPPING
              </Typography>
              <Typography>
                Privacy policy guarantee
              </Typography>
            </div>
          </div>

          <div style={{
            width: `${isTablet ? "100%" : "25%"}`, color: "#fff",
            display: "flex", alignItems: "center", padding: "20px 0", justifyContent: "center",
            padding: `${isTablet ? "1em 0" : "0"}`
          }}>
            <SupportAgentIcon fontSize={"large"} sx={{ padding: "0 10px 0 0 " }} />
            <div>
              <Typography color={"primary.main"} fontWeight={900} >
                ONLINE SUPPORT
              </Typography>
              <Typography>
                Consult with our suppoters
              </Typography>
            </div>
          </div>

        </div>
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
