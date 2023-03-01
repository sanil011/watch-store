import { Typography, Stack, Divider, Grid, Box, IconButton, Backdrop, TextField } from "@mui/material";
import Link from "next/link";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import { grey } from "@mui/material/colors";
import Sidebar from "./sidebar";
const Header = () => {
    

   
    const [isSearching, setIsSearching] = useState(false);
    const { cartValue } = useSelector((state) => state.cart)
    const { favoriteValue } = useSelector((state) => state.favorite)
    const router = useRouter();
    const [sideBar, setSideBar] = useState({
        open: false,
        side: "left",
    });

    const sideBarHandler = () =>
        setSideBar(
            (prev) =>
            (prev = {
                open: false,
                side: "top",
            })
        );

    const handleToggle = () => setIsSearching((prev) => !prev);

  
    return (
        <div>
            <div style={{
                padding: "5px 0",
                borderBottom: "1.2px solid gray"
            }}>
                <Grid container width={"100%"}  justifyContent={"space-between"} borderBottom={{sm:"1px solid grey",md:"none"}}>
                    
                    <Grid item
                        display={{ xs: "none", md: "flex", }} 
                        width={{md:"20%",sm:"18%"}}
                            sx={{ alignItems: "center" }}
                        >
                            <Stack direction="row"
                                spacing={1}
                                sx={{ fontWeight: 'medium', flexWrap: "wrap" }}>
                                <Link href="/" color="grey.main" sx={{ textDecoration: "none" }} >
                                    <Typography color={router.pathname == "/" ? "primary.main" : "grey.main"} fontWeight={600}
                                        fontSize={12}>HOME</Typography>
                                </Link>
                                <Link href="/about" >
                                    <Typography color={router.pathname == "/about" ? "primary.main" : "grey.main"} fontWeight={600}
                                        fontSize={12}>ABOUT</Typography>
                                </Link>
                                <Link href="/delivery">
                                    <Typography color={router.pathname == "/delivery" ? "primary.main" : "grey.main"} fontWeight={600}
                                        fontSize={12}>DELIVERY</Typography>
                                </Link>
                                <Link href="/contacts">
                                    <Typography color={router.pathname == "/contacts" ? "primary.main" : "grey.main"} fontWeight={600}
                                        fontSize={12}>CONTACTS</Typography>
                                </Link>
                            </Stack>
                        </Grid>

                  
                    <Grid item display={{ md: "none" }}
                        sx={{  borderRight: "1px solid grey", width: "10%" }}>
                            <IconButton
                                sx={{}}
                                onClick={() =>
                                    setSideBar(
                                        (prev) =>
                                        (prev = {
                                            open: true,
                                            side: "left",
                                        })
                                    )
                                }
                            >
                                <MenuIcon />
                            </IconButton>
                        </Grid>
                    

                    <Grid item
                        width={{ md: "65%", sm: "60%", xs: "90%" }}
                        // borderBottom={{ md: "none", xs:"1px solid grey"}}
                        sx={{ alignItems: "center" }}
                    >
                        <Stack direction="row" sx={{ alignContent: "center" }} justifyContent={{sm:"space-around",xs:"center",md:"center"}}
                        >
                             <Divider 
                                orientation="vertical"
                                flexItem
                                sx={{
                                    marginRight: "20px",
                                    bgcolor: "grey.main",
                                    padding: ".3px",
                                    display:{xs:"none",md:"block"}
                                }}
                            />
                            <Typography
                                fontSize={12}
                                fontWeight={400}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                }}>
                                <PhoneIphoneIcon />
                                +95 8510881234
                            </Typography>
                       
                            <Typography
                                display={{xs:"none",md:"flex"}}
                                    variant="h6"
                                    flex={1}
                                    color="primary.main"
                                justifyContent={"center"}
                                    fontWeight={600}
                                    sx={{
                                        cursor: "pointer",
                                    }}
                                >
                                    WATCHES E-SHOP
                                </Typography>
                    
                                <Typography display={{xs:"none",sm:"flex"}}>
                                    Login / Register
                                </Typography>
                            <Divider
                                
                                orientation="vertical"
                                flexItem
                                sx={{
                                    bgcolor: "grey.main",
                                    marginLeft: "20px",
                                    padding: ".3px",
                                    display: { xs: "none", md: "block" }
                                }}
                            />
                        </Stack>

                    </Grid>

                    <Grid item
                        display={{ xs: "none",sm:"flex" }}
                        width={{ md: "15%", xs: "30%", sm: "30%" }}
                        borderLeft={{ sm: "1px solid grey", md: "none" }}
                        sx={{ textAlign: "right" }}
                        justifyContent={"right"}
                        // sx={{ width: `${isTablet ? "30%" : "10%"}` }}
                    >
                        <Box sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-evenly",
                            color: "grey",
                            flexWrap: "wrap",
                            fontSize: "0.6rem",
                            textAlign:"right"
                        }} >
                            GET SOCIAL:
                            <LinkedInIcon />
                            <InstagramIcon />
                            <TwitterIcon />
                        </Box>
                    </Grid>
                </Grid>
             
                <Box display={{ xs: "flex", sm: "none" }} justifyContent={"space-around"}
                    borderBottom={{ xs: "1px solid grey" }}>
                        <Typography py={2}>
                            Login / Register
                        </Typography>
                        <Divider orientation="vertical" flexItem
                            sx={{
                                // color: "grey.main",
                                padding: ".9px"
                            }} />
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-evenly",
                            color: "grey",
                            flexWrap: "wrap",
                            fontSize: "0.6rem",
                            padding: "2em 0"
                        }}>
                            GET SOCIAL:
                            <LinkedInIcon />
                            <InstagramIcon />
                            <TwitterIcon />
                        </div>
                    </Box>
               
                    <Typography
                        variant="h6"
                        color="primary.main"
                        display={{md:"none"}}
                        textAlign={"center"}
                        // borderBottom={1}
                        fontWeight={600}
                        py={"0.5rem"}
                        sx={{
                            cursor: "pointer",
                        }}
                    >
                        WATCHES E-SHOP 
                    </Typography>
            </div>
            <Backdrop
                open={isSearching}
                sx={{
                    justifyContent: "start",
                    rowGap: "10rem",
                    backgroundColor: "#1e2123eb",
                    zIndex: "tooltip",
                    flexDirection: "column",
                    "& .MuiInput-root": {
                        color: "white.main",
                    },
                    "& .MuiInputBase-root.MuiInput-root:before": {
                        border: "none !important",
                    },
                    "& .MuiInputBase-root.MuiInput-root:after": {
                        border: "none !important",
                    },
                }}
            >
                <Stack
                    width={"100%"}
                    direction="row"
                    justifyContent="end"
                    mt={{
                        md: "2rem",
                        sm: "3rem",
                        xs: "1rem",
                    }}
                >
                    <CloseIcon
                        sx={{
                            cursor: "pointer",
                            color: "#fff !important",
                            fontSize: "2rem !important",
                            mr: {
                                md: "8rem",
                                sm: "3rem",
                                xs: "1rem",
                            },
                        }}
                        onClick={handleToggle}
                    />
                </Stack>
                <Typography variant={"h4"} color={"#fff"} fontWeight={700} mt={15}>
                    SEARCH
                </Typography>
                <Stack
                    direction="row"
                    borderBottom={1}
                    borderColor={"#fbfbfb !important"}
                    width={{
                        md: "60%",
                        sm: "80%",
                        xs: "90%",
                    }}
                    justifyContent="space-between"
                >
                    <TextField
                        sx={{ width: "100%" }}
                        color={"white"}
                        variant="standard"
                        placeholder="what are you looking for?"
                    />
                    <SearchIcon
                        sx={{ cursor: "pointer", color: "#fff !important" }}
                    />
                </Stack>
            </Backdrop>


            <div style={{ borderBottom: "1.3px solid grey" }}>
                <Grid container>
                    <Grid item
                        md={2}
                        width={{ xs: "30%", sm: "8%"}}
                        padding={{ xs:"4px 0",sm:"0"}}
                        sx={{
                        display: "flex", justifyContent: "space-around",
                        alignItems: "center", cursor: "pointer",
                    }}
                        onClick={handleToggle}
                    >
                        <SearchIcon />
                        <Typography fontSize={{ xs: "12px", sm: "16px" }} fontWeight={{xs:"600", md:"500"}} >
                            Search
                        </Typography>
                        <Divider orientation="vertical" flexItem
                            sx={{
                                bgcolor: "grey.main",
                                padding: ".3px"
                            }} />
                    </Grid>

                    <Grid item md={6} width={{ xs: "70%"}} padding={{ xs: "4px 0", sm: "0" }} sx={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
                        <Stack direction="row" spacing={2}
                        >
                            <Link href='/shop' sx={{ textDecoration: "none" }}>
                                <Typography color="#000000" fontSize={{ xs: "12px", sm: "16px" }} fontWeight={{ xs: 600}} >WOMEN</Typography>
                            </Link>
                            <Link href='/shop'>
                                <Typography fontSize={{ xs: "12px",sm:"16px" }} fontWeight={{ xs: 600 }} color="#000000">MEN</Typography>
                            </Link>
                            <Link href='/shop'>
                                <Typography fontSize={{ xs: "12px", sm: "16px" }} color="#000000">KIDS</Typography>
                            </Link>
                            <Link href='/shop'>
                                <Typography fontSize={{ xs: "12px", sm: "16px" }} color="#000000">BRANDS</Typography>
                            </Link>
                            <Link href='/shop'>
                                <Typography fontSize={{ xs: "12px", sm: "16px" }} color="#000000">OFFERS</Typography>
                            </Link>
                        </Stack>
                    </Grid>
                    <Grid item md={2} display={{ sm: "flex", xs: "none" }} justifyContent={"space-evenly"}
                        width={{  sm: "12%" }} >
                        <Link href="/favorite" >
                            <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
                                <Divider
                                    orientation="vertical"
                                    flexItem
                                    sx={{
                                        bgcolor: "grey.main",
                                        padding: ".3px",
                                        marginLeft: "0px"
                                    }} />
                                <Box color={"grey.main"} sx={{ margin: "0 10px" }}>
                                    <FavoriteBorderIcon />
                                </Box>
                                <Typography variant="body2" color="#000000" fontWeight={600}>
                                    My Favorite
                                </Typography>
                                <Typography variant="body2" color={"grey.main"} fontWeight={600} sx={{ margin: "0 10px" }}>
                                    {favoriteValue.length}
                                </Typography>
                                <Divider
                                    orientation="vertical"
                                    flexItem
                                    sx={{
                                        bgcolor: "grey.main",
                                        padding: ".3px",
                                        marginRight: "0px"
                                    }} />
                            </Box>
                        </Link>
                    </Grid>

                    <Grid item md={2} display={{xs:"none",sm:"flex"}}  onClick={() =>
                        setSideBar(
                            (prev) =>
                            (prev = {
                                open: true,
                                side: "right",
                            })
                        )
                    }
                        width={{sm:"10%"}}
                        sx={{ cursor: "pointer", justifyContent: "space-evenly" }}>
                        <LocalMallIcon />
                        <Typography variant="body2" fontWeight={600}>
                            My Cart  
                        </Typography>
                        <Typography variant="body2" color={"grey.main"} fontWeight={600}>
                            {cartValue.length}
                        </Typography>
                    </Grid>

                    
                        <Box display={{sm:"none"}}  justifyContent={"space-around"} sx={{ width: "100%", borderTop: "1px solid grey", }} >
                            <Box item sx={{ display: "flex", justifyContent: "space-evenly", padding: "4px 0" }}>
                                <Link href="/favorite" >
                                    <Box sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                                        <Box color={"grey.main"} sx={{ margin: "0 10px" }}>
                                            <FavoriteBorderIcon />
                                        </Box>
                                        <Typography fontSize={{xs: "12px"}} variant="body2" color="#000000" fontWeight={600}>
                                            My Favorite
                                        </Typography>
                                        <Typography variant="body2" color={"grey.main"} fontWeight={600} sx={{ margin: "0 10px" }}>
                                            {favoriteValue.length}
                                        </Typography>
                                    </Box>
                                </Link>
                            </Box>
                            <Divider
                                orientation="vertical"
                                flexItem
                                sx={{
                                    bgcolor: "grey.main",
                                    padding: ".3px",
                                    marginRight: "0px"
                                }} />
                            <Box item onClick={() =>
                                setSideBar(
                                    (prev) =>
                                    (prev = {
                                        open: true,
                                        side: "right",
                                    })
                                )
                            } sx={{ display: "flex", cursor: "pointer", justifyContent: "center", padding: "4px 0", alignItems: "center", gap: ".5em" }}>
                                <LocalMallIcon />
                            <Typography fontSize={{ xs: "12px", sm: "16px" }} variant="body2" fontWeight={600}>
                                    My Cart
                                </Typography>
                                <Typography variant="body2" color={"grey.main"} fontWeight={600}>
                                    {cartValue.length}
                                </Typography>
                            </Box>
                        </Box>
                    
                </Grid>
            </div>
            <Sidebar
                open={sideBar.open}
                close={sideBarHandler}
                anchor={sideBar.side}
            />
        </div>
    )
}
export default Header;