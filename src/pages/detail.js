import { Box, Typography, Stack, Button, Tabs, Tab } from "@mui/material";
import { Watches } from '../store/watches';
import { useSelector, useDispatch } from 'react-redux';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import DescriptionTab from "../component/Tab/tab1"
import InfoTab from "../component/Tab/tab2"
import Product from "@/component/product";
import { useState } from "react"
const Detail = () => {
    const { Detail } = useSelector((state) => state.filter);
    const item = Watches[Detail.name]["src"];
    const item1 = Watches[Detail.name];
    const [nav1, setNav1] = useState(999);
    const [activeTab, setActiveTab] = useState("description");

    const handleChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    return (
        <div >
            <div style={{ display: "flex", margin: "0 4em" }}>
                <Box sx={{ width: "50%", }}>
                    <div style={{ width: "60%", height: "calc(100vh - 150px)", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        {item && item?.map((db, idx) => (
                            <div key={idx} style={{ width: "35%", height: "100px", marginBottom: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <img src={db} onMouseOver={() => setNav1(idx)} value={idx} style={{ width: "80%", height: "100%", objectFit: "contain" }} />
                                <img src={db} style={{ display: `${nav1 === 999 ? "flex" : nav1 === idx ? "flex" : "none"}`, top: "0", left: "35%", width: "100%", position: "absolute", height: "100%", objectFit: "cover" }} />
                            </div>
                        ))}
                    </div>
                </Box>
                <Box sx={{ width: "50%", }} mt={14}>
                    <Typography variant="h4" my={1} fontWeight={600}>BOLD ROUND ANALOG GUNMETAL DIAL</Typography>
                    <Typography variant="h6" my={1} fontWeight={600} color="primary.main">{item1.price} ₹</Typography>
                    <Typography fontWeight={600} my={1} color="grey.main">SKU: N/A</Typography>
                    <Typography display={"flex"} my={1} fontWeight={600} color="grey.main">CATEGORIES: {item1?.categories?.map((db) => <Typography fontWeight={600} color="grey.main" display={"flex"} >&nbsp;{db}</Typography>)}</Typography>
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
                        >

                            <ShoppingCartOutlinedIcon
                            />
                            ADD TO CART

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
                        >

                            <FavoriteBorderOutlinedIcon
                            />
                        </Button></Stack>
                </Box>
            </div>



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

                <div style={{ display: "flex" }}>
                    <Product name="THE RUNWELL SPORT CHRONO SILVER" />

                    <Product name={"DAPPER ROUND ANALOG"} />

                    <Product name={"ROUND ANALOG WHITE & BEE DIAL LADIES"} />

                    <Product name={"ROUND ANALOG WHITE DIAL LADIES"} />
                </div>
            </Box>
        </div>
    )
}

export default Detail
            // <Box>
            //     <Box display={"flex"}>
            //         <Box sx={{ position: "relative", width: "50%", border: "1px solid grey" }}>
            //             <img src={item[0]} style={{ objectFit: "contain", width: "90%", }} />
            //         </Box>
            //         <Box sx={{ width: "50%", padding: "5em 3em" }}>
            //             <Typography fontWeight={600}>DESCRIPTION</Typography>
            //             <Typography my={1} color="grey.main" variant="body2">{item1?.description}</Typography>
            //         </Box>
            //     </Box>
            // </Box>