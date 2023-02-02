import { Box, Typography, Stack, Button, Tabs, Tab, Grid, Divider } from "@mui/material";
import { Watches } from '../store/watches';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import DescriptionTab from "../component/Tab/tab1"
import InfoTab from "../component/Tab/tab2"
import Product from "@/component/product";
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from "@/store/cartSlice";
import { favoriteActions } from "@/store/favoriteSlice";
import { useState, Fragment } from "react"
import CheckIcon from "@mui/icons-material/Check";
const Detail = () => {
    const { Detail } = useSelector((state) => state.filter);
    const item = Detail && Watches[Detail.name]["src"];
    const item1 = Watches[Detail.name];
    const [nav1, setNav1] = useState(999);
    const [activeTab, setActiveTab] = useState("description");

    const handleChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    const { cartValue } = useSelector((state) => state.cart);
    const { favoriteValue } = useSelector((state) => state.favorite);
    const isInCart = cartValue.indexOf(Detail.name) !== -1;
    const isInFavorites = favoriteValue.indexOf(Detail.name) !== -1;
    const dispatch = useDispatch();
    const [show, setShow] = useState(false)
    const handleClick = () => {
        dispatch(filterActions.detail(Detail));
        router.push('/detail');
    }

    const handleClickCart = () => {
        dispatch(cartActions.cart({ name: Detail.name, price: +item1?.price }))
    }
    const handleClickFavorite = () => {
        dispatch(favoriteActions.favorite(Detail))
    }
    return (
        <div >
            <Grid container >
                <Grid item xs={12} sm={6} md={6}>
                    <div style={{ width: "60%", height: "calc(100vh - 150px)", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        {item && item?.map((db, idx) => (
                            <div key={idx} style={{ width: "35%", height: "100px", marginBottom: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <img src={db} onMouseOver={() => setNav1(idx)} value={idx} style={{ width: "80%", height: "100%", objectFit: "contain" }} />
                                <img src={db} style={{ display: `${nav1 === 999 ? "flex" : nav1 === idx ? "flex" : "none"}`, top: "0", left: "35%", width: "100%", position: "absolute", height: "100%", objectFit: "cover" }} />
                            </div>
                        ))}
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={6} mt={14} p={2}>
                    <Typography variant="h4" my={1} fontWeight={600}>{Detail.name}</Typography>
                    <Typography variant="h6" my={1} fontWeight={600} color="primary.main">{item1?.price} ₹</Typography>
                    <Typography fontWeight={600} my={1} color="grey.main">SKU: N/A</Typography>
                    <Typography display={"flex"} my={1} fontWeight={600} color="grey.main">CATEGORIES: {item1?.categories?.map((db, idx) => <Typography key={idx} fontWeight={600} color="grey.main" display={"flex"} >&nbsp;{db}</Typography>)}</Typography>
                    <Typography display={"flex"} my={1} fontWeight={600} color="grey.main">TAGS: {item1?.tags?.map((db, idx) => <Typography fontWeight={600} color="grey.main" display={"flex"} key={idx}>&nbsp;{db}</Typography>)}</Typography>
                    <Typography fontWeight={400} mt={4} mb={10} color="grey.main">{item1?.description}</Typography>
                    <Stack direction={"row"} gap={"3em"}>
                        <Button
                            variant='text'
                            disableRipple
                            sx={{
                                borderRadius: "0",
                                border: "1px solid #000000",
                                px: 2,
                                whiteSpace: "nowrap",
                                "&:hover": {
                                    color: "#fff",
                                    backgroundColor: "secondary.main",
                                },
                            }}
                            onClick={() => handleClickCart()}
                        >

                            {!isInCart && (
                                <Fragment>
                                    <ShoppingCartOutlinedIcon
                                        sx={{ fontSize: { md: "1.5rem", sm: "1rem", xs: "1.5rem" } }}
                                    />
                                    ADD TO CART
                                </Fragment>
                            )}
                            {isInCart && (
                                <Fragment>
                                    <CheckIcon
                                        sx={{ fontSize: { md: "1.5rem", sm: "1rem", xs: "1.5rem" } }}
                                    />
                                    ADDED
                                </Fragment>
                            )}

                        </Button>
                        <Button
                            variant='text'
                            disableRipple
                            sx={{
                                borderRadius: "0",
                                border: "1px solid #000000",
                                px: 2,
                                whiteSpace: "nowrap",
                                "&:hover": {
                                    color: "#fff",
                                    backgroundColor: "secondary.main",
                                },
                            }}
                            onClick={() => handleClickFavorite()}
                        >

                            <FavoriteBorderOutlinedIcon
                            />
                        </Button></Stack>
                </Grid>
            </Grid>



            <Tabs value={activeTab} onChange={handleChange} centered aria-label="basic tabs example">
                <Tab value="description" color="grey.main" label="DESCRIPTION" />
                <Tab value="info" color="grey.main" label="ADDITIONAL INFORMATION" />
                <Tab value="reviews" color="grey.main" label="REVIEW(1)" />
            </Tabs>
            {activeTab === "description" && <DescriptionTab />}
            {activeTab === "info" && (
                <InfoTab
                    brand={Watches[Detail.name]["brand"]}
                    manufacturer={Watches[Detail.name]["Manufacturer"]}
                    display={Watches[Detail.name]["Display"]}
                    color={Watches[Detail.name]["color"]}
                    strapMaterial={Watches[Detail.name]["Strap Material"]}
                    waterResistance={Watches[Detail.name]["Water Resistance"]}
                    movement={Watches[Detail.name]["Movement"]}
                    alarmClock={Watches[Detail.name]["Alarm Clock"]}
                />
            )}
            {/* {activeTab === "reviews" && <ReviewsTab name={item.toLowerCase()} />}  */}

            <Box>
                <Typography variant='h4' fontWeight={400} textAlign={"center"} sx={{ margin: "30px 0" }}>
                    RECOMMENDED WATCHES
                </Typography>

                <Grid container>
                    <Grid item xs={12} sm={6} md={3}>
                        <Product name="THE RUNWELL SPORT CHRONO SILVER" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Product name={"DAPPER ROUND ANALOG"} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Product name={"ROUND ANALOG WHITE & BEE DIAL LADIES"} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Product name={"ROUND ANALOG WHITE DIAL LADIES"} />
                    </Grid>
                </Grid>

            </Box>
        </div>
    )
}

export default Detail
