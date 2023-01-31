import { Typography, Stack, Divider, Grid, Box } from "@mui/material";
import Link from "next/link";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
const Header = () => {
    const { cartValue } = useSelector((state) => state.cart)
    const { favoriteValue } = useSelector((state) => state.favorite)
    const router = useRouter();
    return (
        <div>
            <div style={{
                padding: "5px 0",
                borderBottom: "1.2px solid gray"
            }}>
                <Grid container width={"100%"} >
                    <Grid item
                        sx={{ alignItems: "center", width: "18%" }}
                    >
                        <Stack direction="row"
                            spacing={1}
                            sx={{ fontWeight: 'medium' }}>
                            <Link href="/" color="grey.main" textDecoration={"none"} >
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

                    <Grid item
                        sx={{ alignItems: "center", width: "72%" }}
                    >
                        <Stack direction="row" sx={{ alignContent: "center" }}
                        >
                            <Divider
                                orientation="vertical"
                                flexItem
                                sx={{
                                    marginRight: "20px",
                                    bgcolor: "grey.main",
                                    padding: ".3px"
                                }}

                            />
                            <Typography
                                fontSize={12}
                                fontWeight={400}
                                sx={{ display: "flex", alignItems: "center" }}>
                                <PhoneIphoneIcon />
                                +95 8510882843
                            </Typography>
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
                            </Typography>
                            <Typography>
                                Login / Register
                            </Typography>
                            <Divider
                                orientation="vertical"
                                flexItem
                                sx={{
                                    bgcolor: "grey.main",
                                    marginLeft: "20px",
                                    padding: ".3px"
                                }}
                            />
                        </Stack>

                    </Grid>
                    <Grid item
                        sx={{ width: "10%" }}
                    >
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-evenly",
                            color: "grey",
                            fontSize: "0.6rem"
                        }}>
                            GET SOCIAL:
                            <LinkedInIcon />
                            <InstagramIcon />
                            <TwitterIcon />
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div style={{ borderBottom: "1.3px solid grey", padding: "10px 0" }}>
                <Grid container>
                    <Grid item sx={{ width: "8%", display: "flex", justifyContent: "space-around" }}>
                        <SearchIcon />
                        <Typography fontWeight={500}>
                            Search
                        </Typography>
                        <Divider orientation="vertical" flexItem
                            sx={{
                                bgcolor: "grey.main",
                                padding: ".3px"
                            }} />
                    </Grid>
                    <Grid item sx={{ width: "70%", display: "flex", justifyContent: "center" }}>
                        <Stack direction="row" spacing={2}
                            sx={{
                                // textAlign: "center",
                                // justifyItems: "center",
                                // width: "100%"
                            }}
                        >
                            <Link href='/shop' sx={{ textDecoration: "none" }}>
                                <Typography color="#000000">WOMEN</Typography>
                            </Link>
                            <Link href='/shop'>
                                <Typography color="#000000">MEN</Typography>
                            </Link>
                            <Link href='/shop'>
                                <Typography color="#000000">KIDS</Typography>
                            </Link>
                            <Link href='/shop'>
                                <Typography color="#000000">BRANDS</Typography>
                            </Link>
                            <Link href='/shop'>
                                <Typography color="#000000">OFFERS</Typography>
                            </Link>
                        </Stack>
                    </Grid>
                    <Grid item sx={{ display: "flex", width: "12%", justifyContent: "space-evenly" }}>
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
                    <Grid item sx={{ display: "flex", width: "10%", justifyContent: "space-evenly" }}>
                        <LocalMallIcon />
                        <Typography variant="body2" fontWeight={600}>
                            My Cart
                        </Typography>
                        <Typography variant="body2" color={"grey.main"} fontWeight={600}>
                            {cartValue.length}
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
export default Header;