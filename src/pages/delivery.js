import React from 'react'
import { Typography, Stack, Divider, Grid } from "@mui/material";
const Delivery = () => {
    return (
        <div>
            <div style={{ textAlign: "center", margin: "7em 0" }}>
                <Typography variant='h4' fontWeight={600} >
                    DELIVERY AND RETURNS
                </Typography>
                <Typography color={"grey.main"} variant="h6" fontWeight={400} my={4}>
                    See below for information about the delivery & returns options in your country.
                </Typography>
            </div>
            <Grid container sx={{ padding: "0 3em", marginBottom: "4em", justifyContent: "space-between" }}>
                <Grid item xs={12} sm={5} style={{ borderTop: "1.2px solid grey", borderBottom: "1.2px solid grey" }}>
                    <Stack direction={"row"} mt={3} justifyContent={"space-between"}>
                        <Typography fontWeight={600} variant="h6">
                            STANDARD DELIVERY
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            color="primary.main"
                            fontWeight={700}
                        >
                            ₹20
                        </Typography>
                    </Stack>
                    <Typography color={"grey.main"}>
                        Delivered on or before Thursday, 25 Feb 2023
                    </Typography>
                    <Divider
                        sx={{
                            width: "15px",
                            height: "3px",
                            backgroundColor: "primary.main",
                            my: 2,
                        }}
                    />
                    <Stack direction={"row"} mb={3} alignItems={"center"} columnGap={0.5}>
                        <Typography
                            variant="subtitle2"
                            color="primary.main"
                            fontWeight={700}
                        >
                            NOTE:
                        </Typography>
                        <Typography variant="body2" color="grey.main" fontSize={13}>
                            Subject to placing your order before specific cut-off times.
                            Details available in checkout.
                        </Typography>
                    </Stack>
                </Grid>


                <Grid item xs={12} sm={5} sx={{ borderTop: "1.2px solid grey", borderBottom: "1.2px solid grey" }}>
                    <Stack direction={"row"} mt={3} justifyContent={"space-between"}>
                        <Typography fontWeight={600} variant="h6">
                            EXPRESS DELIVERY
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            color="primary.main"
                            fontWeight={700}
                        >
                            ₹50
                        </Typography>
                    </Stack>
                    <Typography color={"grey.main"}>
                        Delivered on or before Thursday, 20 Feb 2023
                    </Typography>
                    <Divider
                        sx={{
                            width: "15px",
                            height: "3px",
                            backgroundColor: "primary.main",
                            my: 2,
                        }}
                    />
                    <Stack direction={"row"} mb={3} alignItems={"center"} columnGap={0.5}>
                        <Typography
                            variant="subtitle2"
                            color="primary.main"
                            fontWeight={700}
                        >
                            NOTE:
                        </Typography>
                        <Typography variant="body2" color="grey.main" fontSize={13}>
                            Subject to placing your order before specific cut-off times.
                            Details available in checkout.
                        </Typography>
                    </Stack>
                </Grid>

            </Grid>
        </div>
    )
}

export default Delivery