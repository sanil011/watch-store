import { Fragment } from "react";
import {
    Box,
    Typography,
    Stack,
    List,
    ListSubheader,
    ListItem,
    Grid,
    ListItemText,
} from "@mui/material";
import Image from 'next/image'
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Left from "../../assets/single-1.jpg";
import Right from "../../assets/single-2.jpg";
const Tab1 = () => {
    return (
        <Fragment>

            <Grid container sx={{ minHeight: "calc(100vh - 200px)", border: "1px solid grey" }}>
                <Grid item xs={12} sm={6} md={6} minHeight={"400px"} position={"relative"} sx={{ borderRight: "1px solid grey" }}>
                    <Image src={Left} alt="" fill />
                </Grid>
                <Grid item xs={12} sm={6} md={6} sx={{
                    margin: "auto 0", paddingLeft: "1em"
                }}>
                    <Stack spacing={2}>
                        <Typography
                            variant="subtitle2"
                            color={"secondary.main"}
                            fontWeight={700}
                        >
                            DESCRIPTION
                        </Typography>
                        <Typography variant="body2" color={"grey.main"}>
                            The Grand Camel is a timepiece designed to suit the masculine and
                            confident man because of its combination of thick yet smooth cognac
                            coated calf leather, the stainless steel case and hands.
                        </Typography>
                    </Stack>
                    <List>
                        <ListSubheader
                            // disableGutters
                            sx={{
                                color: "secondary.main",
                                fontWeight: 700,
                            }}
                        >
                            PRODUCT DETAILS
                        </ListSubheader>
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
                                sx={{
                                    color: "grey.main",
                                    pl: "0.5rem",
                                }}
                            >
                                Case thickness: 6 mm
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
                                sx={{
                                    color: "grey.main",
                                    pl: "0.5rem",
                                }}
                            >
                                Case thickness: 6 mm
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
                                sx={{
                                    color: "grey.main",
                                    pl: "0.5rem",
                                }}
                            >
                                Dial color: white
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
                                sx={{
                                    color: "grey.main",
                                    pl: "0.5rem",
                                }}
                            >
                                Strap width: 20 mm
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
                                sx={{
                                    color: "grey.main",
                                    pl: "0.5rem",
                                }}
                            >
                                Strap color: brown
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
                                sx={{
                                    color: "grey.main",
                                    pl: "0.5rem",
                                }}
                            >
                                Interchangeble strap: Yes
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
                                sx={{
                                    color: "grey.main",
                                    pl: "0.5rem",
                                }}
                            >
                                Material: doulble plated stainless steel
                            </ListItemText>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>

            <Grid container
                sx={{
                    minHeight: "calc(100vh - 200px)", borderBottom: "1px solid grey"
                }} >
                <Grid item xs={12} sm={6} md={6} sx={{
                    margin: "auto 0", paddingLeft: "1em", paddingBottom: "1em",
                }}>
                    <Typography variant="subtitle1" color="secondary.main" fontWeight={700}>
                        DESCRIPTION
                    </Typography>
                    <Typography variant="body1" color="grey.main">
                        With a flawlessly round and simple dial, a classy leather band and an
                        elegant casing, you have a timepiece that proves that perfection in
                        engineering not only is a possibility, but a reality.
                    </Typography>
                    <Typography variant="body1" color="grey.main">
                        It’s a functional unisex watch. it can be worn in scenarios where it
                        is likely to be splashed but not immersed in water. It can be worn
                        while washing your hands and will be fine in rain. We ship it with an
                        original box and a guarantee from the manufacturer.
                    </Typography>
                    <Stack
                        direction={"row"}
                        spacing={1}
                        sx={{
                            "& svg": {
                                cursor: "pointer",
                                transition: "200ms",
                                fontSize: "1.3rem",
                                color: "grey.main",
                                "&:hover": {
                                    color: "primary.main",
                                },
                            },
                        }}
                    >
                        <FacebookIcon /> <InstagramIcon /> <TwitterIcon />
                    </Stack>
                </Grid>

                <Grid item xs={12} sm={6} md={6} minHeight={"400px"} position={"relative"} sx={{ borderLeft: "1px solid grey" }}>
                    <Image src={Right} alt="" fill />
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default Tab1