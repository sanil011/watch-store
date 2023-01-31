import { Fragment } from "react";
import {
    Box,
    Typography,
    Stack,
} from "@mui/material";
import { grey } from "@mui/material/colors";
const Tab2 = ({
    brand,
    manufacturer,
    display,
    strapMaterial,
    waterResistance,
    movement,
    color,
    alarmClock,
}) => {
    return (
        <div style={{ borderTop: "1px solid grey" }}>
            <div style={{ margin: " 0 4em" }}>
                <Typography variant="h5" fontWeight={600} sx={{ padding: " .7em 0" }} borderBottom={1}
                    borderColor={grey[300]}>Additional information</Typography>
                <Stack direction={"row"}>
                    <Typography variant="subtitle1" width={{
                        md: "20%",
                        sm: "30%",
                        xs: "50%",
                    }} fontWeight={600}
                        color={"grey.main"} pb={1.5}
                        pt={1}
                        borderBottom={1}
                        borderColor={grey[300]}
                    >Brand
                    </Typography>
                    <Typography
                        pb={1.5}
                        borderBottom={1}
                        borderColor={grey[300]}
                        pt={1}
                        variant="subtitle1"
                        fontWeight={600}
                        color={"grey.main"}
                        width={{
                            md: "80%",
                            sm: "70%",
                            xs: "50%",
                        }}
                    > {brand}</Typography>
                </Stack>
                {manufacturer && <Stack direction={"row"}>
                    <Typography variant="subtitle1" fontWeight={600}
                        color={"grey.main"} pb={1.5}
                        pt={1}
                        borderBottom={1}
                        borderColor={grey[300]}
                        width={{
                            md: "20%",
                            sm: "30%",
                            xs: "50%",
                        }} display={"flex"}>Manufacturer
                    </Typography>
                    <Typography
                        width={{
                            md: "80%",
                            sm: "70%",
                            xs: "50%",
                        }}
                        borderBottom={1}
                        borderColor={grey[300]}
                        pb={1.5}
                        pt={1}
                        variant="subtitle1"
                        fontWeight={600}
                        color={"grey.main"}
                    >{manufacturer} </Typography>
                </Stack>}

                {color && <Stack direction={"row"}>
                    <Typography variant="subtitle1" fontWeight={600}
                        color={"grey.main"} pb={1.5}
                        pt={1} width={{
                            md: "20%",
                            sm: "30%",
                            xs: "50%",
                        }}
                        borderBottom={1}
                        borderColor={grey[300]}
                        display={"flex"}>Color
                    </Typography>
                    <Typography
                        pb={1.5}
                        pt={1}
                        width={{
                            md: "80%",
                            sm: "70%",
                            xs: "50%",
                        }}
                        borderBottom={1}
                        borderColor={grey[300]}
                        variant="subtitle1"
                        fontWeight={600}
                        color={"grey.main"}
                    >{color} </Typography>
                </Stack>}

                {display && <Stack direction={"row"}>
                    <Typography variant="subtitle1" fontWeight={600}
                        color={"grey.main"} pb={1.5}
                        pt={1} width={{
                            md: "20%",
                            sm: "30%",
                            xs: "50%",
                        }}
                        borderBottom={1}
                        borderColor={grey[300]}
                        display={"flex"}>Display
                    </Typography>
                    <Typography
                        pb={1.5}
                        pt={1}
                        width={{
                            md: "80%",
                            sm: "70%",
                            xs: "50%",
                        }}
                        borderBottom={1}
                        borderColor={grey[300]}
                        variant="subtitle1"
                        fontWeight={600}
                        color={"grey.main"}
                    >{display} </Typography>
                </Stack>}

                {strapMaterial && <Stack direction={"row"}>
                    <Typography variant="subtitle1" fontWeight={600}
                        color={"grey.main"} pb={1.5}
                        pt={1} width={{
                            md: "20%",
                            sm: "30%",
                            xs: "50%",
                        }}
                        borderBottom={1}
                        borderColor={grey[300]}
                        display={"flex"}>Strap Material
                    </Typography>
                    <Typography
                        pb={1.5}
                        pt={1}
                        width={{
                            md: "80%",
                            sm: "70%",
                            xs: "50%",
                        }}
                        variant="subtitle1"
                        borderBottom={1}
                        borderColor={grey[300]}
                        fontWeight={600}
                        color={"grey.main"}
                    >{strapMaterial} </Typography>
                </Stack>}

                {waterResistance && <Stack direction={"row"}>
                    <Typography variant="subtitle1" fontWeight={600}
                        color={"grey.main"} pb={1.5}
                        pt={1} width={{
                            md: "20%",
                            sm: "30%",
                            xs: "50%",
                        }}
                        borderBottom={1}
                        borderColor={grey[300]}
                        display={"flex"}>Water Resistance
                    </Typography>
                    <Typography
                        pb={1.5}
                        width={{
                            md: "80%",
                            sm: "70%",
                            xs: "50%",
                        }}
                        pt={1}
                        borderBottom={1}
                        borderColor={grey[300]}
                        variant="subtitle1"
                        fontWeight={600}
                        color={"grey.main"}
                    >{waterResistance} </Typography>
                </Stack>}

                {movement && <Stack direction={"row"}>
                    <Typography variant="subtitle1" fontWeight={600}
                        color={"grey.main"} pb={1.5}
                        pt={1} width={{
                            md: "20%",
                            sm: "30%",
                            xs: "50%",
                        }}
                        display={"flex"}>Movement
                    </Typography>
                    <Typography
                        pb={1.5}
                        width={{
                            md: "80%",
                            sm: "70%",
                            xs: "50%",
                        }}
                        pt={1}
                        variant="subtitle1"
                        fontWeight={600}
                        color={"grey.main"}
                    >{movement} </Typography>
                </Stack>
                }
                {alarmClock && <Stack direction={"row"}>
                    <Typography variant="subtitle1" fontWeight={600}
                        color={"grey.main"} pb={1.5}
                        pt={1} width={{
                            md: "20%",
                            sm: "30%",
                            xs: "50%",
                        }}
                        display={"flex"}>Alarm Clock
                    </Typography>
                    <Typography
                        pb={1.5}
                        width={{
                            md: "80%",
                            sm: "70%",
                            xs: "50%",
                        }}
                        pt={1}
                        variant="subtitle1"
                        fontWeight={600}
                        color={"grey.main"}
                    >{alarmClock} </Typography>
                </Stack>}
            </div>
        </div>
    )
}

export default Tab2