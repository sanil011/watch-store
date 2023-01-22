import { Typography, Stack, Divider, Grid } from "@mui/material";
import Link from "next/link";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useRouter } from "next/router";
const Header = () => {
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
                            fontSize: "10px"
                        }}>
                            GET SOCIAL:
                            <LinkedInIcon size="small" />
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
                    <Grid item sx={{ width: "72%", display: "flex", justifyContent: "center" }}>
                        <Stack direction="row" spacing={2}
                            sx={{
                                // textAlign: "center",
                                // justifyItems: "center",
                                // width: "100%"
                            }}
                        >
                            <Typography>WOMEN</Typography>
                            <Typography>MEN</Typography>
                            <Typography>KIDS</Typography>
                            <Typography>BRANDS</Typography>
                            <Typography>OFFERS</Typography>

                        </Stack>
                    </Grid>
                    <Grid item sx={{ display: "flex", width: "10%", justifyContent: "space-evenly" }}>
                        <Divider
                            orientation="vertical"
                            flexItem
                            sx={{
                                bgcolor: "grey.main",
                                padding: ".3px",
                                marginLeft: "4px"
                            }} />
                        <FavoriteBorderIcon />
                        <Typography>
                            My Favorite
                        </Typography>
                        <Typography>
                            0
                        </Typography>
                        <Divider
                            orientation="vertical"
                            flexItem
                            sx={{
                                bgcolor: "grey.main",
                                padding: ".3px",
                                marginRight: "4px"
                            }} />
                    </Grid>
                    <Grid item sx={{ display: "flex", width: "10%", justifyContent: "space-evenly" }}>
                        <LocalMallIcon />
                        <Typography>
                            My Cart
                        </Typography>
                        <Typography>
                            0
                        </Typography>

                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
export default Header;