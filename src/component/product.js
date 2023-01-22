import Image from 'next/image'
import { Typography, Divider, Box, Stack } from "@mui/material";
import { Watches } from "../store/watches"
const product = (name) => {
    console.log(name)
    const item = Watches[name.name];
    return (
        <div style={{ display: "flex", flexDirection: "column", padding: "5px 0 15px 0", alignItems: "center", position: "relative", width: "25%", borderBottom: "1.2px solid grey" }}>
            <img
                src={item?.src[0]}
                alt=""
                width={"80%"}
            />
            <Typography variant='body2'
                color={"secondary.main"}
                fontWeight={700}
                textAlign={"center"}>
                {name?.name}

                <br /> ₹{item?.price}
            </Typography>

        </div>
    )
}

export default product