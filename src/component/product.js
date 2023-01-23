import Image from 'next/image'
import { Typography, Divider, Box, Stack } from "@mui/material";
import { Watches } from "../store/watches"
const Product = (name) => {
    const item = Watches[name.name];
    return (
        <div style={{ display: "flex", flexDirection: "column", width: "100%", padding: "5px 0 15px 0", alignItems: "center", position: "relative", border: ".2px solid grey" }}>
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

export default Product