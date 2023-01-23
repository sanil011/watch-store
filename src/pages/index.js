import Head from 'next/head'
import Image from 'next/image'
import { Typography, Divider, Box, Stack, Button } from "@mui/material";
import Slider from "../component/slider";
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
      {/* <Slider /> */}
      <Box display="flex" justifyContent="space-between" marginY="50px">
        {brand?.map((db, idx) => (
          <Stack key={idx} justifyContent={"center"} alignItems={"center"}>
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

      <div style={{ display: "flex" }}>
        <Product name="BOLD ROUND ANALOG GUNMETAL DIAL" />

        <Product name={"DAPPER ROUND ANALOG"} />

        <Product name={"ROUND ANALOG WHITE & BEE DIAL LADIES"} />

        <Product name={"ROUND ANALOG WHITE DIAL LADIES"} />
      </div>

      <div style={{ display: "flex", width: "100%", height: "calc(100vh - 150px)" }}>
        <div style={{ width: "50%", textAlign: "center", margin: "auto 0" }}>
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
        <div style={{ position: "relative", width: "50%" }}>
          <Image
            src={brand7}
            style={{ width: "100%", minHeight: "100%" }}
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
        <div style={{ display: "flex", width: "100%", height: "calc(100vh - 350px)" }}>

          <div style={{ position: "relative", width: "50%", borderRight: ".8px solid grey" }}>
            <Box zIndex="999" position={"absolute"} marginLeft={"35em"} marginTop={"15em"}>
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
          </div>

          <div style={{ position: "relative", width: "50%" }}>
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
          </div>
        </div>

        {/* SERVICES */}
        <div style={{ width: "100%", backgroundColor: "#212121", display: "flex" }}>
          <div style={{
            width: "25%", color: "#fff",
            display: "flex", alignItems: "center", justifyContent: "center", borderRight: ".3px solid grey"
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
            width: "25%", color: "#fff",
            display: "flex", alignItems: "center", justifyContent: "center", borderRight: ".3px solid grey"
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
            width: "25%", color: "#fff",
            display: "flex", alignItems: "center", justifyContent: "center", borderRight: ".3px solid grey"
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
            width: "25%", color: "#fff",
            display: "flex", alignItems: "center", padding: "20px 0", justifyContent: "center"
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


      <div style={{ display: "flex" }}>
        <Product name={"ROUND ANALOG WHITE & BEE DIAL LADIES"} />
        <Divider
          sx={{
            bgcolor: "grey.main",
            padding: ".3px"
          }}
        />
        <Product name={"THE RUNWELL SPORT CHRONO"} />
        <Divider
          sx={{
            bgcolor: "grey.main",
            padding: ".3px"
          }}
        />
        <Product name={"TATUM ROUND ANALOG BLUE DIAL LADIES"} />
        <Divider
          sx={{
            bgcolor: "grey.main",
            padding: ".3px"
          }}
        />
        <Product name={"BOLD ROUND ANALOG GUNMETAL DIAL"} />
      </div>


    </div>
  )
}
