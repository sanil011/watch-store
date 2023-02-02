import { Typography, Stack, Divider, Grid, Box, IconButton } from "@mui/material";
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
import { grey } from "@mui/material/colors";
import Sidebar from "./sidebar";
const Header = () => {
    const [isTablet, setIsTablet] = useState(
        ""
    );

    const [isMobile, setIsMobile] = useState("");
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

    useEffect(() => {
        window
            .matchMedia("(max-width:992px)")
            .addEventListener("change", (e) => setIsTablet(e.matches));
        window
            .matchMedia("(max-width:768px)")
            .addEventListener("change", (e) => setIsMobile(e.matches));
    }, []);
    return (
        <div>
            <div style={{
                padding: "5px 0",
                borderBottom: "1.2px solid gray"
            }}>
                <Grid container width={"100%"} >
                    {!isMobile && (
                        <Grid item
                            sx={{ alignItems: "center", width: `${isTablet ? "30%" : "18%"}` }}
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
                        </Grid>)}

                    {isMobile && (
                        <div style={{ borderBottom: `${isMobile && "1px solid grey"}`, borderRight: `${isMobile && "1px solid grey"}`, width: `${isMobile && "8%"}` }}>
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
                        </div>
                    )}

                    <Grid item
                        sx={{ alignItems: "center", width: `${isMobile ? "92%" : isTablet ? "40%" : "72%"}`, borderBottom: `${isMobile && "1px solid grey"}` }}
                    >
                        <Stack direction="row" sx={{ alignContent: "center", justifyContent: "center" }}
                        >
                            {!isMobile && <Divider
                                orientation="vertical"
                                flexItem
                                sx={{
                                    marginRight: "20px",
                                    bgcolor: "grey.main",
                                    padding: ".3px"
                                }}
                            />}
                            <Typography
                                fontSize={12}
                                fontWeight={400}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                }}>
                                <PhoneIphoneIcon />
                                +95 8510882843
                            </Typography>
                            {!isTablet &&
                                <Typography
                                    variant="h6"
                                    flex={1}
                                    color="primary.main"
                                    textAlign={"center"}
                                    fontWeight={600}
                                    sx={{
                                        cursor: "pointer",
                                    }}
                                >
                                    WATCHES E-SHOP
                                </Typography>}
                            {!isMobile &&
                                <Typography>
                                    Login / Register
                                </Typography>}
                            {!isMobile && <Divider
                                orientation="vertical"
                                flexItem
                                sx={{
                                    bgcolor: "grey.main",
                                    marginLeft: "20px",
                                    padding: ".3px"
                                }}
                            />}
                        </Stack>

                    </Grid>

                    {!isMobile && <Grid item
                        sx={{ width: `${isTablet ? "30%" : "10%"}` }}
                    >
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-evenly",
                            color: "grey",
                            flexWrap: "wrap",
                            fontSize: "0.6rem"
                        }}>
                            GET SOCIAL:
                            <LinkedInIcon />
                            <InstagramIcon />
                            <TwitterIcon />
                        </div>
                    </Grid>}
                </Grid>
                {isMobile &&
                    <Box display={"flex"} justifyContent={"space-around"} sx={{ borderBottom: `${isMobile && "1px solid grey"}` }}>
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
                    </Box>}
                {isTablet && (
                    <Typography
                        variant="h6"
                        color="primary.main"
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
                )}
            </div>
            <div style={{ borderBottom: "1.3px solid grey", padding: `${isMobile ? "0 0" : "10px 0"}` }}>
                <Grid container>
                    <Grid item sx={{
                        width: `${isMobile ? "30%" : "8%"}`, display: "flex", justifyContent: "space-around", alignItems: "center",
                        padding: `${isMobile ? "4px 0" : "0em 0em"}`
                    }}>
                        <SearchIcon />
                        <Typography fontSize={`${isMobile && "12px"}`} fontWeight={`${isMobile ? 600 : 500}`} >
                            Search
                        </Typography>
                        <Divider orientation="vertical" flexItem
                            sx={{
                                bgcolor: "grey.main",
                                padding: ".3px"
                            }} />
                    </Grid>

                    <Grid item sx={{ width: `${isMobile ? "70%" : "70%"}`, display: "flex", justifyContent: "center", alignContent: "center", padding: `${isMobile ? "4px 0" : "0em 0em"}` }}>
                        <Stack direction="row" spacing={2}
                        >
                            <Link href='/shop' sx={{ textDecoration: "none" }}>
                                <Typography color="#000000" fontSize={`${isMobile && "12px"}`} fontWeight={`${isMobile && 600}`} >WOMEN</Typography>
                            </Link>
                            <Link href='/shop'>
                                <Typography fontSize={`${isMobile && "12px"}`} fontWeight={`${isMobile && 600}`} color="#000000">MEN</Typography>
                            </Link>
                            <Link href='/shop'>
                                <Typography fontSize={`${isMobile && "12px"}`} fontWeight={`${isMobile && 600}`} color="#000000">KIDS</Typography>
                            </Link>
                            <Link href='/shop'>
                                <Typography fontSize={`${isMobile && "12px"}`} fontWeight={`${isMobile && 600}`} color="#000000">BRANDS</Typography>
                            </Link>
                            <Link href='/shop'>
                                <Typography fontSize={`${isMobile && "12px"}`} fontWeight={`${isMobile && 600}`} color="#000000">OFFERS</Typography>
                            </Link>
                        </Stack>
                    </Grid>
                    {!isMobile && <Grid item sx={{ display: "flex", width: "12%", justifyContent: "space-evenly" }}>
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
                    </Grid>}

                    {!isMobile && <Grid item onClick={() =>
                        setSideBar(
                            (prev) =>
                            (prev = {
                                open: true,
                                side: "right",
                            })
                        )
                    } sx={{ display: "flex", width: "10%", justifyContent: "space-evenly" }}>
                        <LocalMallIcon />
                        <Typography variant="body2" fontWeight={600}>
                            My Cart
                        </Typography>
                        <Typography variant="body2" color={"grey.main"} fontWeight={600}>
                            {cartValue.length}
                        </Typography>
                    </Grid>}

                    {isMobile &&
                        <Box display={"flex"} justifyContent={"space-around"} sx={{ width: "100%", borderTop: "1px solid grey", }} >
                            <Box item sx={{ display: "flex", justifyContent: "space-evenly", padding: "4px 0" }}>
                                <Link href="/favorite" >
                                    <Box sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                                        <Box color={"grey.main"} sx={{ margin: "0 10px" }}>
                                            <FavoriteBorderIcon />
                                        </Box>
                                        <Typography fontSize={`${isMobile && "12px"}`} variant="body2" color="#000000" fontWeight={600}>
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
                            } sx={{ display: "flex", justifyContent: "space-around", padding: "4px 0", alignItems: "center", gap: ".5em" }}>
                                <LocalMallIcon />
                                <Typography fontSize={`${isMobile && "12px"}`} variant="body2" fontWeight={600}>
                                    My Cart
                                </Typography>
                                <Typography variant="body2" color={"grey.main"} fontWeight={600}>
                                    {cartValue.length}
                                </Typography>
                            </Box>
                        </Box>
                    }
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