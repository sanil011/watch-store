import React from 'react'
import Image from 'next/image';
import About1 from "../assets/about-1.jpg";
import About2 from "../assets/about-2.jpg";
import { Typography, List, Grid, Box, ListItem, ListItemText } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const About = () => {
    return (
        <Grid container p={1} gap={{ xs: 1, sm: 0, md: 0 }} sx={{ justifyContent: "space-between", }}>
            <Grid item xs={12} sm={12} md={6} flexDirection={"column"} rowGap={5}>
                <div style={{ overflow: "hidden", paddingRight: "10px", textAlign: "center" }}>
                    <Image src={About1} sx={{
                        width: "100%",
                        height: "100%",

                    }} alt="about1" />
                </div>

                <Typography py={2} variant='h4' fontWeight={600} lineHeight={2}>
                    BACKGROUND
                </Typography>
                <Typography variant="subtitle1" color="grey.main" fontWeight={600}>
                    Watrix is a family-owned business with over 50 years of experience
                    in the luxury watch and jewelry industry.
                </Typography>
                <List>
                    <ListItem
                        disablePadding
                        sx={{
                            pl: "0.7rem",
                            mb: "0.3rem",
                        }}
                    >
                        <FiberManualRecordIcon
                            sx={{
                                color: "grey.main",
                                fontSize: "0.6rem",
                            }}
                        />

                        <ListItemText
                            disableTypography
                            sx={{
                                fontWeight: "600",
                                color: "grey.main",
                                pl: "0.5rem",
                            }}
                        >
                            Wide range of goods
                        </ListItemText>
                    </ListItem>
                    <ListItem
                        disablePadding
                        sx={{
                            pl: "0.7rem",
                            mb: "0.3rem",
                        }}
                    >
                        <FiberManualRecordIcon
                            sx={{
                                color: "grey.main",
                                fontSize: "0.6rem",
                            }}
                        />

                        <ListItemText
                            disableTypography
                            sx={{
                                color: "grey.main",
                                pl: "0.5rem",
                                fontWeight: "600",
                            }}
                        >
                            Affordable prices
                        </ListItemText>
                    </ListItem>
                    <ListItem
                        disablePadding
                        sx={{
                            pl: "0.7rem",
                            mb: "0.3rem",
                        }}
                    >
                        <FiberManualRecordIcon
                            sx={{
                                color: "grey.main",
                                fontSize: "0.6rem",
                            }}
                        />

                        <ListItemText
                            disableTypography
                            sx={{
                                color: "grey.main",
                                pl: "0.5rem",
                                fontWeight: "600",
                            }}
                        >
                            New items every week
                        </ListItemText>
                    </ListItem>
                    <ListItem
                        disablePadding
                        sx={{
                            pl: "0.7rem",
                        }}
                    >
                        <FiberManualRecordIcon
                            sx={{
                                color: "grey.main",
                                fontSize: "0.6rem",
                            }}
                        />

                        <ListItemText
                            disableTypography
                            sx={{
                                color: "grey.main",
                                pl: "0.5rem",
                                fontWeight: "600",
                            }}
                        >
                            Proven quality
                        </ListItemText>
                    </ListItem>
                </List>
            </Grid>
            <Grid item xs={12} sm={12} md={6} position={"relative"} >
                <div style={{ position: "relative", minHeight: "400px", overflow: "hidden", textAlign: "center" }}>
                    <Image src={About2} sx={{
                        maxWidth: "100%",
                        minHeight: "100%",
                    }} alt="about1" />
                </div>
                <Typography variant="h4" py={3.5} color="secondary.main" fontWeight={700}>
                    BE STYLISH!
                </Typography>
                <Typography variant="subtitle1" color="grey.main" fontWeight={600}>
                    At Watrix we’re also passionate about offering our customers the
                    very best prices on popular brand-name watches. We directly source
                    top watches from around the globe.
                </Typography>



                <Typography
                    variant="h6"
                    fontSize={"1.05rem"}
                    color={"primary.main"}
                    fontWeight={600}
                >
                    Address:
                </Typography>
                <Typography variant="body1" color={"grey.main"} fontWeight={600}>
                    Sukhrali, M.G. Road
                    Gurgaon - 122001
                </Typography>

                <Typography
                    variant="h6"
                    fontSize={"1.05rem"}
                    color={"primary.main"}
                    fontWeight={600}
                >
                    Phone:
                </Typography>
                <Typography
                    variant="body1"
                    fontWeight={600}
                    color={"grey.main"}
                >
                    +95 8510882843
                </Typography>
                <Typography
                    variant="h6"
                    fontSize={"1.05rem"}
                    color={"primary.main"}
                    fontWeight={600}
                >
                    Hours:
                </Typography>
                <Typography variant="body1" color={"grey.main"} fontWeight={600}>
                    ALL WEEK FROM 9 AM TO 9 PM
                </Typography>
                <Typography
                    variant="h6"
                    fontSize={"1.05rem"}
                    color={"primary.main"}
                    fontWeight={600}
                    whiteSpace="nowrap"
                >
                    E-mail:
                </Typography>
                <Typography
                    variant="body1"
                    fontWeight={600}
                    color={"grey.main"}
                >
                    lorem@lorem.com
                </Typography>
            </Grid>
        </Grid>
    )
}

export default About;